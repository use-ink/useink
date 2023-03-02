import type { DispatchError } from '@polkadot/types/interfaces';
import type { RegistryError } from '@polkadot/types/types';
import { ApiBase } from '@polkadot/api/types';

export interface DecodedErrorResult {
  message?: string;
  registryError?: RegistryError;
}

type RegistryErrorMethod = string;

const toDefaultMessage = (registryError: RegistryError): string =>
  `${registryError?.section}.${registryError?.method}: ${registryError?.docs}`;

export const decodeError = (
  { error }: { error: DispatchError | undefined },
  { api }: { api: ApiBase<'promise'> },
  moduleMessages?: Record<RegistryErrorMethod, string>,
): DecodedErrorResult => {
  if (!error) return { message: 'Unable to decode result' };
  if (!error.isModule) return {};

  const registryError = api?.registry.findMetaError(error.asModule);

  const message = moduleMessages?.[registryError.method] ||
    toDefaultMessage(registryError);

  return { message, registryError };
};
