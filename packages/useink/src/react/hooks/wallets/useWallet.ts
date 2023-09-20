import { WalletContext, WalletState } from '../../providers/wallet/index';
import { useContext } from 'react';

export type { WalletState } from '../../providers/wallet/index';

export const useWallet: () => WalletState = () =>
  useContext<WalletState>(WalletContext);
