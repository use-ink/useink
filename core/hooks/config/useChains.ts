import { Chain } from '../../../chains/mod.ts';
import { ArrayOneOrMore } from '../../types/array.ts';
import { useConfig } from './useConfig.ts';

export const useChains = (): ArrayOneOrMore<Chain> => useConfig().chains;
