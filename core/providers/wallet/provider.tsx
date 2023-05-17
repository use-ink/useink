import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useConfig } from '../../hooks/mod.ts'
import { WalletContext } from './context.ts'
import { AutoConnect, WalletError, WalletName } from './model.ts'
import {
  getWallets,
  getWalletBySource,
  WalletAccount,
} from '@talisman/connect-wallets'
import { Unsub } from '../../types/mod.ts'

function getAutoConnectWalletInfo(key: string): AutoConnect | null {
  const item = typeof window !== 'undefined' && window.localStorage.getItem(key)
  return item ? (JSON.parse(item) as AutoConnect) : null
}

export const WalletProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const C = useConfig()
  const [account, setWalletAccount] = useState<WalletAccount>()
  const [accounts, setAccounts] = useState<WalletAccount[]>()
  const [walletError, setWalletError] = useState<WalletError>()
  const dappName = useMemo(
    () =>
      C.dappName && C.dappName.trim().length > 0
        ? C.dappName
        : 'A Dapp built in useink',
    [C.dappName],
  )

  const [activeWallet, setActiveWallet] = useState<WalletName | undefined>(
    getAutoConnectWalletInfo(dappName)?.wallet,
  )

  const enableAutoConnect = React.useCallback(
    (a: AutoConnect) => {
      localStorage.setItem(dappName, JSON.stringify(a))
    },
    [dappName],
  )

  const disableAutoConnect = React.useCallback(() => {
    if (getAutoConnectWalletInfo(dappName)) localStorage.removeItem(dappName)
  }, [dappName])

  const disconnect = useCallback(() => {
    disableAutoConnect()
    setAccounts(undefined)
    setWalletAccount(undefined)
    setActiveWallet(undefined)
    setWalletError(undefined)
  }, [dappName])

  const setAccount = useCallback(
    (newAccount: WalletAccount) => {
      const accountDisabled = !accounts?.find(
        (a) => a.address === newAccount.address,
      )

      if (accountDisabled) {
        setWalletError(WalletError.AccountDisabled)
        return
      }

      walletError !== undefined && setWalletError(undefined)

      setWalletAccount(newAccount)

      if (!C.wallet?.skipAutoConnect) {
        enableAutoConnect({
          address: newAccount.address,
          wallet: newAccount.source,
        })
      }
    },
    [accounts, C.wallet?.skipAutoConnect],
  )

  const connectWallet = useCallback(async (walletName: WalletName): Promise<
    Unsub | undefined
  > => {
    walletError && setWalletError(undefined)
    const w = getWalletBySource(walletName)

    if (!w) {
      setWalletError(WalletError.WalletNotInstalled)
      setActiveWallet(undefined)
      return
    }

    try {
      await w.enable(dappName)
    } catch (e) {
      setWalletError(WalletError.EnableFailed)
      setActiveWallet(undefined)
      return
    }

    const unsub = (await w.subscribeAccounts((accts) => {
      setAccounts(accts)

      const firstAccount = accts?.[0]

      const noAccountsEnabled = !accts || !firstAccount
      if (noAccountsEnabled) {
        setWalletError(WalletError.NoAccountsEnabled)
        setWalletAccount(undefined)
        disableAutoConnect()
        return
      }

      const activeAccountNoLongerConnected =
        account && !accts?.find((a) => a.address === account?.address)

      if (activeAccountNoLongerConnected) {
        setWalletAccount(firstAccount)

        if (!C.wallet?.skipAutoConnect) {
          enableAutoConnect({
            address: firstAccount.address,
            wallet: firstAccount.source,
          })
        }
        return
      }

      const autoConnect = getAutoConnectWalletInfo(dappName)

      const autoConnectAccount =
        autoConnect && accts.find((a) => a.address === autoConnect.address)

      const initialAccount = autoConnectAccount || firstAccount

      setWalletAccount(initialAccount)

      if (!C.wallet?.skipAutoConnect) {
        enableAutoConnect({
          address: initialAccount.address,
          wallet: initialAccount.source,
        })
      }
    })) as Unsub

    return unsub
  }, [])

  const connect = useCallback((walletName: WalletName) => {
    setActiveWallet(walletName)
  }, [])

  useEffect(() => {
    if (!activeWallet) return

    let unsubFunc: (Unsub | undefined) | undefined
    connectWallet(activeWallet).then((unsub) => (unsubFunc = unsub))

    return () => unsubFunc?.()
  }, [activeWallet])

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
  )
}
