/// This is triggered when a user rejects a transaction in a wallet
export const isTxCancelledError = (e?: unknown): boolean =>
  e?.toString() === 'Error: Cancelled' || e?.toString() === 'Error: Canceled';
