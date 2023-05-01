import {
  getWalletBySource,
  getWallets,
  WalletAccount,
} from '@talisman/connect-wallets';

export type { WalletAccount } from '@talisman/connect-wallets';

export enum WalletError {
  ConnectionError = 'ConnectionError',
  EnableFailed = 'EnableFailed',
  WalletNotInstalled = 'WalletNotInstalled',
  NoAccountsEnabled = 'NoAccountsEnabled',
}

export interface WalletState {
  account?: WalletAccount | undefined;
  accounts: WalletAccount[] | undefined;
  connect: (walletName: WalletName) => void;
  disconnect: () => void;
  walletError?: WalletError;
  setAccount: (account: WalletAccount) => void;
  getWallets: typeof getWallets;
  getWalletBySource: typeof getWalletBySource;
}

export const WALLET_DEFAULTS: WalletState = {
  connect: () => undefined,
  disconnect: () => undefined,
  account: undefined,
  accounts: undefined,
  setAccount: () => undefined,
  getWallets,
  getWalletBySource,
};

export type WalletName = string;

export interface AutoConnect {
  address: string;
  wallet: WalletName;
}
