import { IChain } from './types.ts';

export const ContractsRococo: IChain = {
  id: 'ContractsRococo',
  name: 'Contracts (Rococo)',
  ss58Prefix: 5,
  rpcUrls: ['wss://rococo-contracts-rpc.polkadot.io'],
  explorerUrls: [
    'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer',
  ],
  testnet: true,
  token: {
    symbol: 'ROC',
  },
};
