import { ApiPromise, WsProvider } from "@polkadot/api";
import { ChainId } from "useink/chains";

export interface IApiProvider {
  api: ApiPromise;
  provider: WsProvider;
}

export type IApiProviders = Partial<Record<ChainId, IApiProvider>>;

export interface API {
  apis?: IApiProviders;
}
