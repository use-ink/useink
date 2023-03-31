import { IChain } from './types.ts';

export const AlephZero: IChain = {
  id: 'AlephZero',
  name: 'Aleph Zero',
  ss58Prefix: 42,
  coingeckoId: 'aleph-zero',
  explorerUrls: ['https://alephzero.subscan.io/'],
  rpcUrls: ['wss://ws.azero.dev'],
  token: {
    symbol: 'ALEPH',
  },
};

export const AlephZeroTestnet: IChain = {
  id: 'AlephZeroTestnet',
  name: 'Aleph Zero Testnet',
  ss58Prefix: 42,
  rpcUrls: ['wss://ws.test.azero.dev'],
  explorerUrls: ['https://azero.dev/?rpc=wss%3A%2F%2Fws.test.azero.dev'],
  testnet: true,
  token: {
    symbol: 'ALEPH',
  },
};
