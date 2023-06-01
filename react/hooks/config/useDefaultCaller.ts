import { useMemo } from 'react';
import { useConfig } from './useConfig.ts';
import { ChainId } from '../../../chains/mod.ts';
import { useChain } from './useChain.ts';

export const useDefaultCaller = (chainId?: ChainId): string | undefined => {
  const { caller } = useConfig();
  const defaultChain = useChain();
  if (!caller) return;

  return useMemo(() => (
    caller[`${chainId || defaultChain}` as ChainId] || caller.default
  ), [chainId, caller, defaultChain]);
};
