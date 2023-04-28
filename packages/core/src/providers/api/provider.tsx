import React, { useEffect, useReducer } from 'react'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { useChains } from '../../hooks'
import { APIContext } from './context.ts'
import { apiProvidersReducer } from './reducer.ts'

export const APIProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const chains = useChains()
  const [apis, dispatch] = useReducer(apiProvidersReducer, {})

  useEffect(() => {
    chains.forEach((chain) => {
      const provider = new WsProvider(chain.rpcUrls[0])

      ApiPromise.create({ provider }).then((api) => {
        dispatch({
          type: 'ADD_API_PROVIDER',
          chainId: chain.id,
          apiProvider: { api, provider },
        })
      })
    })
  }, [chains])

  return <APIContext.Provider value={{ apis }} children={children} />
}
