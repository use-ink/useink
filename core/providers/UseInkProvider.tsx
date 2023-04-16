import React from 'react'
import { APIProvider } from './api/provider.tsx'
import { BlockHeaderProvider } from './blockHeader/mod.ts'
import { Config, ConfigProvider } from './config/mod.ts'
import { EventsProvider } from './events/mod.ts'
import { WalletProvider } from './wallet/mod.ts'
import { NotificationsProvider } from './notifications/mod.ts'

export type InkConfig = {
  config?: Config
}

export const UseInkProvider: React.FC<React.PropsWithChildren<InkConfig>> = ({
  children,
  config,
}) => (
  <ConfigProvider config={config}>
    <WalletProvider>
      <APIProvider>
        <BlockHeaderProvider>
          <EventsProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </EventsProvider>
        </BlockHeaderProvider>
      </APIProvider>
    </WalletProvider>
  </ConfigProvider>
)
