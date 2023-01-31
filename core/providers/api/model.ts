import { ApiPromise, WsProvider } from '@polkadot/api';

export interface API {
  api?: ApiPromise;
  provider?: WsProvider;
}
