import { ContractPromise } from "@polkadot/api-contract";
import { useMemo } from "react";
import { AbiMessage } from "../../types/contracts.ts";
import { toContractAbiMessage } from "../../utils";

export function useAbiMessage(
  contract: ContractPromise | undefined,
  message: string
): AbiMessage | undefined {
  const abiMessage = useMemo(() => {
    if (!contract) return;
    return toContractAbiMessage(contract, message);
  }, [contract, message]);

  if (!abiMessage || !abiMessage.ok) return;

  return abiMessage.value;
}
