import { ChainId, RococoContractsTestnet } from '../../../chains/mod.ts';
import { Chain } from '../../../chains/mod.ts';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import { ArrayOneOrMore } from '../../types/array.ts';

export type ChainRPCs = Partial<Record<ChainId, string>>;

export type ConnectionType = 'trusted' | 'light-client';

interface ApiType extends Partial<Record<ChainId, ConnectionType>> {
  default?: ConnectionType;
}

export type ConfigProps = {
  api: ApiType;
  chains: ArrayOneOrMore<Chain>;
  dappName?: string;
  events?: {
    expiration?: number;
    checkInterval?: number;
  };
  wallet?: {
    skipAutoConnect?: boolean;
  };
};

export type SetChainRpc = (rpc: string, chain?: Chain) => void;

export type SetConnectionType = (type: ConnectionType, chain?: Chain | "all") => void;

export interface ChainConfig {
  chainRpcs: ChainRPCs;
  setChainRpc: SetChainRpc;
  setConnectionType: SetConnectionType;
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
  setConnectionType: () => null,  
  chainRpcs: {},
};
