import { createContext } from 'deps/preact.ts';
import { Config, DEFAULT_CONFIG } from './model.ts';

export const ConfigContext = createContext<Config>(DEFAULT_CONFIG);
