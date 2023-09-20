import { useContext } from 'react';
import { ConfigContext } from '../../providers/config/context.ts';
import { Config } from '../../providers/config/model.ts';

export const useConfig = (): Config => useContext<Config>(ConfigContext);
