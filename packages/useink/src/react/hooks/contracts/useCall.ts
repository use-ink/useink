import {
  DecodedContractResult,
  LazyCallOptions,
  call,
} from '../../../core/index';
import { ChainContract, useDefaultCaller } from '../index';
import { useWallet } from '../wallets/useWallet.ts';
import { useAbiMessage } from './useAbiMessage.ts';
import { useCallback, useState } from 'react';

export type CallSend<T> = (
  args?: unknown[],
  options?: LazyCallOptions,
) => Promise<DecodedContractResult<T> | undefined>;

export interface UseCall<T> {
  send: CallSend<T>;
  isSubmitting: boolean;
}

export enum CallError {
  ContractUndefined = 'Contract is undefined',
  InvalidAbiMessage = 'Invalid ABI Message',
  NoResponse = 'No response',
}

export interface Call<T> extends UseCall<T> {
  result?: DecodedContractResult<T>;
}

export function useCall<T>(
  chainContract: ChainContract | undefined,
  message: string,
): Call<T> {
  const [result, setResult] = useState<DecodedContractResult<T>>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const abiMessage = useAbiMessage(chainContract?.contract, message);
  const { account } = useWallet();
  const defaultCaller = useDefaultCaller(chainContract?.chainId);

  const send = useCallback(
    async (
      args: Parameters<typeof call>[3],
      options?: LazyCallOptions,
    ): Promise<DecodedContractResult<T> | undefined> => {
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
        setIsSubmitting(false);

        return callResult;
      } catch (e: unknown) {
        console.error(e);
        setIsSubmitting(false);
        return;
      }
    },
    [account, abiMessage],
  );

  return { send, isSubmitting, result };
}
