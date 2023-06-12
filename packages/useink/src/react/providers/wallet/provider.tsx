import {
  Unsub,
  WalletAccount,
  getWalletBySource,
  getWallets,
} from '../../../core';
import { useConfig } from '../../hooks';
import { WalletContext } from './context.ts';
import { AutoConnect, WalletError, WalletName } from './model.ts';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

function getAutoConnectWalletInfo(key: string): AutoConnect | null {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as AutoConnect) : null;
}

function enableAutoConnect(a: AutoConnect, key: string) {
  localStorage.setItem(key, JSON.stringify(a));
}

function disableAutoConnect(key: string) {
  if (getAutoConnectWalletInfo(key)) localStorage.removeItem(key);
}

export const WalletProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const C = useConfig();
  const [account, setWalletAccount] = useState<WalletAccount>();
  const [accounts, setAccounts] = useState<WalletAccount[]>();
  const [walletError, setWalletError] = useState<WalletError>();
  const dappName = useMemo(
    () =>
      C.dappName && C.dappName.trim().length > 0
        ? C.dappName
        : 'A Dapp built in useink',
    [C.dappName],
  );

  const [activeWallet, setActiveWallet] = useState<WalletName>();

  const disconnect = useCallback(() => {
    disableAutoConnect(dappName);
    setAccounts(undefined);
    setWalletAccount(undefined);
    setActiveWallet(undefined);
    setWalletError(undefined);
  }, [dappName]);

  const setAccount = useCallback(
    (newAccount: WalletAccount) => {
      const accountDisabled = !accounts?.find(
        (a) => a.address === newAccount.address,
      );

      if (accountDisabled) {
        setWalletError(WalletError.AccountDisabled);
        return;
      }

      walletError !== undefined && setWalletError(undefined);

      setWalletAccount(newAccount);

      if (!C.wallet?.skipAutoConnect) {
        enableAutoConnect(
          {
            address: newAccount.address,
            wallet: newAccount.source,
          },
          dappName,
        );
      }
    },
    [accounts, C.wallet?.skipAutoConnect],
  );

  const connectWallet = useCallback(
    async (walletName: WalletName): Promise<Unsub | undefined> => {
      walletError && setWalletError(undefined);
      const w = getWalletBySource(walletName);

      if (!w) {
        setWalletError(WalletError.WalletNotInstalled);
        setActiveWallet(undefined);
        return;
      }

      try {
        await w.enable(dappName);
      } catch (_e) {
        setWalletError(WalletError.EnableFailed);
        setActiveWallet(undefined);
        return;
      }

      const unsub = (await w.subscribeAccounts((accts) => {
        setAccounts(accts);

        const firstAccount = accts?.[0];

        const noAccountsEnabled = !accts || !firstAccount;
        if (noAccountsEnabled) {
          setWalletError(WalletError.NoAccountsEnabled);
          setWalletAccount(undefined);
          disableAutoConnect(dappName);
          return;
        }

        const activeAccountNoLongerConnected =
          account && !accts?.find((a) => a.address === account?.address);

        if (activeAccountNoLongerConnected) {
          setWalletAccount(firstAccount);

          if (!C.wallet?.skipAutoConnect) {
            enableAutoConnect(
              {
                address: firstAccount.address,
                wallet: firstAccount.source,
              },
              dappName,
            );
          }
          return;
        }

        const autoConnect = getAutoConnectWalletInfo(dappName);

        const autoConnectAccount =
          autoConnect && accts.find((a) => a.address === autoConnect.address);

        const initialAccount = autoConnectAccount || firstAccount;

        setWalletAccount(initialAccount);

        if (!C.wallet?.skipAutoConnect) {
          enableAutoConnect(
            {
              address: initialAccount.address,
              wallet: initialAccount.source,
            },
            dappName,
          );
        }
      })) as Unsub;

      return unsub;
    },
    [],
  );

  const connect = useCallback((walletName: WalletName) => {
    setActiveWallet(walletName);
  }, []);

  useEffect(() => {
    if (!activeWallet) {
      const wallet = getAutoConnectWalletInfo(dappName)?.wallet;
      if (wallet) setActiveWallet(wallet);
      return;
    }

    let unsubFunc: (Unsub | undefined) | undefined;
    connectWallet(activeWallet).then((unsub) => unsubFunc === unsub);

    return () => unsubFunc?.();
  }, [activeWallet]);

  return (
    <WalletContext.Provider
      value={{
        account,
        isConnected: Boolean(account),
        accounts,
        connect,
        disconnect,
        walletError,
        setAccount,
        getWallets,
        getWalletBySource,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
