import { ExtrinsicStatus } from '@polkadot/types/interfaces';

export type {
  AnyJson,
  Codec,
  ISubmittableResult,
  Registry,
  RegistryError,
  TypeDef,
} from '@polkadot/types/types';

export type {
  Balance,
  EventRecord,
  ExtrinsicStatus,
  RuntimeDispatchInfo,
  StorageDeposit,
  Weight,
  WeightV2,
} from '@polkadot/types/interfaces';

export type { SignerOptions, SubmittableExtrinsic } from '@polkadot/api/types';

export type TransactionStatus =
  | ExtrinsicStatus['type']
  | 'None'
  | 'DryRun'
  | 'PendingSignature'
  | 'Errored';
