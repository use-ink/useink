import { useEffect, useState } from 'react';
import { DeriveBalancesAccount } from '@polkadot/api-derive/types';
import { useApi } from '../useApi.ts';
import { useBlockHeader } from './useBlockHeader.ts';

export interface WithAddress {
  address: string | undefined;
}

export const useBalance = (
  account?: WithAddress,
): DeriveBalancesAccount | undefined => {
  const [balance, setBalance] = useState<DeriveBalancesAccount>();
  const { blockNumber } = useBlockHeader();
  const { api } = useApi();

  useEffect(() => {
    if (!api || !account || !account.address) return;
    api.derive.balances.account(account.address).then(setBalance).catch(
      console.error,
    );
  }, [blockNumber, account]);

  return balance;
};
