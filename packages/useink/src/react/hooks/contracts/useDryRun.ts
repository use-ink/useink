import { useCallback, useState } from 'react';
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

type DryRunResult<T> = DecodedTxResult<T> | undefined;

export type DryRunSend<T> = (
  args?: Array<unknown>,
  options?: LazyCallOptions,
) => Promise<DryRunResult<T>>;

export interface UseDryRun<T> {
  isSubmitting: boolean;
  resetState: () => void;
  resolved: boolean;
  result?: DecodedTxResult<T>;
  send: DryRunSend<T>;
}

export function useDryRun<T>(
  chainContract: ChainContract | undefined,
  message: string,
): UseDryRun<T> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<DecodedTxResult<T>>();
  const { account } = useWallet();
  const abiMessage = useAbiMessage(chainContract?.contract, message);
  const defaultCaller = useDefaultCaller(chainContract?.chainId);

  const send: DryRunSend<T> = useCallback(
    async (args, options) => {
      const tx = chainContract?.contract?.tx?.[message];
      const caller = account?.address
        ? account.address
        : options?.defaultCaller
        ? defaultCaller
        : undefined;

      if (!caller || !chainContract?.contract || !abiMessage || !tx) {
        return;
      }

      try {
        setIsSubmitting(true);
        const callResult = await call<T>(
          chainContract.contract,
          abiMessage,
          caller,
          args,
          options,
        );

        if (!callResult || !callResult.ok) {
          setResult(callResult);
          return callResult;
        }

        const { gasConsumed, gasRequired, storageDeposit } =
          callResult.value.raw;

        const requiresNoArguments = tx.meta.args.length === 0;
        const { partialFee } = await (requiresNoArguments
          ? tx(toContractOptions(options))
          : tx(toContractOptions(options), ...(args || []))
        ).paymentInfo(caller);

        const extendedCallResult = {
          ...callResult,
          value: {
            ...callResult.value,
            gasRequired,
            gasConsumed,
            storageDeposit,
            partialFee,
          },
        };
        setResult(extendedCallResult);
        return extendedCallResult;
      } catch (error: unknown) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
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
