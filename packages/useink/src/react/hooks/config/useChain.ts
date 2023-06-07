import { Chain, ChainId } from '../../../chains/index';
import { useConfig } from './useConfig.ts';
import { useMemo } from 'react';

export const useChain = (chainId?: ChainId): Chain | undefined => {
  const { chains } = useConfig();

  return useMemo(() => {
    return chainId ? chains.find((c) => c.id === chainId) : chains[0];
  }, [chains, chainId]);
};
