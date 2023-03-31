import { ArrayOneOrMore } from '../core/types/array.ts';

export type ChainId =
  | 'AlephZero'
  | 'AlephZeroTestnet'
  | 'Astar'
  | 'ContractsRococo'
  | 'Development'
  | 'Khala'
  | 'Phala'
  | 'PhalaTestnet'
  | 'Rococo'
  | 'Shibuya'
  | 'Shiden';

export interface IChain {
  id: ChainId;
  name: string;
  ss58Prefix: number;
  rpcUrls: ArrayOneOrMore<string>;
  explorerUrls: string[];
  testnet?: boolean;
  coingeckoId?: string;
  token: {
    symbol: string;
  };
}
