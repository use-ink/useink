import React from 'react'
import { APIProvider } from './api/provider.tsx'
import { BlockHeaderProvider } from './blockHeader/mod.ts'
import { Config, ConfigProvider } from './config/mod.ts'
import { ContractEventsProvider } from './contractEvents/mod.ts'
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
          <ContractEventsProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </ContractEventsProvider>
        </BlockHeaderProvider>
      </APIProvider>
    </WalletProvider>
  </ConfigProvider>
)
