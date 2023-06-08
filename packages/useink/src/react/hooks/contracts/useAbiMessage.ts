import {
  AbiMessage,
  ContractPromise,
  toContractAbiMessage,
} from '../../../core/index';
import { useMemo } from 'react';

export function useAbiMessage(
  contract: ContractPromise | undefined,
  message: string,
): AbiMessage | undefined {
  const abiMessage = useMemo(() => {
    if (!contract) return;
    return toContractAbiMessage(contract, message);
  }, [contract, message]);

  if (!abiMessage || !abiMessage.ok) return;

  return abiMessage.value;
}
