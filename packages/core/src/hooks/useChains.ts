import { IChain } from 'useink/chains';
import { ArrayOneOrMore } from '../types/array.ts';
import { useConfig } from './useConfig.ts';

export const useChains = (): ArrayOneOrMore<IChain> => useConfig().chains;
