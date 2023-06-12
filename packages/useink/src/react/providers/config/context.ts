import { ChainConfig, ConfigProps, DEFAULT_CONFIG } from './model.ts';
import React from 'react';

export const ConfigContext = React.createContext<ConfigProps & ChainConfig>(
  DEFAULT_CONFIG,
);
