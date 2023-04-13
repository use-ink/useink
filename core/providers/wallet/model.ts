import {
  InjectedAccountWithMeta,
  InjectedExtension,
} from '@polkadot/extension-inject/types';

export enum WalletError {
  AccountFetchFailed = 'AccountFetchFailed',
  AccountNotFound = 'AccountNotFound',
  AccountsNotEnabled = 'AccountsNotEnabled',
  ConnectionError = 'ConnectionError',
  ExtensionsNotFound = 'ExtensionsNotFound',
  SettingNewAccountFailed = 'SettingNewAccountFailed',
}

export type Wallet = {
  account?: InjectedAccountWithMeta | undefined;
  accounts: InjectedAccountWithMeta[] | undefined;
  connect: (walletName?: string) => void;
  disconnect: () => void;
  error?: WalletError;
  extension?: InjectedExtension | undefined;
  setAccount: (account: InjectedAccountWithMeta) => void;
};

export const WALLET_DEFAULTS: Wallet = {
  connect: () => null,
  disconnect: () => null,
  account: undefined,
  accounts: undefined,
  extension: undefined,
  setAccount: () => null,
};
