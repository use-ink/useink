import { ChainContract, useDefaultCaller } from '..';
import {
  LazyCallOptions,
  RuntimeDispatchInfo,
  SignerOptions,
  txPaymentInfo,
} from '../../../core';
import { useWallet } from '../wallets/useWallet.ts';
import { useCallback, useState } from 'react';

type Send = (
  params?: unknown[],
  options?: LazyCallOptions,
  signerOptions?: Partial<SignerOptions>,
) => Promise<RuntimeDispatchInfo | undefined>;

interface TxPaymentInfo {
  isSubmitting: boolean;
  result?: RuntimeDispatchInfo;
  send: Send;
  resolved: boolean;
}

export function useTxPaymentInfo(
  chainContract: ChainContract | undefined,
  message: string,
): TxPaymentInfo {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<RuntimeDispatchInfo>();
  const { account } = useWallet();
  const defaultCaller = useDefaultCaller();

  const send = useCallback<Send>(
    async (params, options, signerOptions) => {
      const caller =
        account?.address || options?.defaultCaller ? defaultCaller : undefined;

      if (!chainContract?.contract || !caller) return;

      try {
        setIsSubmitting(true);

        const paymentInfoResult = await txPaymentInfo(
          chainContract.contract,
          message,
          caller,
          params,
          options,
          signerOptions,
        );

        setResult(paymentInfoResult);
        setIsSubmitting(false);

        return paymentInfoResult;
      } catch (e: unknown) {
        console.error(e);
        setIsSubmitting(false);
        return;
      }
    },
    [chainContract?.contract, message, account, defaultCaller],
  );

  return {
    isSubmitting,
    resolved: Boolean(!isSubmitting && result),
    result,
    send,
  };
}
