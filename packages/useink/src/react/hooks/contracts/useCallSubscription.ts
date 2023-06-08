<<<<<<<< HEAD:packages/useink/src/react/hooks/contracts/useCallSubscription.ts
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { CallOptions, ChainContract } from './types.ts';
import { Call, useCall } from './useCall.ts';
import { useEffect } from 'react';
========
import { useEffect } from 'react';
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { Call, useCall } from './useCall.ts';
import { CallOptions, ChainContract } from './types.ts';
>>>>>>>> main:react/hooks/contracts/useCallSubscription.ts

export function useCallSubscription<T>(
  chainContract: ChainContract | undefined,
  message: string,
  args = [] as unknown[],
  options?: CallOptions,
): Omit<Call<T>, 'send'> {
  const call = useCall<T>(chainContract, message);
  const blockNumber = useBlockHeader(chainContract?.chainId)?.blockNumber;

  useEffect(() => {
    call.send(args, options);
  }, [blockNumber]);

  return call;
}
