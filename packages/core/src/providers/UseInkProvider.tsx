import React from "react";
import { APIProvider } from "./api/provider.tsx";
import { BlockHeaderProvider } from "./blockHeader";
import { Config, ConfigProvider } from "./config";
import { ContractEventsProvider } from "./contractEvents";
import { ExtensionProvider } from "./extension";
import { NotificationsProvider } from "./notifications";

export type InkConfig = {
  config?: Config;
};

export const UseInkProvider: React.FC<React.PropsWithChildren<InkConfig>> = ({
  children,
  config,
}) => (
  <ConfigProvider config={config}>
    <ExtensionProvider>
      <APIProvider>
        <BlockHeaderProvider>
          <ContractEventsProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </ContractEventsProvider>
        </BlockHeaderProvider>
      </APIProvider>
    </ExtensionProvider>
  </ConfigProvider>
);
