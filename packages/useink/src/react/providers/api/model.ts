import { ChainId } from '../../../chains/index';
import { ApiPromise, ScProvider, WsProvider } from '../../../core/index';

interface TrustedConnection {
  connection: 'trusted';
  provider: WsProvider;
}

interface LightClientConnection {
  connection: 'light-client';
  provider: ScProvider;
}

export type ConnectionType =
  | TrustedConnection['connection']
  | LightClientConnection['connection'];

export type ProviderConnection = TrustedConnection | LightClientConnection;

export type IApiProvider = {
  api: ApiPromise;
} & ProviderConnection;

export type IApiProviders = Partial<Record<ChainId, IApiProvider>>;

export interface API {
  apis?: IApiProviders;
}
