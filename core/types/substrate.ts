export type { DeriveBalancesAccount } from '@polkadot/api-derive/types';

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
  EventRecord,
  ExtrinsicStatus,
  Header,
  RuntimeDispatchInfo,
  StorageDeposit,
  Weight,
  WeightV2,
} from '@polkadot/types/interfaces';

export type {
  ApiBase,
  SignerOptions,
  SubmittableExtrinsic,
} from '@polkadot/api/types';

export type TransactionStatus =
  | ExtrinsicStatus['type']
  | 'None'
  | 'DryRun'
  | 'PendingSignature'
  | 'Errored';
