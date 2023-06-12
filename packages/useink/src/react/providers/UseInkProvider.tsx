import { APIProvider } from './api/provider.tsx';
import { BlockHeaderProvider } from './blockHeader/index';
import { ConfigProps, ConfigProvider } from './config/index';
import { EventsProvider } from './events/index';
import { WalletProvider } from './wallet/index';
import React from 'react';

export type InkConfig = {
  config: ConfigProps;
};

export const UseInkProvider: React.FC<React.PropsWithChildren<InkConfig>> = ({
  children,
  config,
}) => (
  <ConfigProvider config={config}>
    <WalletProvider>
      <APIProvider>
        <BlockHeaderProvider>
          <EventsProvider>{children}</EventsProvider>
        </BlockHeaderProvider>
      </APIProvider>
    </WalletProvider>
  </ConfigProvider>
);
