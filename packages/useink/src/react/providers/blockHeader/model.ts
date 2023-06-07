import { ChainId } from '../../../chains/index';
import { Header } from '../../../core/index';

export interface BlockHeader {
  blockNumber: number | undefined;
  header: Header | undefined;
}

export type ChainBlockHeaders = Partial<Record<ChainId, BlockHeader>>;

export const BLOCK_HEADER_DEFAULTS: ChainBlockHeaders = {};
