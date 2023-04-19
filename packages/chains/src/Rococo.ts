import { IChain } from './types.ts';

export const Rococo: IChain = {
  id: 'Rococo',
  name: 'Rococo',
  ss58Prefix: 5,
  rpcUrls: ['wss://rococo-rpc.polkadot.io'],
  explorerUrls: [
    'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer',
  ],
  testnet: true,
  token: {
    symbol: 'ROC',
  },
};
