import { LazyCallOptions } from '../../../core/index.ts';
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { ChainContract } from './types.ts';
import { Call, useCall } from './useCall.ts';
import { useEffect } from 'react';

export function useCallSubscription<T>(
  chainContract: ChainContract | undefined,
  message: string,
  args = [] as unknown[],
  options?: LazyCallOptions,
): Omit<Call<T>, 'send'> {
  const call = useCall<T>(chainContract, message);
  const blockNumber = useBlockHeader(chainContract?.chainId)?.blockNumber;

  useEffect(() => {
    call.send(args, options);
  }, [blockNumber]);

  return call;
}
