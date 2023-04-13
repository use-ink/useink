import React from 'react'
import { useConfig } from '../../hooks/useConfig.ts'
import {
  InjectedAccountWithMeta,
  InjectedExtension,
} from '@polkadot/extension-inject/types'
import { WalletContext } from './context.ts'
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from '@polkadot/extension-dapp'
import { WalletError } from './model.ts'

const getAutoConnectAddress = (key: string): string | null =>
  localStorage.getItem(key)

export const WalletProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const C = useConfig()
  const [account, setCallerAccount] = React.useState<InjectedAccountWithMeta>()
  const [accounts, setAccounts] = React.useState<InjectedAccountWithMeta[]>()
  const [extension, setExtension] = React.useState<InjectedExtension>()
  const [error, setError] = React.useState<WalletError>()
  const originName =
    C.dappName && C.dappName.trim().length > 0
      ? C.dappName
      : 'A dapp built with useink!'

  const enableAutoConnect = React.useCallback(
    (address: string) => {
      localStorage.setItem(originName, address)
    },
    [originName],
  )

  const disableAutoConnect = React.useCallback(() => {
    if (getAutoConnectAddress(originName)) localStorage.removeItem(originName)
  }, [originName])

  const disconnect = React.useCallback(() => {
    disableAutoConnect()
    setAccounts(undefined)
    setCallerAccount(undefined)
    setExtension(undefined)
  }, [originName])

  const setAccount = React.useCallback(
    (newAccount: InjectedAccountWithMeta) => {
      web3FromAddress(newAccount.address)
        .then((ext) => {
          setExtension(ext)
          setCallerAccount(newAccount)
          if (!C.wallet?.skipAutoConnect) {
            enableAutoConnect(newAccount.address)
          }
        })
        .catch((e: unknown) => {
          console.error('Account not found in any extensions', e)
          setError(WalletError.AccountNotFound)
        })
    },
    [C.wallet?.skipAutoConnect],
  )

  const connect = React.useCallback(async () => {
    await web3Enable(originName)

    const allAccounts = await web3Accounts()

    if (!allAccounts.length) {
      setAccounts([])
      console.error('No accounts found for connected extensions')
      return
    }

    setAccounts(allAccounts)

    if (!account) {
      const autoConnectAddress = getAutoConnectAddress(originName)
      const initialAccount = !C.wallet?.skipAutoConnect
        ? allAccounts.find((a) => a.address === autoConnectAddress) ||
          allAccounts[0]
        : allAccounts[0]

      if (!initialAccount) {
        console.error('Account undefined')
        return
      }

      if (!C.wallet?.skipAutoConnect && initialAccount) {
        enableAutoConnect(initialAccount.address)
      }

      web3FromAddress(initialAccount.address)
        .then((ext) => {
          setCallerAccount(initialAccount)
          setExtension(ext)
        })
        .catch((e: unknown) => {
          console.error('connection error', e)
        })
    }
  }, [])

  React.useEffect(() => {
    if (getAutoConnectAddress(originName)) {
      connect()
      return
    }

    disconnect()
  }, [])

  return (
    <WalletContext.Provider
      value={{
        account,
        accounts,
        connect,
        disconnect,
        error,
        extension,
        setAccount,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
