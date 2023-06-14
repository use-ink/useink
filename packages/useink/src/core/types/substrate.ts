export type { Bytes } from '@polkadot/types';

export { TypeDefInfo, getTypeDef } from '@polkadot/types';

export type {
  DeriveBalancesAccount,
  DeriveBalancesMap,
} from '@polkadot/api-derive/types';

export { ApiPromise, WsProvider } from '@polkadot/api';

export type {
  AnyJson,
  Codec,
  ISubmittableResult,
  Registry,
  RegistryError,
  TypeDef,
} from '@polkadot/types/types';

import { ExtrinsicStatus } from '@polkadot/types/interfaces';
export type {
  AccountId,
  Balance,
  DispatchError,
  DispatchInfo,
  EventRecord,
  ExtrinsicStatus,
  Hash,
  Header,
  RuntimeDispatchInfo,
  StorageDeposit,
  Weight,
  WeightV2,
} from '@polkadot/types/interfaces';

export type {
  AddressOrPair,
  ApiBase,
  QueryableModuleCalls,
  SignerOptions,
  SubmittableExtrinsic,
  VoidFn,
} from '@polkadot/api/types';

export type TransactionStatus =
  | ExtrinsicStatus['type']
  | 'None'
  | 'DryRun'
  | 'PendingSignature'
  | 'Errored';

export interface WithAddress {
  address: string | undefined;
}
