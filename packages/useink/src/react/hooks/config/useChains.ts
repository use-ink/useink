import { Chain } from '../../../chains/index';
import { ArrayOneOrMore } from '../../../core/index';
import { useConfig } from './useConfig.ts';

export const useChains = (): ArrayOneOrMore<Chain> => useConfig().chains;
