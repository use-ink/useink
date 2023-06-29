import {
  Abi,
  Balance,
  BlueprintOptions,
  Bytes,
  ContractSubmittableResult,
  EventRecord,
  ISubmittableResult,
  StorageDeposit,
  SubmittableExtrinsic,
  TransactionStatus,
  WeightV2,
} from '../../../../core';
import { BN } from '../../../../utils';
import { ContractSubmittableResultCallback } from '../useTx';

export enum DeployerError {
  NoCodeHashOrWasm = 'You must supply either a code hash or metadata containing Wasm.',
  ConstructorNotFound = 'The constructor method was not found.',
  InstantiateNotSupportedForApi = 'Instantiate method not found for chain API',
  CouldNotCreateTx = 'Could not create deploy transaction function',
  TransactionFailed = 'Transaction failed.',
  TransactionCancelled = 'Transaction cancelled.',
  WalletNotConnected = 'Wallet not connected.',
  ApiInstanceNotFound = 'Api client not found. Try refreshing the page.',
  InvalidCodeHash = 'Invalid code hash.',
}

export interface DeployData {
  argValues?: Record<string, unknown>;
  value?: Balance;
  metadata?: Abi;
  name: string;
  constructorIndex: number;
  salt: string | Uint8Array | Bytes | null;
  storageDepositLimit: Balance | null;
  gasLimit: WeightV2 | undefined;
  codeHash?: string;
}

export type DeploySignAndSend<T> = (
  metadata: Abi,
  constructorName?: string,
  constructorArgs?: Record<string, unknown>,
  options?: BlueprintOptions & {
    codeHash?: string;
    value?: bigint | BN | string | number;
  },
  cb?: ContractSubmittableResultCallback,
) => T;

export type DeployTx = SubmittableExtrinsic<'promise', ISubmittableResult>;

export interface Deploy<T> {
  dryRun: DeploySignAndSend<Promise<DeployTx | undefined>>;
  signAndSend: DeploySignAndSend<Promise<void>>;
  contractAddress: string | undefined;
  status: TransactionStatus;
  result: ContractSubmittableResult | undefined;
  isSubmitting: boolean;
  error: string | undefined;
  resetState: () => void;
  gasConsumed?: WeightV2;
  gasRequired?: WeightV2;
  storageDeposit?: StorageDeposit;
  willBeSuccessful: boolean;
  wasDeployed: boolean;
  events: EventRecord[];
}

export interface AddNotification {
  type: 'ADD_NOTIFICATION';
  notification: Notification;
}

export interface RemoveNotification {
  type: 'REMOVE_NOTIFICATION';
  notificationId: string;
}

export type Action = AddNotification | RemoveNotification;
