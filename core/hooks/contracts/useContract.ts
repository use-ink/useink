import { Abi, ContractPromise } from '@polkadot/api-contract';
import { useEffect, useMemo, useState } from 'react';
import { useApi } from '../useApi.ts';

export type ContractAbi = string | Record<string, unknown> | Abi;

export function useContract<T extends ContractPromise = ContractPromise>(
  address: string,
  metadata: Record<string, unknown>,
): T | undefined {
  const [contract, setContract] = useState<T | undefined>();
  const { api } = useApi();

  const abi = useMemo(
    () => api && new Abi(metadata, api.registry.getChainProperties()),
    [api],
  );

  useEffect(() => {
    try {
      api && abi && setContract(new ContractPromise(api, abi, address) as T);
    } catch (err) {
      console.error('Couldn\'t create contract instance: ', err);
    }
  }, [abi, address, api]);

  return contract;
}
