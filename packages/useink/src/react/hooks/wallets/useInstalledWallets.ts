import { Wallet } from '../../providers/wallet/index';
import { useWallet } from '../index';
import { useMemo } from 'react';

export const useInstalledWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets().filter((w) => w.installed), []);
};
