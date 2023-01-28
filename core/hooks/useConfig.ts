import { ConfigContext } from 'core/providers/config/context.ts';
import { useContext } from 'deps/preact/hooks.ts';
import { Config } from '../providers/config/model.ts';

export const useConfig = () => useContext<Config>(ConfigContext);
