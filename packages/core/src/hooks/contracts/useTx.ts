import { ContractPromise } from '@polkadot/api-contract';
import { ContractOptions } from '@polkadot/api-contract/types';
import { useMemo, useState } from 'react';
import { ContractSubmittableResult } from '../../types';
import { Status } from '../../types';
import { useAbiMessage } from './useAbiMessage.ts';
import { useWallet } from '../useWallet.ts';
import { ApiBase } from '@polkadot/api/types';
import { useDryRun } from './useDryRun.ts';

export type ContractSubmittableResultCallback = (
  result: ContractSubmittableResult,
  api?: ApiBase<'promise'>,
) => void;

export type SignAndSend = (
  args?: unknown[],
  o?: ContractOptions,
  cb?: ContractSubmittableResultCallback,
) => void;

export interface Tx<T> {
  signAndSend: SignAndSend;
  status: Status;
  result: ContractSubmittableResult | undefined;
  resetState: () => void;
}

export function useTx<T>(
  contract: ContractPromise | undefined,
  message: string,
): Tx<T> {
  const { account } = useWallet();
  const [status, setStatus] = useState<Status>('None');
  const [result, setResult] = useState<ContractSubmittableResult>();
  const abiMessage = useAbiMessage(contract, message);
  const dryRun = useDryRun(contract, message);

  const signAndSend: SignAndSend = useMemo(
    () => (params, options, cb) => {
      if (!contract || !account || !account.wallet?.extension) return;

      dryRun.send(params, options).then((response) => {
        if (!response || !response.ok) return;
        setStatus('PendingSignature');

        const { gasRequired } = response.value.raw;
        const tx = contract.tx[message];

        if (!tx) {
          console.error(`'${message}' not found on contract instance`);
          return;
        }

        tx(
          { gasLimit: gasRequired, ...(options || {}) },
          ...(params || []),
        )
          .signAndSend(
            account.address,
            { signer: account.wallet?.extension?.signer },
            (response: ContractSubmittableResult) => {
              setResult(response);
              setStatus(response.status.type);
              cb && cb(response, contract.api);
            },
          )
          .catch((e: unknown) => {
            console.error(e);
            setStatus('None');
          });
      })
        .catch((e) => {
          console.error(e);
          setStatus('None');
        });
    },
    [account, account?.wallet?.extension?.signer, contract, abiMessage],
  );

  return {
    signAndSend,
    status,
    result,
    resetState: () => {
      setResult(undefined);
      setStatus('None');
    },
  };
}
