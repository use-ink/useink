import {
  ApiBase,
  ContractSubmittableResult,
  EventRecord,
  LazyContractOptions,
  TransactionStatus,
  toContractOptions,
} from '../../../core/index';
import { useWallet } from '../wallets/useWallet.ts';
import { ChainContract } from './types.ts';
import { useDryRun } from './useDryRun.ts';
import { useTxEvents } from './useTxEvents.ts';
import { useMemo, useState } from 'react';

export type ContractSubmittableResultCallback = (
  result?: ContractSubmittableResult,
  api?: ApiBase<'promise'>,
  error?: unknown,
) => void;

export type SignAndSend = (
  args?: unknown[],
  o?: LazyContractOptions,
  cb?: ContractSubmittableResultCallback,
) => void;

export interface Tx<T> {
  signAndSend: SignAndSend;
  status: TransactionStatus;
  result: ContractSubmittableResult | undefined;
  resetState: () => void;
  events: EventRecord[];
}

export function useTx<T>(
  chainContract: ChainContract | undefined,
  message: string,
): Tx<T> {
  const { account } = useWallet();
  const [status, setStatus] = useState<TransactionStatus>('None');
  const [result, setResult] = useState<ContractSubmittableResult>();
  const dryRun = useDryRun(chainContract, message);
  const txEvents = useTxEvents({ status, result });

  const signAndSend: SignAndSend = useMemo(
    () => (params, options, cb) => {
      if (!chainContract?.contract || !account || !account.wallet?.extension) {
        return;
      }

      dryRun
        .send(params, options)
        .then((response) => {
          if (!response || !response.ok) return;
          setStatus('PendingSignature');

          const { gasRequired } = response.value.raw;
          const tx = chainContract?.contract.tx[message];

          if (!tx) {
            cb?.(
              undefined,
              chainContract.contract.api,
              `'${message}' not found on contract instance`,
            );
            return;
          }

          tx(
            { gasLimit: gasRequired, ...toContractOptions(options) },
            ...(params || []),
          )
            .signAndSend(
              account.address,
              { signer: account.wallet?.extension?.signer },
              (response: ContractSubmittableResult) => {
                setResult(response);
                setStatus(response.status.type);
                cb?.(response, chainContract?.contract.api);
              },
            )
            .catch((e: unknown) => {
              cb?.(undefined, chainContract.contract.api, e);
              setStatus('None');
            });
        })
        .catch((e) => {
          cb?.(undefined, chainContract.contract.api, e);
          setStatus('None');
        });
    },
    [account, account?.wallet?.extension?.signer, chainContract?.contract],
  );

  return {
    signAndSend,
    status,
    result,
    resetState: () => {
      setResult(undefined);
      setStatus('None');
      txEvents.resetState();
    },
    events: txEvents.events,
  };
}
