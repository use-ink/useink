import { BLOCK_HEADER_DEFAULTS, ChainBlockHeaders } from './model.ts';
import { createContext } from 'react';

export const BlockHeaderContext = createContext<ChainBlockHeaders>({
  ...BLOCK_HEADER_DEFAULTS,
});
