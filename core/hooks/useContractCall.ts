import { ContractPromise } from '@polkadot/api-contract';
import { useMemo } from 'react';
import {
  ContractExecResultDecoded,
  ContractOptions,
  Result,
} from '../types/mod.ts';
import { decodeContractExecResult } from '../utils/mod.ts';
import { useContractCallRaw } from './useContractCallRaw.ts';

export function useContractCall<T>(
  contract: ContractPromise | undefined,
  message: string,
  args = [] as unknown[],
  options?: ContractOptions,
): Result<ContractExecResultDecoded<T>, string> | null {
  const raw = useContractCallRaw(contract, message, args, options);

  return useMemo(() => {
    if (!raw || !contract) return null;
    if (!raw.ok) return raw;

    const { callResult, abiMessage } = raw.value;

    const result = decodeContractExecResult<T>(
      callResult.result,
      abiMessage,
      contract.abi.registry,
    );
    if (!result.ok) return result;

    return {
      ok: true,
      value: {
        ...callResult,
        debugMessage: raw.value.callResult.debugMessage.toHuman(),
        result: result.value,
      },
    };
  }, [raw]);
}
