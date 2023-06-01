import React from 'react'
import { APIProvider } from './api/provider.tsx'
import { BlockHeaderProvider } from './blockHeader/mod.ts'
import { ConfigProps, ConfigProvider } from './config/mod.ts'
import { EventsProvider } from './events/mod.ts'
import { WalletProvider } from './wallet/mod.ts'

export type InkConfig = {
  config: ConfigProps
}

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
)
