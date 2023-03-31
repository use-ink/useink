import { useContext } from 'react';
import { BlockHeaderContext } from '../../providers/blockHeader/mod.ts';
import { ChainId } from '../../../chains/mod.ts';
import { BlockHeader } from './mod.ts';
import { useChain } from '../useChain.ts';

export type { BlockHeader } from '../../providers/blockHeader/mod.ts';

export const useBlockHeader = (
  chainId?: ChainId,
): BlockHeader | undefined => {
  const chain = useChain(chainId);
  return chain ? useContext(BlockHeaderContext)[chain.id] : undefined;
};

export const useBlockHeaders = () => useContext(BlockHeaderContext);
