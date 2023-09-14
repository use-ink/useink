import { useCallback, useState } from 'react';
import {
  DecodedContractResult,
  LazyCallOptions,
  call,
} from '../../../core/index';
import { ChainContract, useDefaultCaller } from '../index';
import { useWallet } from '../wallets/useWallet.ts';
import { useAbiMessage } from './useAbiMessage.ts';

export type CallSend = (
  args?: Array<unknown>,
  options?: LazyCallOptions,
) => Promise<void>;

export interface UseCall<T> {
  isSubmitting: boolean;
  result?: DecodedContractResult<T>;
  send: CallSend;
}
export function useCall<T>(
  chainContract: ChainContract | undefined,
  message: string,
): UseCall<T> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<DecodedContractResult<T>>();
  const { account } = useWallet();
  const abiMessage = useAbiMessage(chainContract?.contract, message);
  const defaultCaller = useDefaultCaller(chainContract?.chainId);

  const send: CallSend = useCallback(
    async (args: Parameters<typeof call>[3], options?: LazyCallOptions) => {
      const caller = account?.address
        ? account.address
        : options?.defaultCaller
        ? defaultCaller
        : undefined;
      if (!abiMessage || !chainContract?.contract || !caller) return;

      try {
        setIsSubmitting(true);
        const callResult = await call<T>(
          chainContract.contract,
          abiMessage,
          caller,
          args,
          options,
        );
        setResult(callResult);
      } catch (error: unknown) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [account, abiMessage],
  );

  return { send, isSubmitting, result };
}
