import { ApiBase, DispatchError, Result } from '../types/mod.ts';

export interface TxWithResult {
  result?: Result<any, DispatchError>;
}

export interface Contract {
  contract: {
    api: ApiBase<'promise'>;
  };
}

export type RegistryErrorMethod = string;
