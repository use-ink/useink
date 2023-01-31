import { Status } from '../types/mod.ts';

export type Response = {
  status: Status;
};

export const isNone = (func: { status: Status }): boolean => func.status === 'None';

export const isPreFlight = (func: { status: Status }): boolean => func.status === 'PreFlight';

export const isPendingSignature = (func: { status: Status }): boolean => func.status === 'PendingSignature';

export const isBroadcasting = (func: { status: Status }): boolean => func.status === 'Broadcast';

export const isInBlock = (func: { status: Status }): boolean => func.status === 'InBlock';

export const hasAny = (func: { status: Status }, ...statuses: Status[]): boolean => statuses.includes(func.status);

export const isFinalized = (func: { status: Status }): boolean => func.status === 'Finalized';

export const isErrored = (func: { status: Status }): boolean => func.status === 'Errored';

export const shouldDisable = (func: { status: Status }): boolean =>
  hasAny(func, 'PreFlight', 'PendingSignature', 'Broadcast');

export const shouldDisableStrict = (func: { status: Status }): boolean => shouldDisable(func) || isInBlock(func);
