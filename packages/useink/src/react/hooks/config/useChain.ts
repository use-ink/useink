<<<<<<<< HEAD:packages/useink/src/react/hooks/config/useChain.ts
import { Chain, ChainId } from '../../../chains/index';
import { useConfig } from './useConfig.ts';
import { useMemo } from 'react';
========
import { useMemo } from 'react';
import { useConfig } from './useConfig.ts';
import { Chain, ChainId } from '../../../chains/mod.ts';
>>>>>>>> main:react/hooks/config/useChain.ts

export const useChain = (chainId?: ChainId): Chain | undefined => {
  const { chains } = useConfig();

  return useMemo(() => {
    return chainId ? chains.find((c) => c.id === chainId) : chains[0];
  }, [chains, chainId]);
};
