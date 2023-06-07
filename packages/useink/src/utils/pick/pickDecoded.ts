import { DecodedContractResult } from '../../core/index';

/// pickError is a helper function to quickly get the decoded value or undefined from a
/// contract message response
export function pickDecoded<T>(
  decoded: DecodedContractResult<T> | undefined,
): T | undefined {
  return decoded?.ok ? decoded.value.decoded : undefined;
}
