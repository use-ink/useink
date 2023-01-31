import { createContext } from 'react';
import { BLOCK_HEADER_DEFAULTS, BlockHeader } from './model.ts';

export const BlockHeaderContext = createContext<BlockHeader>({
  ...BLOCK_HEADER_DEFAULTS,
});
