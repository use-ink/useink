<<<<<<<< HEAD:packages/useink/src/react/hooks/substrate/useApi.ts
import { ChainId } from '../../../chains/index';
import { IApiProvider } from '../../index';
import { API, APIContext } from '../../providers/api/index';
========
import { ChainId } from '../../../chains/mod.ts';
import { IApiProvider } from '../../mod.ts';
import { API, APIContext } from '../../providers/api/mod.ts';
>>>>>>>> main:react/hooks/substrate/useApi.ts
import { useContext } from 'react';

export const useApis = (): API => useContext<API>(APIContext);

export const useApi = (chainId?: ChainId): IApiProvider | undefined =>
  chainId ? useApis()?.apis?.[chainId] : undefined;
