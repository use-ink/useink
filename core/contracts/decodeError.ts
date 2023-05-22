import { getRegistryError } from './getRegistryError.ts';
import { Contract, RegistryErrorMethod, TxWithResult } from './types.ts';
import { pickError } from '../../utils/mod.ts';
import { RegistryError } from '../types/mod.ts';

const formatErrorMessage = (registryError: RegistryError): string =>
  `${registryError.section}.${registryError.method}: ${registryError.docs}`;

export const decodeError = (
  tx: TxWithResult,
  chainContract: Contract,
  moduleMessages?: Record<RegistryErrorMethod, string>,
  defaultMessage?: string,
): string | undefined => {
  const error = pickError(tx.result);
  if (!error || !error.isModule) return undefined;

  const registryError = getRegistryError(tx, chainContract);
  if (!registryError) return undefined;

  return moduleMessages?.[registryError.method] ||
    defaultMessage ||
    formatErrorMessage(registryError);
};
