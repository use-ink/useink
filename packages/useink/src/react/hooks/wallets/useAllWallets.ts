import { Wallet } from '../../providers/wallet/index';
import { useWallet } from '../index';
import { useMemo } from 'react';

export const useAllWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets(), []);
};
