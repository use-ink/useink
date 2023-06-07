import { ApiBase, DispatchError, Result } from '../types/index';

export interface CallResult {
  result?: Result<any, DispatchError>;
}

export interface Contract {
  contract: {
    api: ApiBase<'promise'>;
  };
}

export type RegistryErrorMethod = string;
