import { ChainId } from '../../../chains/index';
import { useChain } from './useChain.ts';
import { useConfig } from './useConfig.ts';

export const useChainRpc = (chainId?: ChainId): string | undefined => {
  const { chainRpcs } = useConfig();
  const chain = useChain(chainId);
  const chainIdOrDefault = chainId || chain?.id;

  return chainIdOrDefault && chainRpcs[chainIdOrDefault];
};
