import { useEffect } from 'react';
import { ContractOptions } from '../../types/mod.ts';
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { Call, useCall } from './useCall.ts';
import { ChainContract } from './useContract.ts';

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
