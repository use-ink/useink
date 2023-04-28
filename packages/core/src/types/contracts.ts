import { AbiMessage } from '@polkadot/api-contract/types';
import {
  Balance,
  ContractExecResult,
  DispatchError,
  StorageDeposit,
  Weight,
} from '@polkadot/types/interfaces';
import { Result } from './result.ts';

export type {
  ContractExecResult,
  ContractExecResultResult,
} from '@polkadot/types/interfaces';
export type { AbiMessage, ContractOptions } from '@polkadot/api-contract/types';
export type { ContractSubmittableResult } from '@polkadot/api-contract/base/contract';

export type AccountId = string;

export interface ContractCallResultRaw {
  readonly callResult: ContractExecResult;
  readonly abiMessage: AbiMessage;
}

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

export type DecodedResult<T> = Result<T, DispatchError | undefined>;

export type DecodedContractResult<T> = DecodedResult<
  ContractExecResultDecoded<T>
>;

export type DecodedTxResult<T> = DecodedResult<
  TxExecResultDecoded<T>
>;
