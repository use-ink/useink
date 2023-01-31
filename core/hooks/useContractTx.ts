import { ContractPromise } from '@polkadot/api-contract';
import { useMemo, useState } from 'react';
import { ContractSubmittableResult } from '../types/mod.ts';
import {
  ContractExecResultResult,
  ContractOptions,
  ContractTxFunc,
  Status,
} from '../types/mod.ts';
import {
  callContractRaw,
  toContractAbiMessage,
  toRegistryErrorDecoded,
} from '../utils/mod.ts';
import { useConfig } from './useConfig.ts';
import { useExtension } from './useExtension.ts';
import { useNotifications } from './useNotifications.ts';

type ContractTxConfig = {
  notificationsOff?: boolean;
  notifications?: {
    broadcastMessage?: (result: ContractExecResultResult) => string;
    finalizedMessage?: (result: ContractExecResultResult) => string;
    inBlockMessage?: (result: ContractExecResultResult) => string;
    unknownErrorMessage?: (e?: unknown) => string;
  };
};

export function useContractTx(
  contract: ContractPromise | undefined,
  message: string,
  config?: ContractTxConfig,
): ContractTxFunc {
  const { account, extension } = useExtension();
  const { addNotification } = useNotifications();
  const C = useConfig();
  const withNotifications = !config?.notificationsOff && !C.notifications?.off;
  const [status, setStatus] = useState<Status>('None');
  const [result, setResult] = useState<ContractSubmittableResult>();
  const [error, setError] = useState<string | null>(null);
  const {
    broadcastMessage,
    inBlockMessage,
    finalizedMessage,
    unknownErrorMessage,
  } = config?.notifications || {};

  const send: (args: unknown[], o?: ContractOptions) => void = useMemo(
    () => (args, options) => {
      if (!account || !contract || !extension) return;

      error && setError(null);
      setStatus('PendingSignature');

      const abiMessage = toContractAbiMessage(contract, message);

      if (!abiMessage.ok) {
        setError(abiMessage.error);
        setStatus('Errored');
        return;
      }

      callContractRaw(
        contract,
        abiMessage.value,
        account.address,
        args,
        options,
      )
        .then((response) => {
          if (!response) {
            console.error('undefined response');
            return;
          }

          const { gasRequired, result } = response;

          try {
            const dispatchError = toRegistryErrorDecoded(
              contract.abi.registry,
              result,
            );

            if (result.isErr && dispatchError) {
              setError(dispatchError.docs.join(', '));
              console.error('dispatch error', dispatchError);

              withNotifications &&
                addNotification({
                  notification: {
                    type: 'Errored',
                    message: dispatchError.docs.join(', '),
                  },
                });

              return;
            }
          } catch (e) {
            console.error('errored', e);
          }

          const contractTx = contract.tx[message];

          if (!contractTx) {
            console.error(`'${message}' not found on contract instance`);
          }

          contractTx && contractTx(
            { gasLimit: gasRequired, ...(options || {}) },
            ...args,
          )
            .signAndSend(
              account.address,
              { signer: extension.signer },
              (response: ContractSubmittableResult) => {
                setResult(response);

                if (response.status.isBroadcast) {
                  setStatus('Broadcast');

                  withNotifications &&
                    addNotification({
                      notification: {
                        type: 'Broadcast',
                        message: broadcastMessage
                          ? broadcastMessage(result)
                          : 'Broadcast',
                      },
                    });
                }

                if (response.status.isInBlock) {
                  setStatus('InBlock');

                  withNotifications &&
                    addNotification({
                      notification: {
                        type: 'InBlock',
                        message: inBlockMessage
                          ? inBlockMessage(result)
                          : 'In Block',
                      },
                    });
                }

                if (response.status.isFinalized) {
                  setStatus('Finalized');

                  withNotifications &&
                    addNotification({
                      notification: {
                        type: 'Finalized',
                        message: finalizedMessage
                          ? finalizedMessage(result)
                          : 'Finalized',
                      },
                    });
                }
              },
            )
            .catch((e: unknown) => {
              setStatus('None');
              const err = JSON.stringify(e);
              const message = err === '{}'
                ? (unknownErrorMessage
                  ? unknownErrorMessage(e)
                  : 'Something went wrong')
                : err;
              setError(message);
              console.error('tx error', message);

              withNotifications &&
                addNotification({
                  notification: {
                    type: 'Errored',
                    message,
                  },
                });
            });
        })
        .catch((e) => {
          setStatus('None');
          const err = JSON.stringify(e);

          const message = err === '{}'
            ? (unknownErrorMessage
              ? unknownErrorMessage(e)
              : 'Something went wrong')
            : err;
          setError(message);

          console.log('raw-error', e);
          console.error('pre-flight error:', message);

          withNotifications &&
            addNotification({
              notification: {
                type: 'Errored',
                message,
              },
            });
        });
    },
    [account, extension, contract],
  );

  return {
    send,
    status,
    error,
    result,
    resetState: () => {
      setStatus('None');
      setError(null);
    },
  };
}
