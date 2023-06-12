import { ChainId } from '../../../chains/index';
import {
  BlockHeaderContext,
  ChainBlockHeaders,
} from '../../providers/blockHeader/index';
import { useChain } from '../config/useChain.ts';
import { BlockHeader } from './index';
import { useContext } from 'react';

export type { BlockHeader } from '../../providers/blockHeader/index';

export const useBlockHeader = (chainId?: ChainId): BlockHeader | undefined => {
  const chain = useChain(chainId);
  return chain ? useContext(BlockHeaderContext)[chain.id] : undefined;
};

export const useBlockHeaders = (): ChainBlockHeaders =>
  useContext(BlockHeaderContext);
