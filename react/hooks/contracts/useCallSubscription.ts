import { useEffect } from 'react';
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { Call, useCall } from './useCall.ts';
import { ChainContract } from './useContract.ts';
import { ContractOptions } from '../../../core/mod.ts';

export function useCallSubscription<T>(
  chainContract: ChainContract | undefined,
  message: string,
  args = [] as unknown[],
  options?: ContractOptions,
  caller?: string,
): Omit<Call<T>, 'send'> {
  const call = useCall<T>(chainContract?.contract, message);
  const blockNumber = useBlockHeader(chainContract?.chainId)?.blockNumber;

  useEffect(() => {
    call.send(args, options, caller);
  }, [blockNumber]);

  return call;
}
