import {
  DEFAULT_RPC_URL,
  FIVE_SECONDS,
  HALF_A_SECOND,
} from '../../constants.ts';

export type Config = {
  dappName: string;
  providerUrl: string;
  notifications?: {
    off: boolean;
    expiration?: number;
    checkInterval?: number;
  };
  contractEvents?: {
    expiration?: number;
    checkInterval?: number;
  };
  extension?: {
    skipAutoConnect?: boolean;
  };
};

export const DEFAULT_CONFIG: Config = {
  dappName: 'A dapp built with useInk!',
  providerUrl: DEFAULT_RPC_URL,
  notifications: {
    off: false,
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND,
  },
  contractEvents: {
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND,
  },
};
