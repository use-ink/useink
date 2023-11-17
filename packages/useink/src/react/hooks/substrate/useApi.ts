import { useContext } from 'react';
import { ChainId } from '../../../chains/index';
import { IApiProvider, useChain } from '../../index';
import { API, APIContext } from '../../providers/api/index';

export const useApis = (): API => useContext<API>(APIContext);

export const useApi = (chainId?: ChainId): IApiProvider | undefined => {
  const defaultChain = useChain();
  const idOrDefault = chainId || defaultChain?.id;

  return idOrDefault ? useApis()?.apis?.[idOrDefault] : undefined;
};
