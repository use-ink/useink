import { FunctionComponent } from 'deps/preact.ts';
import { Config, ConfigProvider } from 'core/providers/config/mod.ts';

type InkConfig = {
  config?: Config;
};

export const UseInkProvider: FunctionComponent<InkConfig> = (
  { children, config },
) => {
  return (
    <ConfigProvider config={config}>
      {children}
    </ConfigProvider>
  );
};
