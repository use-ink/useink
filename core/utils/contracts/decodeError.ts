import type { RegistryError } from '@polkadot/types/types';
import { getRegistryError } from './getRegistryError.ts';
import { Contract, RegistryErrorMethod, TxWithResult } from './types.ts';

const formatErrorMessage = (registryError: RegistryError): string =>
  `${registryError.section}.${registryError.method}: ${registryError.docs}`;

export const decodeError = (
  tx: TxWithResult,
  chainContract: Contract,
  moduleMessages?: Record<RegistryErrorMethod, string>,
  defaultMessage?: string,
): string | undefined => {
  if (!tx.result || tx.result?.ok) return undefined;

  const { error } = tx.result;
  if (!error.isModule) return undefined;

  const registryError = getRegistryError(tx, chainContract);
  if (!registryError) return undefined;

  return moduleMessages?.[registryError.method] ||
    defaultMessage ||
    formatErrorMessage(registryError);
};
