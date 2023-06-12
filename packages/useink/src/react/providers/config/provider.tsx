import { Chain, ChainId } from '../../../chains/index';
import { ConfigContext } from './context.ts';
import { ChainRPCs, ConfigProps, DEFAULT_CONFIG } from './model.ts';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export interface Props {
  config: ConfigProps;
}

const toInitialRpcs = (c: Chain[], _rpcs: ChainRPCs): ChainRPCs =>
  c.reduce(
    (acc, ch) => ({ ...acc, [ch.id]: ch.rpcs?.[0] || '' }),
    {} as Record<ChainId, string>,
  );

export const ConfigProvider: React.FC<React.PropsWithChildren<Props>> = ({
  config,
  children,
}) => {
  const defaultChainId = useMemo(() => config.chains[0].id, [config.chains[0]]);
  const [chainRpcs, setChainRpcs] = useState<ChainRPCs>(
    toInitialRpcs(config.chains, {} as ChainRPCs),
  );

  const setChainRpc = useCallback((rpc: string, cid?: ChainId) => {
    const chainIdOrDefault = cid || defaultChainId;
    chainIdOrDefault && setChainRpcs({ ...chainRpcs, [chainIdOrDefault]: rpc });
  }, []);

  useEffect(() => {
    setChainRpcs(toInitialRpcs(config.chains, chainRpcs));

    if (!config.chains.length) {
      const error = 'Chains not configured in Config Provider';
      console.error(error);
      throw Error(error);
    }
  }, [config.chains]);

  return (
    <ConfigContext.Provider
      value={{
        ...DEFAULT_CONFIG,
        ...config,
        setChainRpc,
        chainRpcs,
      }}
      children={children}
    />
  );
};
