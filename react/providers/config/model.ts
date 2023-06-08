import { Chain, ChainId, RococoContractsTestnet } from '../../../chains/mod.ts';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import { ArrayOneOrMore } from '../../../core/mod.ts';

export type ChainRPCs = Partial<Record<ChainId, string>>;

export type ConnectionType = 'trusted' | 'light-client';

export type CallerAddress = string;

export type ConfigProps = {
  api?: {
    default?: ConnectionType;
  } & Partial<Record<ChainId, ConnectionType>>;
  chains: ArrayOneOrMore<Chain>;
  dappName?: string;
  caller?: {
    default?: CallerAddress;
  } & Partial<Record<ChainId, CallerAddress>>;
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
