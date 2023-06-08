import { ChainId } from '../../../chains/index';
import { Abi, ContractPromise } from '../../../core/index';
import { useChain } from '../config/useChain.ts';
import { useApi } from '../substrate/useApi.ts';
import { ChainContract } from './types.ts';
import { useEffect, useMemo, useState } from 'react';

export function useContract<T extends ContractPromise = ContractPromise>(
  address: string,
  metadata: Record<string, unknown>,
  chainId?: ChainId,
): ChainContract<T> | undefined {
  const [contract, setContract] = useState<T | undefined>();
  const chainConfig = useChain(chainId);
  const { api } = useApi(chainConfig?.id) || {};

  const abi = useMemo(
    () => api && new Abi(metadata, api.registry.getChainProperties()),
    [api],
  );

  useEffect(() => {
    try {
      api && abi && setContract(new ContractPromise(api, abi, address) as T);
    } catch (err) {
      console.error("Couldn't create contract instance: ", err);
    }
  }, [abi, address, api]);

  return chainConfig && contract
    ? { chainId: chainConfig.id, contract }
    : undefined;
}
