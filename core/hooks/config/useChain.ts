import { useMemo } from 'react';
import { ChainId } from '../../../chains/mod.ts';
import { useConfig } from './useConfig.ts';
import { Chain } from '../../../chains/mod.ts';

export const useChain = (chainId?: ChainId): Chain | undefined => {
  const { chains } = useConfig();

  return useMemo(() => {
    return chainId ? chains.find((c) => c.id === chainId) : chains[0];
  }, [chains, chainId]);
};
