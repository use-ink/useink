import { BN_ZERO } from '../../utils/index.ts';

import {
  AbiMessage,
  AccountId,
  ContractExecResult,
  ContractPromise,
  DecodedContractResult,
  LazyContractOptions,
} from '../types/index';

import { decodeCallResult } from './decodeCallResult.ts';

export async function call<T>(
  contract: ContractPromise,
  abiMessage: AbiMessage,
  caller: AccountId | string,
  args = [] as unknown[],
  options?: LazyContractOptions,
): Promise<DecodedContractResult<T> | undefined> {
  const { value, gasLimit, storageDepositLimit } = options || {};

  const apiCaller = contract.api.call.contractsApi;
  if (!apiCaller?.call) return;

  const raw = await apiCaller.call<ContractExecResult>(
    caller,
    contract.address,
    value ?? BN_ZERO,
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.toU8a(args),
  );

  // TODO: handle a call with metadata, but wrong address
  // TODO: handle a situation with no response
  if (!raw) return;

  const decoded = decodeCallResult<T>(
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
