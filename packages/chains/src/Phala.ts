import { IChain } from './types.ts';

export const Phala: IChain = {
  id: 'Phala',
  name: 'Phala',
  ss58Prefix: 5,
  rpcUrls: [
    'wss://api.phala.network/ws',
    'wss://phala.api.onfinality.io/public-ws',
  ],
  explorerUrls: ['https://phala.subscan.io'],
  token: {
    symbol: 'PHA',
  },
};

export const Khala: IChain = {
  id: 'Khala',
  name: 'Khala',
  ss58Prefix: 5,
  rpcUrls: [
    'wss://api.khala.network/ws',
    'wss://khala.api.onfinality.io/public-ws',
  ],
  explorerUrls: ['https://khala.subscan.io'],
  token: {
    symbol: 'KHA',
  },
};

export const PhalaTestnet: IChain = {
  id: 'PhalaTestnet',
  name: 'Phala Testnet',
  ss58Prefix: 5,
  rpcUrls: [
    'wss://poc5.phala.network/ws#/explorer',
  ],
  explorerUrls: [
    'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpoc5.phala.network%2Fws#/explorer',
  ],
  token: {
    symbol: 'KHA',
  },
};
