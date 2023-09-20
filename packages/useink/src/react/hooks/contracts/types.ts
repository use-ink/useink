import { BN } from '@polkadot/util';
import { ChainId } from '../../../chains/types.ts';
import { Abi, ContractOptions, ContractPromise } from '../../../core/index';

export type CallOptions = Omit<ContractOptions, 'value'> & {
  defaultCaller?: boolean;
  value?: bigint | BN | string | number | undefined;
};

export type ContractAbi = string | Record<string, unknown> | Abi;

export interface ChainContract<T extends ContractPromise = ContractPromise> {
  contract: T;
  chainId: ChainId;
}
