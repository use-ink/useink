import { DEFAULT_RPC_URL } from 'util/constants.ts';

export type Config = {
  providerUrl: string;
};

export const DEFAULT_CONFIG: Config = {
  providerUrl: DEFAULT_RPC_URL,
};
