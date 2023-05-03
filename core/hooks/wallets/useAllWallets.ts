import { useMemo } from 'react';
import { useWallet } from '../mod.ts';
import { Wallet } from '../../providers/wallet/mod.ts';

export const useAllWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets(), []);
};
