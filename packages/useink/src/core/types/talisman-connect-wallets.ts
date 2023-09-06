export { getWalletBySource, getWallets } from '@talismn/connect-wallets';
import type { Wallet } from '@talismn/connect-wallets';
import { Signer } from './api';

export interface WalletAccount {
  // Talisman sets the type as unknown so we must manually set it to Signer
  signer?: Signer;
  address: string;
  source: string;
  name?: string;
  wallet?: Wallet;
}
