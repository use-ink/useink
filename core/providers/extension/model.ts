import {
  InjectedAccountWithMeta,
  InjectedExtension,
} from '@polkadot/extension-inject/types';

export enum ExtensionError {
  AccountFetchFailed = 'AccountFetchFailed',
  AccountNotFound = 'AccountNotFound',
  AccountsNotEnabled = 'AccountsNotEnabled',
  ConnectionError = 'ConnectionError',
  ExtensionsNotFound = 'ExtensionsNotFound',
  SettingNewAccountFailed = 'SettingNewAccountFailed',
}

export type Extension = {
  account?: InjectedAccountWithMeta | undefined;
  accounts: InjectedAccountWithMeta[] | undefined;
  connect: () => void;
  disconnect: () => void;
  error?: ExtensionError;
  extension?: InjectedExtension | undefined;
  setAccount: (account: InjectedAccountWithMeta) => void;
};

export const EXTENSION_DEFAULTS: Extension = {
  connect: () => null,
  disconnect: () => null,
  account: undefined,
  accounts: undefined,
  extension: undefined,
  setAccount: () => null,
};
