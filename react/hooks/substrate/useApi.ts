import { ChainId } from '../../../chains/mod.ts';
import { IApiProvider } from '../../mod.ts';
import { API, APIContext } from '../../providers/api/mod.ts';
import { useContext } from 'react';

export const useApis = (): API => useContext<API>(APIContext);

export const useApi = (chainId?: ChainId): IApiProvider | undefined =>
  chainId ? useApis()?.apis?.[chainId] : undefined;
