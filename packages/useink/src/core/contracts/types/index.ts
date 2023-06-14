export * from './jsonToAbi';

import { ApiBase, DispatchError, Result } from '../../types/index';

export interface CallResult {
  result?: Result<unknown, DispatchError>;
}

export interface Contract {
  contract: {
    api: ApiBase<'promise'>;
  };
}

export type RegistryErrorMethod = string;
