import { ConfigContext } from '../../providers/config/context.ts';
import { Config } from '../../providers/config/model.ts';
import { useContext } from 'react';

export const useConfig = (): Config => useContext<Config>(ConfigContext);
