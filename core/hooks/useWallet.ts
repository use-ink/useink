import { useContext } from 'react';
import { WalletState, WalletContext } from '../providers/wallet/mod.ts';

export type { WalletState } from '../providers/wallet/mod.ts';

export const useWallet: () => WalletState = () =>
  useContext<WalletState>(WalletContext);
