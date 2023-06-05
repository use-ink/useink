import { Chain, ChainId, RococoContractsTestnet } from '../../../chains/index';
import { ArrayOneOrMore } from '../../../core/index';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import { ConnectionType } from '../../providers/api/model.ts';

export type ChainRPCs = Partial<Record<ChainId, string>>;

export type CallerAddress = string;

export type ProviderConnectionConfig = Partial<
  Record<ChainId, ConnectionType>
> & { default?: ConnectionType };

export type DefaultCallerConfig = Partial<Record<ChainId, CallerAddress>> & {
  default?: CallerAddress;
};

export type ConfigProps = {
  dappName?: string;
  chains: ArrayOneOrMore<Chain>;
  api?: ProviderConnectionConfig;
  caller?: DefaultCallerConfig;
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
