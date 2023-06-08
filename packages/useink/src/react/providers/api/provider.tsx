import { ApiPromise, WsProvider } from '../../../core/index';
import { useChains } from '../../hooks/index';
import { useConfig } from '../../index';
import { APIContext } from './context.ts';
import { apiProvidersReducer } from './reducer.ts';
import React, { useEffect, useReducer } from 'react';

export const APIProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const chains = useChains();
  const { chainRpcs } = useConfig();
  const [apis, dispatch] = useReducer(apiProvidersReducer, {});

  useEffect(() => {
    chains.forEach((chain) => {
      const provider = new WsProvider(chainRpcs[chain.id] || chain.rpcs[0]);

      ApiPromise.create({ provider }).then((api) => {
        dispatch({
          type: 'ADD_API_PROVIDER',
          chainId: chain.id,
          apiProvider: { api, provider },
        });
      });
    });
  }, [chains, chainRpcs]);

  return <APIContext.Provider value={{ apis }}>{children}</APIContext.Provider>;
};
