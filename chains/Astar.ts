import { IChain } from './types.ts';

export const Astar: IChain = {
  id: 'Astar',
  name: 'Astar',
  ss58Prefix: 5,
  rpcUrls: ['wss://astar-rpc.dwellir.com'],
  explorerUrls: ['https://astar.subscan.io'],
  token: {
    symbol: 'ASTR',
  },
};

export const Shiden: IChain = {
  id: 'Shiden',
  name: 'Shiden',
  ss58Prefix: 5,
  rpcUrls: ['wss://shiden-rpc.dwellir.com'],
  explorerUrls: ['https://shiden.subscan.io'],
  token: {
    symbol: 'SDN',
  },
};

export const Shibuya: IChain = {
  id: 'Shibuya',
  name: 'Shibuya Testnet',
  testnet: true,
  ss58Prefix: 5,
  rpcUrls: ['wss://shibuya-rpc.dwellir.com'],
  explorerUrls: ['https://shibuya.subscan.io'],
  token: {
    symbol: 'SBY',
  },
};
