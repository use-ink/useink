import { WALLET_DEFAULTS, WalletState } from './model.ts';
import { createContext } from 'react';

export const WalletContext = createContext<WalletState>({
  ...WALLET_DEFAULTS,
});
