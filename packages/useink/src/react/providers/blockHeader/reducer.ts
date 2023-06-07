import { ChainId } from '../../../chains/index';
import { BlockHeader, ChainBlockHeaders } from './model.ts';

interface AddChainBlockHeader {
  type: 'ADD_CHAIN_BLOCK_HEADER';
  chainId: ChainId;
  blockHeader: BlockHeader;
}

type Action = AddChainBlockHeader;

export function chainBlockHeaderReducer(
  state: ChainBlockHeaders,
  action: Action,
): ChainBlockHeaders {
  switch (action.type) {
    case 'ADD_CHAIN_BLOCK_HEADER':
      return {
        ...state,
        [action.chainId]: action.blockHeader,
      };
  }
}
