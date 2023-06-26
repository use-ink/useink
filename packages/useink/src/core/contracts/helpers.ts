import { BN_ZERO } from '../../utils';
import { ContractOptions, LazyContractOptions } from '../types';

export const DEFAULT_CONTRACT_OPTIONS: ContractOptions = { value: BN_ZERO };

export const toContractOptions = (
  options?: LazyContractOptions,
): ContractOptions => ({
  ...DEFAULT_CONTRACT_OPTIONS,
  ...(options || {}),
});
