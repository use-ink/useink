import React from 'react'
import { APIProvider } from './api/provider.tsx'
import { BlockHeaderProvider } from './blockHeader'
import { Config, ConfigProvider } from './config'
import { EventsProvider } from './events'
import { WalletProvider } from './wallet'
import { NotificationsProvider } from './notifications'

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
