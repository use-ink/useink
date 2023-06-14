import {
  Abi,
  AbiMessage,
  BlueprintOptions,
  ContractExecResult,
  ContractOptions,
  ContractProjectSource,
} from './api-contract';
import { Result } from './result';
import { Balance, DispatchError, StorageDeposit, Weight } from './substrate';

export type ContractAbi = string | Record<string, unknown> | Abi;

// Lazy contract options allow for developers to rely on default values that will be
// lazily added so that they don't have to pass in `{ value: BN }` every time.
export type LazyContractOptions = Partial<ContractOptions>;

export type LazyCallOptions = LazyContractOptions & {
  defaultCaller?: boolean;
};

export type DeployOptions = BlueprintOptions &
  LazyCallOptions & { codeHash?: string };

export interface TxInfo {
  gasRequired: Weight;
  gasConsumed: Weight;
  storageDeposit: StorageDeposit;
  partialFee: Balance;
}

export interface ContractExecResultDecoded<T>
  extends Omit<TxInfo, 'partialFee'> {
  readonly decoded: T;
  readonly raw: ContractExecResult;
}

export interface TxExecResultDecoded<T> extends TxInfo {
  readonly decoded: T;
  readonly raw: ContractExecResult;
}

export type DecodedResult<T> = Result<T, DispatchError>;

export type DecodedContractResult<T> = DecodedResult<
  ContractExecResultDecoded<T>
>;

export type DecodedTxResult<T> = DecodedResult<TxExecResultDecoded<T>>;

export type Wasm = Pick<ContractProjectSource, 'wasm'>['wasm'];

export interface ContractCallResultRaw {
  readonly callResult: ContractExecResult;
  readonly abiMessage: AbiMessage;
}

export interface CallInfo {
  gasRequired: Weight;
  gasConsumed: Weight;
  storageDeposit: StorageDeposit;
}

export interface TxInfo {
  gasRequired: Weight;
  gasConsumed: Weight;
  storageDeposit: StorageDeposit;
  partialFee: Balance;
}
