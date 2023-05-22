import { Chain, ChainId, RococoContractsTestnet } from '../../../chains/mod.ts';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import { ArrayOneOrMore } from '../../../core/mod.ts';

export type ChainRPCs = Partial<Record<ChainId, string>>;

export type ConfigProps = {
  dappName?: string;
  chains: ArrayOneOrMore<Chain>;
  events?: {
    expiration?: number;
    checkInterval?: number;
  };
  wallet?: {
    skipAutoConnect?: boolean;
  };
};

export type SetChainRpc = (rpc: string, chain?: ChainId) => void;

export interface ChainConfig {
  setChainRpc: SetChainRpc;
  chainRpcs: ChainRPCs;
}

export type Config = ChainConfig & ConfigProps;

export const DEFAULT_CONFIG: Config = {
  dappName: 'A dapp built with useInk!',
  chains: [RococoContractsTestnet],
  events: {
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND,
  },
  setChainRpc: () => null,
  chainRpcs: {},
};
