import { DispatchError, RegistryError } from '../types/index';
import { getRegistryError } from './getRegistryError.ts';
import { Contract, RegistryErrorMethod } from './types/index.ts';

const formatErrorMessage = (registryError: RegistryError): string =>
  `${registryError.section}.${registryError.method}: ${registryError.docs}`;

export const decodeError = (
  dispatchError: DispatchError | undefined,
  chainContract: Contract | undefined,
  moduleMessages?: Record<RegistryErrorMethod, string>,
  defaultMessage?: string,
): string | undefined => {
  if (!chainContract) return undefined;
  const registryError = getRegistryError(dispatchError, chainContract);
  if (!registryError) return undefined;

  return (
    moduleMessages?.[registryError.method] ||
    defaultMessage ||
    formatErrorMessage(registryError)
  );
};
