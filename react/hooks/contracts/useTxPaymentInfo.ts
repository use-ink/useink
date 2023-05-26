import { useCallback, useState } from 'react';
import { useWallet } from '../wallets/useWallet.ts';
import { RuntimeDispatchInfo, SignerOptions } from '../../../core/mod.ts';
import { CallOptions } from './types.ts';
import { ChainContract, useDefaultCaller } from '../mod.ts';

type Send = (
  params?: unknown[],
  options?: CallOptions,
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

  const send = useCallback<Send>(async (params, options, signerOptions) => {
    const tx = chainContract?.contract?.tx?.[message];
    const caller = account?.address || options?.defaultCaller
      ? defaultCaller
      : undefined;

    if (!tx || !caller) return;

    try {
      setIsSubmitting(true);

      const requiresNoArguments = tx.meta.args.length === 0;
      const paymentInfoResult = await (requiresNoArguments
        ? tx(options || {})
        : tx(options || {}, params))
        .paymentInfo(caller, signerOptions);

      setResult(paymentInfoResult);
      setIsSubmitting(false);

      return paymentInfoResult;
    } catch (e: unknown) {
      console.error(e);
      setIsSubmitting(false);
      return;
    }
  }, [chainContract?.contract, message, account, defaultCaller]);

  return {
    isSubmitting,
    resolved: Boolean(!isSubmitting && result),
    result,
    send,
  };
}
