import { FunctionComponent } from 'deps/preact.ts';
import { useEffect, useMemo, useState } from 'deps/preact/hooks.ts';
import { ApiPromise, WsProvider } from 'deps/polkadot.ts';
import { useConfig } from 'core/hooks/mod.ts';

import { APIContext } from './context.ts';

export const APIProvider: FunctionComponent = ({ children }) => {
  const { providerUrl } = useConfig();
  const provider = useMemo(() => new WsProvider(providerUrl), [providerUrl]);
  const [api, setApi] = useState<ApiPromise | undefined>();

  useEffect(() => {
    ApiPromise.create({ provider }).then((api) => {
      setApi(api);
    });
  }, [providerUrl, provider]);

  return <APIContext.Provider value={{ api, provider }} children={children} />;
};
