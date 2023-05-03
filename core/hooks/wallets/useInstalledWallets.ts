import { useMemo } from 'react';
import { useWallet } from '../mod.ts';
import { Wallet } from '../../providers/wallet/mod.ts';

export const useInstalledWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets().filter((w) => w.installed), []);
};
