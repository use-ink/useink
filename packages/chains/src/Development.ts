import { IChain } from './types.ts';

export const Development: IChain = {
  id: 'Development',
  name: 'Development',
  ss58Prefix: 5,
  rpcUrls: ['ws://127.0.0.1:9944'],
  explorerUrls: [
    'https://polkadot.js.org/apps/#/explorer?rpc=ws://127.0.0.1:9944',
  ],
  testnet: true,
  token: {
    symbol: 'DEV',
  },
};
