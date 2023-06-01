import { DecodedTxResult, TxInfo } from '../../core/mod.ts';

/// pickTxInfo gets gasRequired, gasConsumed, and storageDeposit or undefined from a
/// DryRun.
export function pickTxInfo(
  result: DecodedTxResult<any> | undefined,
): TxInfo | undefined {
  if (!result?.ok) return;

  const { gasRequired, gasConsumed, storageDeposit, partialFee } = result.value;

  return { gasRequired, gasConsumed, storageDeposit, partialFee };
}
