import {
  WalletAccount,
  getWalletBySource,
  getWallets,
} from '../../../core/index';

export enum WalletError {
  AccountDisabled = 'AccountNotEnabled',
  ConnectionError = 'ConnectionError',
  EnableFailed = 'EnableFailed',
  NoAccountsEnabled = 'NoAccountsEnabled',
  WalletNotInstalled = 'WalletNotInstalled',
}

export interface WalletState {
  account?: WalletAccount | undefined;
  accounts: WalletAccount[] | undefined;
  connect: (walletName: WalletName) => void;
  disconnect: () => void;
  walletError?: WalletError;
  isConnected: boolean;
  setAccount: (account: WalletAccount) => void;
  getWallets: typeof getWallets;
  getWalletBySource: typeof getWalletBySource;
}

export type Wallet = Exclude<ReturnType<typeof getWalletBySource>, undefined>;

export const WALLET_DEFAULTS: WalletState = {
  connect: () => undefined,
  disconnect: () => undefined,
  account: undefined,
  accounts: undefined,
  setAccount: () => undefined,
  isConnected: false,
  getWallets,
  getWalletBySource,
};

export type WalletName = string;

export interface AutoConnect {
  address: string;
  wallet: WalletName;
}
