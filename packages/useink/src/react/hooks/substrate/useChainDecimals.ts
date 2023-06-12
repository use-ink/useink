import { ChainId } from '../../../chains';
import { chainDecimals } from '../../../core';
import { useApi } from './useApi';

export const useChainDecimals = (chainId?: ChainId): number | undefined => {
  const chainApi = useApi(chainId);
  if (!chainApi?.api) return undefined;

  return chainDecimals(chainApi?.api);
};
