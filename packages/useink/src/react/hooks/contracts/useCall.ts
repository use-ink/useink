import { useCallback, useState } from 'react';
import { call, DecodedContractResult } from '../../../core/index';
import { useAbiMessage } from './useAbiMessage.ts';
import { useWallet } from '../wallets/useWallet.ts';
import { CallOptions } from './types.ts';
import { ChainContract, useDefaultCaller } from '../index';

export type CallSend<T> = (
  args?: unknown[],
  options?: CallOptions,
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
    // TODO type
    async (
      args: any,
      options: any,
    ): Promise<DecodedContractResult<T> | undefined> => {
      const caller =
        account?.address || options?.defaultCaller ? defaultCaller : undefined;
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
