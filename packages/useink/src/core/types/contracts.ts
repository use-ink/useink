import { Abi, ContractOptions } from './api-contracts';

export type ContractAbi = string | Record<string, unknown> | Abi;

// Lazy contract options allow for developers to rely on default values that will be
// lazily added so that they don't have to pass in `{ value: BN }` every time.
export type LazyContractOptions = Partial<ContractOptions>;

export type LazyCallOptions = LazyContractOptions & {
  defaultCaller?: boolean;
};
