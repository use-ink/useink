import {
  AbiMessage,
  AccountId,
  ContractExecResult,
  ContractOptions,
  ContractPromise,
  DecodedContractResult,
} from '../types/mod.ts';
import { decodeContractExecResult } from './decodeContractExecResult.ts';
import BN from 'bn.js';

export async function call<T>(
  contract: ContractPromise,
  abiMessage: AbiMessage,
  caller: AccountId,
  args = [] as unknown[],
  options?: ContractOptions,
): Promise<DecodedContractResult<T> | undefined> {
  const { value, gasLimit, storageDepositLimit } = options || {};

  const apiCaller = contract.api.call.contractsApi;
  if (!apiCaller?.call) return;

  const raw = await apiCaller.call<ContractExecResult>(
    caller,
    contract.address,
    value ?? new BN(0),
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.toU8a(args),
  );

  // TODO: handle a call with metadata, but wrong address
  // TODO: handle a situation with no response
  if (!raw) return;

  const decoded = decodeContractExecResult<T>(
    raw.result,
    abiMessage,
    contract.abi.registry,
  );
  if (!decoded.ok) return decoded;
  const { gasConsumed, gasRequired, storageDeposit } = raw;

  return {
    ok: true,
    value: {
      decoded: decoded.value,
      raw,
      gasConsumed,
      gasRequired,
      storageDeposit,
    },
  };
}
