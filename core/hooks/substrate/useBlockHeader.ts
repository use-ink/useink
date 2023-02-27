import { useContext } from 'react';
import { BlockHeaderContext } from '../../providers/blockHeader/mod.ts';

export type { BlockHeader } from '../../providers/blockHeader/mod.ts';

export const useBlockHeader = () => useContext(BlockHeaderContext);
