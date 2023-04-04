import { useEffect, useState } from 'react';
import { DeriveBalancesAccount } from '@polkadot/api-derive/types';
import { useApi } from '../useApi';

interface AccountWithBalance extends DeriveBalancesAccount {
  address: string;
}

export const useAccounts = (): AccountWithBalance[] | undefined => {
  const [accounts, setAccounts] = useState<AccountWithBalance[]>();
  const { api } = useApi();

  useEffect(() => {
    const getAccounts = async () => {
      if (!api) return;

      const accounts = await api.derive.balances.all();
      const accountsWithBalances = accounts.map((account) => ({
        ...account,
        address: account.accountId.toString(),
      }));

      setAccounts(accountsWithBalances);
    };

    getAccounts().catch(console.error);
  }, []);

  return accounts;
};
