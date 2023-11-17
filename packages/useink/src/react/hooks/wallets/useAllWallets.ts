import { useMemo } from 'react';
import { Wallet } from '../../providers/wallet/index';
import { useWallet } from '../index';

export const useAllWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets(), []);
};
