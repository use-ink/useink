import React from 'react';
import { Config, DEFAULT_CONFIG } from './model.ts';

export const ConfigContext = React.createContext<Config>(DEFAULT_CONFIG);
