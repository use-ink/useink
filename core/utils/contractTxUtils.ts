import { Status } from '../types/mod.ts';

export type Response = {
  status: Status;
};

export const isNone = (tx: { status: Status }): boolean => tx.status === 'None';

export const isDryRun = (tx: { status: Status }): boolean =>
  tx.status === 'DryRun';

export const isPendingSignature = (tx: { status: Status }): boolean =>
  tx.status === 'PendingSignature';

export const isBroadcasting = (tx: { status: Status }): boolean =>
  tx.status === 'Broadcast';

export const isInBlock = (tx: { status: Status }): boolean =>
  tx.status === 'InBlock';

export const hasAny = (
  tx: { status: Status },
  ...statuses: Status[]
): boolean => statuses.includes(tx.status);

export const isFinalized = (tx: { status: Status }): boolean =>
  tx.status === 'Finalized';

export const isErrored = (tx: { status: Status }): boolean =>
  tx.status === 'Errored';

export const shouldDisable = (tx: { status: Status }): boolean =>
  hasAny(tx, 'DryRun', 'PendingSignature', 'Broadcast');

export const shouldDisableStrict = (tx: { status: Status }): boolean =>
  shouldDisable(tx) || isInBlock(tx);
