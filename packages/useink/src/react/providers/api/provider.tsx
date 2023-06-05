import { ChainId } from '../../../chains/types.ts';
import { ApiPromise, Sc, ScProvider, WsProvider } from '../../../core/index';
import { useChains } from '../../hooks/index';
import { ProviderConnection, useConfig } from '../../index';
import { ProviderConnectionConfig } from '../config/index.ts';
import { APIContext } from './context.ts';
import { apiProvidersReducer } from './reducer.ts';
import React, { useEffect, useReducer } from 'react';

const isTrusted = (
  chainId: ChainId,
  apiConfig?: ProviderConnectionConfig,
): boolean => {
  const chainConfig = apiConfig?.[chainId];
  if (chainConfig !== undefined) return chainConfig === 'trusted';

  const defaultConfig = apiConfig?.default;
  if (defaultConfig !== undefined) return defaultConfig === 'trusted';

  return false;
};

export const APIProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const chains = useChains();
  const c = useConfig();
  const [apis, dispatch] = useReducer(apiProvidersReducer, {});

  useEffect(() => {
    chains.forEach((chain) => {
      const connection: ProviderConnection = isTrusted(chain.id, c.api)
        ? {
            connection: 'trusted',
            provider: new WsProvider(c.chainRpcs[chain.id] || chain.rpcs[0]),
          }
        : {
            connection: 'light-client',
            provider: new ScProvider(Sc, 'all'),
          };

      console.log('conn', connection);

      ApiPromise.create({ provider: connection.provider })
        .then((api) => {
          console.log('api', api);
          dispatch({
            type: 'ADD_API_PROVIDER',
            chainId: chain.id,
            apiProvider: { api, ...connection },
          });
        })
        .catch(console.error);
    });
  }, [chains, c.chainRpcs, c.api]);

  return <APIContext.Provider value={{ apis }}>{children}</APIContext.Provider>;
};
