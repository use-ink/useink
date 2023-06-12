import {
  CallResult,
  Contract,
  RegistryErrorMethod,
  decodeError,
} from '../../core/index';

/// pickDecodedError is a helper function to quickly get a decoded error from a call.
///
/// // e.g.
/// const call = useCall(contract, 'foo');
/// pickDecodedError(call, contract);
export function pickDecodedError(
  call: CallResult | undefined,
  contract: Contract,
  moduleMessages?: Record<RegistryErrorMethod, string>,
  defaultMessage?: string,
): string | undefined {
  const { result } = call || {};
  if (!result || result?.ok) return;
  return decodeError(result.error, contract, moduleMessages, defaultMessage);
}
