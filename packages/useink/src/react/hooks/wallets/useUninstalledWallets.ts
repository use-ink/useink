import { Wallet } from '../../providers/wallet/index';
import { useWallet } from './useWallet.ts';
import { useMemo } from 'react';

export const useUninstalledWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets().filter((w) => !w.installed), []);
};
