import { useMemo } from 'react';
import { ChainId, IChain } from '../../chains/mod.ts';
import { useConfig } from './useConfig.ts';

export const useChain = (chainId?: ChainId): IChain | undefined => {
  const { chains } = useConfig();

  return useMemo(() => {
    return chainId ? chains.find((c) => c.id === chainId) : chains[0];
  }, [chains, chainId]);
};
