import React from 'react';
import { ChainConfig, ConfigProps, DEFAULT_CONFIG } from './model.ts';

export const ConfigContext = React.createContext<ConfigProps & ChainConfig>(
  DEFAULT_CONFIG,
);
