import { DecodedContractResult } from '../../core/index';

/// pickResultOk is a helper function to quickly get an Ok result from a contract message
/// or undefined
export function pickResultOk<T, K>(
  decoded: DecodedContractResult<T & { Ok?: K }> | undefined,
): K | undefined {
  return decoded?.ok ? decoded.value.decoded?.Ok : undefined;
}
