import { ChainId } from '../../../chains/types.ts';
import { Abi, ContractOptions, ContractPromise } from '../../../core/index';

export type CallOptions = ContractOptions & {
  defaultCaller?: boolean;
};

export type ContractAbi = string | Record<string, unknown> | Abi;

export interface ChainContract<T extends ContractPromise = ContractPromise> {
  contract: T;
  chainId: ChainId;
}
