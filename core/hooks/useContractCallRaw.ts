import { ContractPromise } from '@polkadot/api-contract';
import { useEffect, useState } from 'react';
import {
  ContractCallResultRaw,
  ContractExecResult,
  ContractOptions,
  Result,
} from '../types/mod.ts';
import { callContractRaw } from '../utils/mod.ts';
import { useBlockHeader } from './substrate/useBlockHeader.ts';
import { useAbiMessage } from './useAbiMessage.ts';
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
  const abiMessage = useAbiMessage(contract, message);

  useEffect(() => {
    abiMessage &&
      contract &&
      callContractRaw(
        contract,
        abiMessage,
        account?.address,
        args,
        options,
      ).then((r) => {
        r && setCallResult(r);
      });
  }, [contract?.address, blockNumber, account?.address, abiMessage]);

  if (!abiMessage || !callResult) return null;
  if (!abiMessage) return null;

  return {
    ok: true,
    value: {
      callResult,
      abiMessage,
    },
  };
}
