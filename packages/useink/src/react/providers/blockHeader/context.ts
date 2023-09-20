import { createContext } from 'react';
import { BLOCK_HEADER_DEFAULTS, ChainBlockHeaders } from './model.ts';

export const BlockHeaderContext = createContext<ChainBlockHeaders>({
  ...BLOCK_HEADER_DEFAULTS,
});
