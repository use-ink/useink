import { Chain } from '../../../chains/mod.ts';
import { ArrayOneOrMore } from '../../../core/mod.ts';
import { useConfig } from './useConfig.ts';

export const useChains = (): ArrayOneOrMore<Chain> => useConfig().chains;
