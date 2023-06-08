import {
  AbiMessage,
  ContractExecResult,
  DecodedResult,
  Registry,
<<<<<<<< HEAD:packages/useink/src/core/contracts/decodeCallResult.ts
} from '../types/index';
========
} from '../types/mod.ts';
>>>>>>>> main:core/contracts/decodeCallResult.ts

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
