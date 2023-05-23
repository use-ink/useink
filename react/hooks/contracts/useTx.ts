import { useMemo, useState } from 'react';
import { useWallet } from '../wallets/useWallet.ts';
import { useDryRun } from './useDryRun.ts';
import {
  ApiBase,
  ContractOptions,
  ContractPromise,
  ContractSubmittableResult,
  TransactionStatus,
} from '../../../core/mod.ts';

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
  status: TransactionStatus;
  result: ContractSubmittableResult | undefined;
  resetState: () => void;
}

export function useTx<T>(
  contract: ContractPromise | undefined,
  message: string,
): Tx<T> {
  const { account } = useWallet();
  const [status, setStatus] = useState<TransactionStatus>('None');
  const [result, setResult] = useState<ContractSubmittableResult>();
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
    [account, account?.wallet?.extension?.signer, contract],
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
