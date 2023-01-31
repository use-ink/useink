import React from 'react';
import { Config, DEFAULT_CONFIG } from './model.ts';
import { ConfigContext } from './context.ts';

interface Props {
  config?: Config;
}

export const ConfigProvider: React.FC<React.PropsWithChildren<Props>> = (
  { config, children },
) => {
  return (
    <ConfigContext.Provider
      value={{ ...DEFAULT_CONFIG, ...config }}
      children={children}
    />
  );
};
