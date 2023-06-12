import { ChainId } from '../../../chains';
import { chainTokenSymbol } from '../../../core';
import { useApi } from './useApi';

export const useTokenSymbol = (chainId?: ChainId): string | undefined => {
  const chainApi = useApi(chainId);
  if (!chainApi?.api) return undefined;

  return chainTokenSymbol(chainApi?.api);
};
