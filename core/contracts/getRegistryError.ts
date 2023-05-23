import { DispatchError, RegistryError } from '../types/mod.ts';
import { Contract } from './types.ts';

export const getRegistryError = (
  error: DispatchError | undefined,
  { contract: { api } }: Contract,
): RegistryError | undefined => {
  if (!error?.isModule) return;

  return api?.registry.findMetaError(error.asModule);
};
