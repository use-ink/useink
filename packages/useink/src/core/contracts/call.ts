<<<<<<<< HEAD:packages/useink/src/core/contracts/call.ts
import { BN } from '../../utils/index.ts';
========
import { BN } from '../../utils/mod.ts';
>>>>>>>> main:core/contracts/call.ts
import {
  AbiMessage,
  AccountId,
  ContractExecResult,
  ContractOptions,
  ContractPromise,
  DecodedContractResult,
<<<<<<<< HEAD:packages/useink/src/core/contracts/call.ts
} from '../types/index';
========
} from '../types/mod.ts';
>>>>>>>> main:core/contracts/call.ts
import { decodeCallResult } from './decodeCallResult.ts';

export async function call<T>(
  contract: ContractPromise,
  abiMessage: AbiMessage,
  caller: AccountId | string,
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
