import { TransactionStatus } from '../../core/index';

export type Response = {
  status: TransactionStatus;
};

export const isNone = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'None';

export const isDryRun = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'DryRun';

export const isPendingSignature = (tx: {
  status: TransactionStatus;
}): boolean => tx.status === 'PendingSignature';

export const isErrored = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Errored';

export const isFuture = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Future';

export const isReady = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Ready';

export const isBroadcast = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Broadcast';

export const isRetracted = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Retracted';

export const isFinalityTimeout = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'FinalityTimeout';

export const isInBlock = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'InBlock';

export const isFinalized = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Finalized';

export const isUsurped = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Usurped';

export const isDropped = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Dropped';

export const isInvalid = (tx: { status: TransactionStatus }): boolean =>
  tx.status === 'Invalid';

export const hasAny = (
  tx: { status: TransactionStatus },
  ...statuses: TransactionStatus[]
): boolean => statuses.includes(tx.status);

export const shouldDisable = (tx: { status: TransactionStatus }): boolean =>
  hasAny(tx, 'DryRun', 'PendingSignature', 'Broadcast');

export const shouldDisableStrict = (tx: {
  status: TransactionStatus;
}): boolean => shouldDisable(tx) || isInBlock(tx);
