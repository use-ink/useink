import {
  AbiMessage,
  ContractExecResult,
  DecodedResult,
  Registry,
} from '../../types/mod.ts';

function decodeRawData<T>(raw: any, isError: boolean): DecodedResult<T> {
  if (isError) {
    const errorOutput = typeof raw.Err === 'string'
      ? raw.Err
      : JSON.stringify(raw.Err, null, 2);
    return { error: errorOutput, ok: false };
  }

  const successOutput = typeof raw === 'object' ? raw.Ok : raw?.toString();

  return { value: successOutput as T, ok: true };
}

export function decodeContractExecResult<T>(
  result: ContractExecResult['result'],
  message: AbiMessage,
  registry: Registry,
): DecodedResult<T> {
  const raw = result.isOk && message.returnType
    ? registry.createTypeUnsafe(
      message.returnType.lookupName || message.returnType.type,
      [result.asOk.data.toU8a(true)],
      { isPedantic: true },
    )
    : result.asErr;

  return decodeRawData(raw.toHuman(), result.isErr);
}
