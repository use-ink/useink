import { BN_ZERO } from '../../utils';
import { ContractOptions, DeployOptions, LazyContractOptions } from '../types';

export const DEFAULT_CONTRACT_OPTIONS: ContractOptions = { value: BN_ZERO };

export const toContractOptions = (
  options?: LazyContractOptions,
): ContractOptions => ({
  ...DEFAULT_CONTRACT_OPTIONS,
  ...(options || {}),
});

export const DEFAULT_DEPLOY_OPTIONS: DeployOptions = { value: BN_ZERO };

export const toDeployOptions = (
  options?: LazyContractOptions,
): DeployOptions => ({
  ...DEFAULT_DEPLOY_OPTIONS,
  ...(options || {}),
});
