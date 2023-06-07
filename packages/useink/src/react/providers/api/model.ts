import { ChainId } from '../../../chains/index';
import { ApiPromise, WsProvider } from '../../../core/index';

export interface IApiProvider {
  api: ApiPromise;
  provider: WsProvider;
}

export type IApiProviders = Partial<Record<ChainId, IApiProvider>>;

export interface API {
  apis?: IApiProviders;
}
