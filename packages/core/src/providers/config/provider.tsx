import React, { useEffect } from 'react';
import { Config, DEFAULT_CONFIG } from './model.ts';
import { ConfigContext } from './context.ts';

interface Props {
  config?: Config;
}

export const ConfigProvider: React.FC<React.PropsWithChildren<Props>> = ({
  config,
  children,
}) => {
  useEffect(() => {
    if (!config?.chains.length) {
      const error = 'Chains not configured in Config Provider';
      console.error(error);
      throw Error(error);
    }
  }, [config?.chains]);

  return (
    <ConfigContext.Provider
      value={{ ...DEFAULT_CONFIG, ...config }}
      children={children}
    />
  );
};
