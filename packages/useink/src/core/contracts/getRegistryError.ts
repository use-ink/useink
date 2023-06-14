import { DispatchError, RegistryError } from '../types/index';
import { Contract } from './types/index.ts';

export const getRegistryError = (
  error: DispatchError | undefined,
  { contract: { api } }: Contract,
): RegistryError | undefined => {
  if (!error?.isModule) return;

  return api?.registry.findMetaError(error.asModule);
};
