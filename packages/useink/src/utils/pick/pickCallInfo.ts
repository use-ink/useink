import { CallInfo, DecodedContractResult } from '../../core/index';

/// pickCallInfo gets gasRequired, gasConsumed, and storageDeposit or undefined from a
/// contract message response
export function pickCallInfo<T>(
  decoded: DecodedContractResult<T> | undefined,
): CallInfo | undefined {
  if (!decoded?.ok) return;

  const { gasRequired, gasConsumed, storageDeposit } = decoded.value;

  return { gasRequired, gasConsumed, storageDeposit };
}
