import { DecodedContractResult } from '../../core/index';

/// pickResultErr is a helper function to quickly get an Err result from a contract message
/// or undefined
export function pickResultErr<T, E>(
  decoded: DecodedContractResult<T & { Err?: E }> | undefined,
): E | undefined {
  return decoded?.ok ? decoded.value.decoded?.Err : undefined;
}
