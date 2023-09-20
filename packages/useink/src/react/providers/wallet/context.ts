import { createContext } from 'react';
import { WALLET_DEFAULTS, WalletState } from './model.ts';

export const WalletContext = createContext<WalletState>({
  ...WALLET_DEFAULTS,
});
