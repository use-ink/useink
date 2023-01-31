import { Header } from '@polkadot/types/interfaces';

export type BlockHeader = {
  blockNumber: number | undefined;
  header: Header | undefined;
};

export const BLOCK_HEADER_DEFAULTS: BlockHeader = {
  blockNumber: undefined,
  header: undefined,
};
