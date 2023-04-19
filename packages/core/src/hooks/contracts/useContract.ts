import { Abi, ContractPromise } from "@polkadot/api-contract";
import { useEffect, useMemo, useState } from "react";
import { useApi } from "../useApi.ts";
import { ChainId } from "useink/chains";
import { useChain } from "../useChain.ts";

export type ContractAbi = string | Record<string, unknown> | Abi;

export interface ChainContract<T extends ContractPromise = ContractPromise> {
  contract: T | undefined;
  chainId: ChainId;
}

export function useContract<T extends ContractPromise = ContractPromise>(
  address: string,
  metadata: Record<string, unknown>,
  chainId?: ChainId
): ChainContract<T> | undefined {
  const [contract, setContract] = useState<T | undefined>();
  const chainConfig = useChain(chainId);
  const { api } = useApi(chainConfig?.id) || {};

  const abi = useMemo(
    () => api && new Abi(metadata, api.registry.getChainProperties()),
    [api]
  );

  useEffect(() => {
    try {
      api && abi && setContract(new ContractPromise(api, abi, address) as T);
    } catch (err) {
      console.error("Couldn't create contract instance: ", err);
    }
  }, [abi, address, api]);

  return chainConfig ? { chainId: chainConfig.id, contract } : undefined;
}
