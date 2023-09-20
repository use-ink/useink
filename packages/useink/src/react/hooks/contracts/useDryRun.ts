import {
  DecodedTxResult,
  LazyCallOptions,
  call,
  toContractOptions,
} from '../../../core/index';
import { useDefaultCaller } from '../config/index';
import { useWallet } from '../wallets/useWallet.ts';
import { ChainContract } from './types.ts';
import { useAbiMessage } from './useAbiMessage.ts';
import { useMemo, useState } from 'react';

export type DryRunResult<T> = DecodedTxResult<T>;

export type Send<T> = (
  args?: unknown[],
  o?: LazyCallOptions,
) => Promise<DryRunResult<T> | undefined>;

export interface DryRun<T> {
  send: Send<T>;
  isSubmitting: boolean;
  result?: DryRunResult<T>;
  resolved: Boolean;
  resetState: () => void;
}

export function useDryRun<T>(
  chainContract: ChainContract | undefined,
  message: string,
): DryRun<T> {
  const { account } = useWallet();
  const defaultCaller = useDefaultCaller(chainContract?.chainId);
  const [result, setResult] = useState<DecodedTxResult<T>>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const abiMessage = useAbiMessage(chainContract?.contract, message);

  const send: Send<T> = useMemo(
    () => async (params, options) => {
      const tx = chainContract?.contract?.tx?.[message];
      const caller = account?.address
        ? account.address
        : options?.defaultCaller
        ? defaultCaller
        : undefined;

      if (!caller || !chainContract?.contract || !abiMessage || !tx) {
        return;
      }

      setIsSubmitting(true);

      try {
        const resp = await call<T>(
          chainContract.contract,
          abiMessage,
          caller,
          params,
          options,
        );

        if (!resp || !resp.ok) return;

        const { gasConsumed, gasRequired, storageDeposit } = resp.value.raw;

        const requiresNoArguments = tx.meta.args.length === 0;
        const { partialFee } = await (requiresNoArguments
          ? tx(toContractOptions(options))
          : tx(toContractOptions(options), ...(params || []))
        ).paymentInfo(caller);

        const r = {
          ...resp,
          value: {
            ...resp.value,
            gasRequired,
            gasConsumed,
            storageDeposit,
            partialFee,
          },
        };

        setIsSubmitting(false);
        setResult(r);

        return r;
      } catch (e: unknown) {
        console.error(e);
        setIsSubmitting(false);
        return;
      }
    },
    [account, chainContract?.contract, abiMessage],
  );

  return {
    send,
    isSubmitting,
    result,
    resolved: Boolean(result && !isSubmitting),
    resetState: () => {
      setIsSubmitting(false);
      setResult(undefined);
    },
  };
}
