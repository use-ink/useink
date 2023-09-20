import { useMemo } from 'react';
import { ChainId } from '../../../chains/index';
import { useChain } from './useChain.ts';
import { useConfig } from './useConfig.ts';

export const useDefaultCaller = (chainId?: ChainId): string | undefined => {
  const { caller } = useConfig();
  const defaultChain = useChain();
  if (!caller) return;

  return useMemo(
    () => caller[`${chainId || defaultChain}` as ChainId] || caller.default,
    [chainId, caller, defaultChain],
  );
};
