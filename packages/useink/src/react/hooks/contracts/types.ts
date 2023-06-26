import { ChainId } from '../../../chains/types.ts';
import { ContractPromise } from '../../../core/index';

export interface ChainContract<T extends ContractPromise = ContractPromise> {
  contract: T;
  chainId: ChainId;
}
