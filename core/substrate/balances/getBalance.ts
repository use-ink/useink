import {
  ApiPromise,
  DeriveBalancesAccount,
  WithAddress,
} from '../../types/mod.ts';

export const getBalance = async (
  api: ApiPromise | undefined,
  account: WithAddress | undefined,
): Promise<DeriveBalancesAccount | undefined> => {
  if (!api || !account?.address) return;

  return await api.derive.balances.account(account.address);
};
