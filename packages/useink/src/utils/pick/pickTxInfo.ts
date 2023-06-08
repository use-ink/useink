import { DecodedTxResult, TxInfo } from '../../core/index';

/// pickTxInfo gets gasRequired, gasConsumed, and storageDeposit or undefined from a
/// DryRun.
export function pickTxInfo(
  result: DecodedTxResult<unknown> | undefined,
): TxInfo | undefined {
  if (!result?.ok) return;

  const { gasRequired, gasConsumed, storageDeposit, partialFee } = result.value;

  return { gasRequired, gasConsumed, storageDeposit, partialFee };
}
