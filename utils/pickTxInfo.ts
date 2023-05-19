import { DecodedTxResult, TxInfo } from '../mod.ts';

/// pickTxInfo gets gasRequired, gasConsumed, and storageDeposit or undefined from a tx or
/// DryRun
export function pickTxInfo<T>(
  decoded: DecodedTxResult<T> | undefined,
): TxInfo | undefined {
  if (!decoded?.ok) return;

  const { gasRequired, gasConsumed, storageDeposit, partialFee } =
    decoded.value;

  return { gasRequired, gasConsumed, storageDeposit, partialFee };
}
