import { ChainId } from '../../../chains/mod.ts';
import { Header } from '../../../core/mod.ts';

export interface BlockHeader {
  blockNumber: number | undefined;
  header: Header | undefined;
}

export type ChainBlockHeaders = Partial<
  Record<ChainId, BlockHeader>
>;

export const BLOCK_HEADER_DEFAULTS: ChainBlockHeaders = {};
