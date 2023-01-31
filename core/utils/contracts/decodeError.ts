import type { ApiPromise } from '@polkadot/api';
import type { DispatchError } from '@polkadot/types/interfaces';
import type { RegistryError } from '@polkadot/types/types';

export interface DecodedErrorResult {
  message: string;
  registryError?: RegistryError;
}

type RegistryErrorMethod = string;

const toDefaultMessage = (registryError: RegistryError): string =>
  `${registryError?.section.toUpperCase()}.${registryError?.method}: ${registryError?.docs}`;

export const decodeError = (
  error: DispatchError,
  api: ApiPromise,
  customMessages?: Record<RegistryErrorMethod, string>,
): DecodedErrorResult => {
  let message = 'Unknown dispatch error';
  let registryError: RegistryError | undefined;

  if (error.isModule) {
    registryError = api?.registry.findMetaError(error.asModule);

    if (customMessages) {
      const errorNames = Object.keys(customMessages || {});
      for (let i = 0; i <= errorNames.length; i++) {
        const errorName = errorNames[i];
        if (errorName && errorName === registryError.method) {
          return {
            message: customMessages[errorName] || '',
            registryError,
          };
        }
      }
    }

    message = toDefaultMessage(registryError);
  }

  return {
    message,
    registryError,
  };
};
