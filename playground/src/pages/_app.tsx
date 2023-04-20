import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import dynamic from 'next/dynamic';
import { InkConfig } from 'useink/core';
import { ContractsRococo, Rococo, Shibuya, Astar, Phala, AlephZero } from 'useink/chains';

const UseInkProvider: React.ComponentType<React.PropsWithChildren<InkConfig>> = dynamic(
  () => import('useink/core').then(({ UseInkProvider }) => UseInkProvider),
  { ssr: false },
);

function App({ Component, pageProps }: AppProps) {
  return (
    <UseInkProvider
      config={{
        dappName: 'useink Kitchen Sink',
        chains: [ContractsRococo, Rococo, Shibuya, Astar, Phala, AlephZero],
      }}
    >
      <Component {...pageProps} />
    </UseInkProvider>
  );
}

export default App;
