import { useContext } from 'react';
import { Wallet, WalletContext } from '../providers/wallet/mod.ts';

export type { Wallet } from '../providers/wallet/mod.ts';

export const useWallet: () => Wallet = () =>
  useContext<Wallet>(WalletContext);
