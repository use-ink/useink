import { ApiPromise, WsProvider } from 'deps/polkadot.ts';

export interface API {
  api?: ApiPromise;
  provider?: WsProvider;
}
