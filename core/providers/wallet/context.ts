import { createContext } from 'react';
import { WalletState, WALLET_DEFAULTS } from './model.ts';

export const WalletContext = createContext<WalletState>({
  ...WALLET_DEFAULTS,
});
