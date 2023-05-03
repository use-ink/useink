import { useContext } from 'react';
import { WalletContext, WalletState } from '../../providers/wallet/mod.ts';

export type { WalletState } from '../../providers/wallet/mod.ts';

export const useWallet: () => WalletState = () =>
  useContext<WalletState>(WalletContext);
