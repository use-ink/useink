import { SubmittableResult } from '@polkadot/api';
import { ISubmittableResult } from './substrate.ts';

export {
  BlueprintPromise,
  CodePromise,
} from '@polkadot/api-contract';

import { DecodedEvent } from '@polkadot/api-contract/types';
export { DecodedEvent };

export {
  BlueprintSubmittableResult,
  CodeSubmittableResult,
} from '@polkadot/api-contract/base';

export type {
  ContractExecResult,
  ContractExecResultResult,
  ContractInstantiateResult,
  ContractProjectSource,
} from '@polkadot/types/interfaces';
export type {
  AbiParam,
  AbiMessage,
  ContractOptions,
  BlueprintOptions,
} from '@polkadot/api-contract/types';
export { Abi, ContractPromise } from '@polkadot/api-contract';

// biome-ignore lint/correctness/noUnusedVariables: The Release flow breaks when exporting from '@polkadot/api-contract/base/contract';
export declare class ContractSubmittableResult extends SubmittableResult {
  readonly contractEvents?: DecodedEvent[] | undefined;
  constructor(result: ISubmittableResult, contractEvents?: DecodedEvent[]);
}
