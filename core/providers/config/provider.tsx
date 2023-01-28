import { FunctionComponent } from 'deps/preact.ts';
import { Config, DEFAULT_CONFIG } from './model.ts';
import { ConfigContext } from './context.ts';

interface Props {
  config?: Config;
}

export const ConfigProvider: FunctionComponent<Props> = (
  { config, children },
) => {
  return (
    <ConfigContext.Provider
      value={config || DEFAULT_CONFIG}
      children={children}
    />
  );
};
