export { getWalletBySource, getWallets } from '@talismn/connect-wallets';
import { Signer } from './api';
import type { WalletAccount as TalismanWalletAccount } from '@talismn/connect-wallets';

export interface WalletAccount extends TalismanWalletAccount {
  // Talisman sets the type as unknown so we must manually set it to Signer
  signer?: Signer;
}
