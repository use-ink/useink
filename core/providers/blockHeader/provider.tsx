import React, { useEffect, useMemo, useReducer } from 'react'
import { BlockHeaderContext } from './context.ts'
import { ChainBlockHeaders } from './model.ts'
import { useApis } from '../../mod.ts'
import { ChainId } from '../../../chains/mod.ts'
import { chainBlockHeaderReducer } from './reducer.ts'

const toBlockNumber = (valWithComma: string | undefined): number =>
  parseInt(`${valWithComma?.split(',').join('')}`)

export const BlockHeaderProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const chainApis = useApis()

  const [chainBlockHeaders, dispatch] = useReducer(
    chainBlockHeaderReducer,
    {} as ChainBlockHeaders,
  )

  const chainIds: ChainId[] = useMemo(
    () => (chainApis.apis ? (Object.keys(chainApis.apis) as ChainId[]) : []),
    [chainApis],
  )

  useEffect(() => {
    function listenToBlocks() {
      return chainIds.map((chainId) => {
        return chainApis?.apis?.[chainId]?.api?.rpc.chain.subscribeNewHeads(
          (header) => {
            try {
              const blockNumber = toBlockNumber(
                header.number.toHuman()?.toString(),
              )
              blockNumber &&
                dispatch({
                  type: 'ADD_CHAIN_BLOCK_HEADER',
                  chainId,
                  blockHeader: { blockNumber, header },
                })
            } catch (e) {
              console.error(e)
            }
          },
        )
      })
    }

    let unsubFuncs: (VoidFunction | undefined)[] | undefined
    Promise.all(listenToBlocks()).then((unsubs) => (unsubFuncs = unsubs))

    return () => {
      unsubFuncs && unsubFuncs.forEach((unsub) => unsub && unsub())
    }
  }, [chainApis])

  return (
    <BlockHeaderContext.Provider value={chainBlockHeaders}>
      {children}
    </BlockHeaderContext.Provider>
  )
}
