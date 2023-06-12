import { DecodedContractResult, DispatchError } from '../../core/index';

/// pickError is a helper function to quickly get a dispatch error or undefined from a
/// contract message response
export function pickError<T>(
  decoded: DecodedContractResult<T> | undefined,
): DispatchError | undefined {
  return decoded?.ok ? undefined : decoded?.error;
}
