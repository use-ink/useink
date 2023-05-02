export type Account = '*25519' | 'secp256k1' | 'Sr25519';

export type JsonString = string;

export interface Token {
  symbol: string;
  decimals: number;
  // existentialDeposit is the minimum amount an account must hold to stay alive.
  // Balances held below this amount will be removed from storage
  existentialDeposit: string;
  // onChainId is the ID for a token in the pallet
  onChainId: JsonString | number;
  coingeckoId?: string;
}

export interface TokenAsset {
  assetId: string | number;
  symbol: string;
  coingeckoId?: string;
}

export type RpcUrl = `ws://${string}` | `wss://${string}`;

export interface IChain<T> {
  id: T;
  name: string;
  account: Account;
  subscanUrl?: string;
  overrideNativeTokenId?: string;
  chainspecQrUrl?: string;
  latestMetadataQrUrl?: string;
  rpcs: readonly RpcUrl[];
  coingeckoId?: string | null;
  paraId?: number;
  relay?: {
    id: string;
  };
  balanceModuleConfigs?: {
    [k: string]: {
      disable?: boolean;
      tokens?: readonly (Token | TokenAsset)[];
    };
  };
}
