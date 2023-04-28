import { ContractsRococo, IChain } from 'useink/chains';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import { ArrayOneOrMore } from '../../types/array.ts';

export type Config = {
  dappName?: string;
  chains: ArrayOneOrMore<IChain>;
  notifications?: {
    expiration?: number;
    checkInterval?: number;
  };
  events?: {
    expiration?: number;
    checkInterval?: number;
  };
  wallet?: {
    skipAutoConnect?: boolean;
  };
};

export const DEFAULT_CONFIG: Config = {
  dappName: 'A dapp built with useInk!',
  chains: [ContractsRococo],
  notifications: {
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND,
  },
  events: {
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND,
  },
};
