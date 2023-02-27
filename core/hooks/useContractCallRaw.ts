import { ContractPromise } from '@polkadot/api-contract';
import { useEffect, useMemo, useState } from 'react';
import {
  ContractCallResultRaw,
  ContractExecResult,
  ContractOptions,
  Result,
} from '../types/mod.ts';
import { callContractRaw, toContractAbiMessage } from '../utils/mod.ts';
import { useBlockHeader } from './substrate/useBlockHeader.ts';
import { useExtension } from './useExtension.ts';

export function useContractCallRaw(
  contract: ContractPromise | undefined,
  message: string,
  args = [] as unknown[],
  options?: ContractOptions,
): Result<ContractCallResultRaw, string> | null {
  const [callResult, setCallResult] = useState<ContractExecResult | null>(null);
  const { blockNumber } = useBlockHeader();
  const { account } = useExtension();

  const abiMsgResult = useMemo(() => {
    if (!contract) return null;
    return toContractAbiMessage(contract, message);
  }, [contract, message]);

  useEffect(() => {
    abiMsgResult &&
      abiMsgResult.ok &&
      contract &&
      callContractRaw(
        contract,
        abiMsgResult.value,
        account?.address,
        args,
        options,
      ).then((r) => {
        r && setCallResult(r);
      });
  }, [contract?.address, blockNumber, account?.address, abiMsgResult]);

  if (!abiMsgResult || !callResult) return null;
  if (!abiMsgResult.ok) return abiMsgResult;

  return {
    ok: true,
    value: {
      callResult,
      abiMessage: abiMsgResult.value,
    },
  };
}
