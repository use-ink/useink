import React from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { useConfig } from '../../hooks/mod.ts';
import { APIContext } from './context.ts';

export const APIProvider: React.FC<React.PropsWithChildren> = (
  { children },
) => {
  const { providerUrl } = useConfig();
  const provider = React.useMemo(() => new WsProvider(providerUrl), [
    providerUrl,
  ]);
  const [api, setApi] = React.useState<ApiPromise | undefined>();

  React.useEffect(() => {
    ApiPromise.create({ provider }).then((api) => {
      setApi(api);
    });
  }, [providerUrl, provider]);

  return <APIContext.Provider value={{ api, provider }} children={children} />;
};
