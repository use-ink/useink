import {
  AbiMessage,
  ContractExecResult,
  DecodedResult,
  Registry,
} from '../types/index';

export function decodeCallResult<T>(
  result: ContractExecResult['result'],
  message: AbiMessage,
  registry: Registry,
): DecodedResult<T> {
  if (result.isErr || !message.returnType) {
    return { ok: false, error: result.asErr };
  }

  const raw = registry.createTypeUnsafe(
    message.returnType.lookupName || message.returnType.type,
    [result.asOk.data.toU8a(true)],
    { isPedantic: true },
  );

  return { ok: true, value: (raw?.toHuman() as Record<'Ok', T>)?.Ok };
}
