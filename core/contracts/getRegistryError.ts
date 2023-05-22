import { RegistryError } from '../types/mod.ts';
import { Contract, TxWithResult } from './types.ts';

export const getRegistryError = (
  tx: TxWithResult,
  { contract: { api } }: Contract,
): RegistryError | undefined => {
  if (!tx.result || tx.result?.ok) return undefined;

  const { error } = tx.result;
  if (!error.isModule) return;

  return api?.registry.findMetaError(error.asModule);
};
