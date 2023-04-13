import { createContext } from 'react';
import { Wallet, WALLET_DEFAULTS } from './model.ts';

export const WalletContext = createContext<Wallet>({
  ...WALLET_DEFAULTS,
});
