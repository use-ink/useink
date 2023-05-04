import { Status } from '../types/mod.ts';

export type Response = {
  status: Status;
};

export const isNone = (tx: { status: Status }): boolean => tx.status === 'None';

export const isDryRun = (tx: { status: Status }): boolean =>
  tx.status === 'DryRun';

export const isPendingSignature = (tx: { status: Status }): boolean =>
  tx.status === 'PendingSignature';

export const isErrored = (tx: { status: Status }): boolean =>
  tx.status === 'Errored';

export const isFuture = (tx: { status: Status }): boolean =>
  tx.status === 'Future';

export const isReady = (tx: { status: Status }): boolean =>
  tx.status === 'Ready';

export const isBroadcast = (tx: { status: Status }): boolean =>
  tx.status === 'Broadcast';

export const isRetracted = (tx: { status: Status }): boolean =>
  tx.status === 'Retracted';

export const isFinalityTimeout = (tx: { status: Status }): boolean =>
  tx.status === 'FinalityTimeout';

export const isInBlock = (tx: { status: Status }): boolean =>
  tx.status === 'InBlock';

export const isFinalized = (tx: { status: Status }): boolean =>
  tx.status === 'Finalized';

export const isUsurped = (tx: { status: Status }): boolean =>
  tx.status === 'Usurped';

export const isDropped = (tx: { status: Status }): boolean =>
  tx.status === 'Dropped';

export const isInvalid = (tx: { status: Status }): boolean =>
  tx.status === 'Invalid';

export const hasAny = (
  tx: { status: Status },
  ...statuses: Status[]
): boolean => statuses.includes(tx.status);

export const shouldDisable = (tx: { status: Status }): boolean =>
  hasAny(tx, 'DryRun', 'PendingSignature', 'Broadcast');

export const shouldDisableStrict = (tx: { status: Status }): boolean =>
  shouldDisable(tx) || isInBlock(tx);
