import { useMemo } from 'react';
import { Wallet } from '../../providers/wallet/mod.ts';
import { useWallet } from './useWallet.ts';

export const useUninstalledWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets().filter((w) => !w.installed), []);
};
