import { ContractPromise } from '@polkadot/api-contract';
import {
  AbiMessage,
  AccountId,
  ContractExecResultDecoded,
  Result,
} from '../../types/mod.ts';
import { callContractRaw } from './callContractRaw.ts';
import { decodeContractExecResult } from './decodeContractExecResult.ts';

export async function callContract<T>(
  contract: ContractPromise,
  abiMessage: AbiMessage,
  caller: AccountId,
  args = [] as unknown[],
): Promise<Result<ContractExecResultDecoded<T>, string>> {
  const callResult = await callContractRaw(contract, abiMessage, caller, args);

  if (!callResult) {
    return {
      ok: false,
      error: 'No response',
    };
  }

  const decoded = decodeContractExecResult<T>(
    callResult.result,
    abiMessage,
    contract.abi.registry,
  );
  if (!decoded.ok) return decoded;

  const { gasConsumed, gasRequired, storageDeposit, debugMessage } = callResult;

  return {
    ok: true,
    value: {
      gasConsumed,
      gasRequired,
      storageDeposit,
      debugMessage: debugMessage.toHuman(),
      result: decoded.value,
    },
  };
}
