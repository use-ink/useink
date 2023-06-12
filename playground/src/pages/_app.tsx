import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import React from 'react';
import { InkConfig } from 'useink';
import {
  Aleph,
  Astar,
  Phala,
  RococoContractsTestnet,
  RococoTestnet,
  ShibuyaTestnet,
} from 'useink/chains';
import { NotificationsProvider } from 'useink/notifications';

const UseInkProvider: React.ComponentType<React.PropsWithChildren<InkConfig>> =
  dynamic(() => import('useink').then(({ UseInkProvider }) => UseInkProvider), {
    ssr: false,
  });

function App({ Component, pageProps }: AppProps) {
  return (
    <UseInkProvider
      config={{
        dappName: 'useink Kitchen Sink',
        chains: [
          RococoContractsTestnet,
          RococoTestnet,
          ShibuyaTestnet,
          Astar,
          Phala,
          Aleph,
        ],
        caller: {
          default: '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR',
        },
      }}
    >
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </UseInkProvider>
  );
}

export default App;
