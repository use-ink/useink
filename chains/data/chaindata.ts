import { IChain } from './types.ts';

export const Acala: IChain<'acala'> = {
  id: 'acala',
  name: 'Acala',
  account: '*25519',
  subscanUrl: 'https://acala.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/acala_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/acala_metadata_latest.apng',
  rpcs: [
    'wss://acala-rpc-0.aca-api.network',
    'wss://acala-rpc-1.aca-api.network',
    'wss://acala-rpc-3.aca-api.network/ws',
    'wss://acala.polkawallet.io',
    'wss://acala-polkadot.api.onfinality.io/public-ws',
    'wss://acala-rpc.dwellir.com',
  ],
  paraId: 2000,
  relay: { id: 'polkadot' },
  balanceModuleConfigs: {
    'substrate-orml': { disable: true },
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'aUSD',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"Token":"AUSD"}',
          coingeckoId: 'acala-dollar',
        },
        {
          symbol: 'TAP',
          decimals: 12,
          existentialDeposit: '1000000000000',
          onChainId: '{"Token":"TAP"}',
          coingeckoId: 'tapio-protocol',
        },
        {
          symbol: 'lcDOT',
          decimals: 10,
          existentialDeposit: '100000000',
          onChainId: '{"LiquidCrowdloan":13}',
          coingeckoId: 'liquid-crowdloan-dot',
        },
        {
          symbol: 'LDOT',
          decimals: 10,
          existentialDeposit: '500000000',
          onChainId: '{"Token":"LDOT"}',
          coingeckoId: 'liquid-staking-dot',
        },
        {
          symbol: 'DOT',
          decimals: 10,
          existentialDeposit: '100000000',
          onChainId: '{"Token":"DOT"}',
          coingeckoId: 'polkadot',
        },
        {
          symbol: 'EQD',
          decimals: 9,
          existentialDeposit: '1000000000',
          onChainId: '{"ForeignAsset":8}',
        },
        {
          symbol: 'INTR',
          decimals: 10,
          existentialDeposit: '1000000000',
          onChainId: '{"ForeignAsset":4}',
          coingeckoId: 'interlay',
        },
        {
          symbol: 'WETH',
          decimals: 18,
          existentialDeposit: '500000000000000',
          onChainId: '{"ForeignAsset":6}',
        },
        {
          symbol: 'ASTR',
          decimals: 18,
          existentialDeposit: '100000000000000000',
          onChainId: '{"ForeignAsset":2}',
          coingeckoId: 'astar',
        },
        {
          symbol: 'PHA',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"ForeignAsset":9}',
          coingeckoId: 'pha',
        },
        {
          symbol: 'PARA',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"ForeignAsset":1}',
        },
        {
          symbol: 'GLMR',
          decimals: 18,
          existentialDeposit: '100000000000000000',
          onChainId: '{"ForeignAsset":0}',
          coingeckoId: 'moonbeam',
        },
        {
          symbol: 'WBTC',
          decimals: 8,
          existentialDeposit: '3000',
          onChainId: '{"ForeignAsset":5}',
        },
        {
          symbol: 'EQ',
          decimals: 9,
          existentialDeposit: '1000000000',
          onChainId: '{"ForeignAsset":7}',
          coingeckoId: 'equilibrium-token',
        },
        {
          symbol: 'IBTC',
          decimals: 8,
          existentialDeposit: '100',
          onChainId: '{"ForeignAsset":3}',
          coingeckoId: 'interbtc',
        },
        {
          symbol: 'tDOT',
          decimals: 10,
          existentialDeposit: '100000000',
          onChainId: '{"StableAssetPoolToken":0}',
        },
        {
          symbol: 'USDCet',
          decimals: 6,
          existentialDeposit: '10000',
          onChainId: '{"Erc20":"0x07df96d1341a7d16ba1ad431e2c847d978bc2bce"}',
        },
        {
          symbol: 'APE',
          decimals: 18,
          existentialDeposit: '3000000000000000',
          onChainId: '{"Erc20":"0xf4c723e61709d90f89939c1852f516e373d418a8"}',
        },
        {
          symbol: 'DAI',
          decimals: 18,
          existentialDeposit: '10000000000000000',
          onChainId: '{"Erc20":"0x54a37a01cd75b616d63e0ab665bffdb0143c52ae"}',
          coingeckoId: 'dai',
        },
        {
          symbol: 'WETH',
          decimals: 18,
          existentialDeposit: '8500000000000',
          onChainId: '{"Erc20":"0x5a4d6acdc4e3e5ab15717f407afe957f7a242578"}',
        },
        {
          symbol: 'WBTC',
          decimals: 8,
          existentialDeposit: '60',
          onChainId: '{"Erc20":"0xc80084af223c8b598536178d9361dc55bfda6818"}',
        },
        {
          symbol: 'lp AUSD-LDOT',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"AUSD"},{"Token":"LDOT"}]}',
        },
        {
          symbol: 'lp AUSD-IBTC',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"AUSD"},{"ForeignAsset":3}]}',
        },
        {
          symbol: 'lp AUSD-lcDOT',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"AUSD"},{"LiquidCrowdloan":13}]}',
        },
        {
          symbol: 'lp ACA-AUSD',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"ACA"},{"Token":"AUSD"}]}',
        },
        {
          symbol: 'lp DOT-lcDOT',
          decimals: 10,
          existentialDeposit: '100000000',
          onChainId: '{"DexShare":[{"Token":"DOT"},{"LiquidCrowdloan":13}]}',
        },
        {
          symbol: 'lp AUSD-INTR',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"AUSD"},{"ForeignAsset":4}]}',
        },
      ],
    },
  },
} as const;

export const Ajuna: IChain<'ajuna'> = {
  id: 'ajuna',
  name: 'Ajuna',
  account: '*25519',
  rpcs: [
    'wss://rpc-parachain.ajuna.network',
    'wss://ajuna.public.curie.radiumblock.co/ws',
  ],
  paraId: 2051,
  relay: { id: 'polkadot' },
} as const;

export const Aleph: IChain<'aleph'> = {
  id: 'aleph',
  name: 'Aleph Zero',
  coingeckoId: 'aleph-zero',
  account: '*25519',
  subscanUrl: 'https://alephzero.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/aleph-node_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/aleph-node_metadata_latest.apng',
  rpcs: ['wss://ws.azero.dev'],
} as const;

export const Altair: IChain<'altair'> = {
  id: 'altair',
  name: 'Altair',
  account: '*25519',
  subscanUrl: 'https://altair.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/altair_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/altair_metadata_latest.apng',
  rpcs: [
    'wss://fullnode.altair.centrifuge.io',
    'wss://altair.api.onfinality.io/public-ws',
    'wss://altair-rpc.dwellir.com',
  ],
  paraId: 2088,
  relay: { id: 'kusama' },
} as const;

export const Amplitude: IChain<'amplitude'> = {
  id: 'amplitude',
  name: 'Amplitude',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/amplitude_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/amplitude_metadata_latest.apng',
  rpcs: [
    'wss://rpc-amplitude.pendulumchain.tech',
    'wss://amplitude-rpc.dwellir.com',
  ],
  paraId: 2124,
  relay: { id: 'kusama' },
} as const;

export const AresOdyssey: IChain<'ares-odyssey'> = {
  id: 'ares-odyssey',
  name: 'Ares Odyssey Standalone',
  account: '*25519',
  rpcs: ['wss://odyssey.aresprotocol.io'],
} as const;

export const Astar: IChain<'astar'> = {
  id: 'astar',
  name: 'Astar',
  account: '*25519',
  subscanUrl: 'https://astar.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/astar_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/astar_metadata_latest.apng',
  rpcs: [
    'wss://rpc.astar.network',
    'wss://astar.public.blastapi.io',
    'wss://astar-rpc.dwellir.com',
    'wss://astar.api.onfinality.io/public-ws',
    'wss://astar.public.curie.radiumblock.co/ws',
    'wss://public-rpc.pinknode.io/astar',
    'wss://1rpc.io/astr',
  ],
  paraId: 2006,
  relay: { id: 'polkadot' },
  balanceModuleConfigs: {
    'substrate-assets': {
      tokens: [
        { assetId: '4294969280', symbol: 'USDT', coingeckoId: 'tether' },
        {
          assetId: '18446744073709551616',
          symbol: 'ACA',
          coingeckoId: 'acala',
        },
        {
          assetId: '18446744073709551617',
          symbol: 'AUSD',
          coingeckoId: 'acala-dollar',
        },
        {
          assetId: '18446744073709551618',
          symbol: 'LDOT',
          coingeckoId: 'liquid-staking-dot',
        },
        {
          assetId: '18446744073709551619',
          symbol: 'GLMR',
          coingeckoId: 'moonbeam',
        },
        {
          assetId: '18446744073709551620',
          symbol: 'IBTC',
          coingeckoId: 'interbtc',
        },
        {
          assetId: '18446744073709551621',
          symbol: 'INTR',
          coingeckoId: 'interlay',
        },
        { assetId: '18446744073709551622', symbol: 'PHA', coingeckoId: 'pha' },
        {
          assetId: '18446744073709551623',
          symbol: 'BNC',
          coingeckoId: 'bifrost-native-coin',
        },
        { assetId: '18446744073709551624', symbol: 'VDOT' },
        { assetId: '18446744073709551625', symbol: 'CLV' },
        { assetId: '18446744073709551626', symbol: 'VSDOT' },
        {
          assetId: '18446744073709551627',
          symbol: 'RING',
          coingeckoId: 'darwinia-network-native-token',
        },
        {
          assetId: '18446744073709551628',
          symbol: 'EQ',
          coingeckoId: 'equilibrium-token',
        },
        { assetId: '18446744073709551629', symbol: 'EQD' },
        {
          assetId: '340282366920938463463374607431768211455',
          symbol: 'DOT',
          coingeckoId: 'polkadot',
        },
      ],
    },
  },
} as const;

export const Automata: IChain<'automata'> = {
  id: 'automata',
  name: 'Automata',
  account: '*25519',
  rpcs: ['wss://api.ata.network', 'wss://automata.api.onfinality.io/public-ws'],
} as const;

export const Aventus: IChain<'aventus'> = {
  id: 'aventus',
  name: 'Aventus',
  account: '*25519',
  rpcs: [],
  paraId: 2056,
  relay: { id: 'polkadot' },
} as const;

export const Bajun: IChain<'bajun'> = {
  id: 'bajun',
  name: 'Bajun',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/bajun_specs.png',
  rpcs: [
    'wss://rpc-parachain.bajun.network',
    'wss://bajun-rpc.dwellir.com',
    'wss://bajun.api.onfinality.io/public-ws',
  ],
  paraId: 2119,
  relay: { id: 'kusama' },
} as const;

export const Basilisk: IChain<'basilisk'> = {
  id: 'basilisk',
  name: 'Basilisk',
  account: '*25519',
  subscanUrl: 'https://basilisk.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/basilisk_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/basilisk_metadata_latest.apng',
  rpcs: ['wss://rpc.basilisk.cloud', 'wss://basilisk-rpc.dwellir.com'],
  paraId: 2090,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'KSM',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: 1,
          coingeckoId: 'kusama',
        },
        {
          symbol: 'aUSD',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: 2,
          coingeckoId: 'acala-dollar',
        },
        {
          symbol: 'TNKR',
          decimals: 12,
          existentialDeposit: '1000000000',
          onChainId: 6,
        },
        {
          symbol: 'USDCet',
          decimals: 6,
          existentialDeposit: '10000',
          onChainId: 9,
          coingeckoId: 'usd-coin-wormhole-from-ethereum',
        },
        {
          symbol: 'wETH',
          decimals: 18,
          existentialDeposit: '10000000',
          onChainId: 10,
          coingeckoId: 'ethereum',
        },
        {
          symbol: 'wBTC',
          decimals: 8,
          existentialDeposit: '1000000',
          onChainId: 11,
          coingeckoId: 'bitcoin',
        },
        {
          symbol: 'wUSDT',
          decimals: 6,
          existentialDeposit: '10000000000',
          onChainId: 12,
          coingeckoId: 'tether',
        },
        {
          symbol: 'DAI',
          decimals: 18,
          existentialDeposit: '10000000000',
          onChainId: 13,
          coingeckoId: 'dai',
        },
        {
          symbol: 'USDT',
          decimals: 6,
          existentialDeposit: '10000',
          onChainId: 14,
          coingeckoId: 'tether',
        },
      ],
    },
  },
} as const;

export const BifrostKusama: IChain<'bifrost-kusama'> = {
  id: 'bifrost-kusama',
  name: 'Bifrost Kusama',
  account: '*25519',
  subscanUrl: 'https://bifrost-kusama.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/bifrost_specs.png',
  rpcs: [
    'wss://bifrost-rpc.liebi.com/ws',
    'wss://bifrost-parachain.api.onfinality.io/public-ws',
    'wss://bifrost-rpc.dwellir.com',
  ],
  paraId: 2001,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'aUSD',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"Stable":"KUSD"}',
          coingeckoId: 'acala-dollar',
        },
        {
          symbol: 'USDT',
          decimals: 6,
          existentialDeposit: '10000',
          onChainId: '{"Token2":0}',
          coingeckoId: 'tether',
        },
        {
          symbol: 'vBNC',
          decimals: 12,
          existentialDeposit: '8000000000',
          onChainId: '{"VToken":"BNC"}',
        },
        {
          symbol: 'vKSM',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"VToken":"KSM"}',
        },
        {
          symbol: 'vsKSM',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"VSToken":"KSM"}',
        },
      ],
    },
  },
} as const;

export const BifrostPolkadot: IChain<'bifrost-polkadot'> = {
  id: 'bifrost-polkadot',
  name: 'Bifrost Polkadot',
  account: '*25519',
  subscanUrl: 'https://bifrost.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/bifrost_polkadot_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/bifrost_polkadot_metadata_latest.apng',
  rpcs: [
    'wss://hk.p.bifrost-rpc.liebi.com/ws',
    'wss://bifrost-polkadot.api.onfinality.io/public-ws',
  ],
  paraId: 2030,
  relay: { id: 'polkadot' },
  balanceModuleConfigs: {
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'DOT',
          decimals: 10,
          existentialDeposit: '1000000',
          onChainId: '{"Token2":0}',
          coingeckoId: 'polkadot',
        },
        {
          symbol: 'GLMR',
          decimals: 18,
          existentialDeposit: '1000000000000',
          onChainId: '{"Token2":1}',
          coingeckoId: 'moonbeam',
        },
        {
          symbol: 'vDOT',
          decimals: 10,
          existentialDeposit: '100000000',
          onChainId: '{"VToken":"DOT"}',
        },
        {
          symbol: 'vsDOT',
          decimals: 10,
          existentialDeposit: '100000000',
          onChainId: '{"VSToken":"DOT"}',
        },
      ],
    },
  },
} as const;

export const BitcountryPioneer: IChain<'bitcountry-pioneer'> = {
  id: 'bitcountry-pioneer',
  name: 'Bit.Country Pioneer',
  account: '*25519',
  subscanUrl: 'https://pioneer.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/pioneer-runtime_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/pioneer-runtime_metadata_latest.apng',
  rpcs: ['wss://pioneer.api.onfinality.io/public-ws'],
  paraId: 2096,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'KSM',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: '{"NativeToken":1}',
          coingeckoId: 'kusama',
        },
        {
          symbol: 'KAR',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: '{"NativeToken":2}',
          coingeckoId: 'karura',
        },
        {
          symbol: 'aUSD',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: '{"Stable":0}',
          coingeckoId: 'acala-dollar',
        },
        {
          symbol: 'BIT',
          decimals: 18,
          existentialDeposit: '0',
          onChainId: '{"MiningResource":0}',
          coingeckoId: 'bit',
        },
      ],
    },
  },
} as const;

export const Bitgreen: IChain<'bitgreen'> = {
  id: 'bitgreen',
  name: 'Bitgreen',
  account: '*25519',
  rpcs: ['wss://mainnet.bitgreen.org'],
  paraId: 2048,
  relay: { id: 'polkadot' },
} as const;

export const Bittensor: IChain<'bittensor'> = {
  id: 'bittensor',
  name: 'Bittensor',
  account: '*25519',
  rpcs: ['wss://entrypoint-finney.opentensor.ai'],
} as const;

export const Calamari: IChain<'calamari'> = {
  id: 'calamari',
  name: 'Calamari',
  account: '*25519',
  subscanUrl: 'https://calamari.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/calamari_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/calamari_metadata_latest.apng',
  rpcs: ['wss://ws.calamari.systems/'],
  paraId: 2084,
  relay: { id: 'kusama' },
} as const;

export const CentrifugePolkadot: IChain<'centrifuge-polkadot'> = {
  id: 'centrifuge-polkadot',
  name: 'Centrifuge',
  account: '*25519',
  subscanUrl: 'https://centrifuge.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/centrifuge_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/centrifuge_metadata_latest.apng',
  rpcs: [
    'wss://fullnode.parachain.centrifuge.io',
    'wss://centrifuge-parachain.api.onfinality.io/public-ws',
    'wss://centrifuge-rpc.dwellir.com',
  ],
  paraId: 2031,
  relay: { id: 'polkadot' },
} as const;

export const Chainx: IChain<'chainx'> = {
  id: 'chainx',
  name: 'ChainX',
  account: '*25519',
  subscanUrl: 'https://chainx.subscan.io/',
  rpcs: ['wss://mainnet.chainx.org/ws'],
} as const;

export const Clover: IChain<'clover'> = {
  id: 'clover',
  name: 'Clover',
  account: '*25519',
  subscanUrl: 'https://clover.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/clover-mainnet_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/clover-mainnet_metadata_latest.apng',
  rpcs: ['wss://rpc-para.clover.finance'],
  paraId: 2002,
  relay: { id: 'polkadot' },
} as const;

export const Coinversation: IChain<'coinversation'> = {
  id: 'coinversation',
  name: 'Coinversation',
  account: '*25519',
  rpcs: [],
  paraId: 2027,
  relay: { id: 'polkadot' },
} as const;

export const CompetitorsClub: IChain<'competitors-club'> = {
  id: 'competitors-club',
  name: 'Competitors Club',
  account: '*25519',
  rpcs: [],
} as const;

export const ComposableFinance: IChain<'composable-finance'> = {
  id: 'composable-finance',
  name: 'Composable Finance',
  account: '*25519',
  subscanUrl: 'https://composable.subscan.io/',
  rpcs: ['wss://rpc.composable.finance'],
  paraId: 2019,
  relay: { id: 'polkadot' },
  balanceModuleConfigs: {
    'substrate-orml': { disable: true },
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'DOT',
          decimals: 10,
          existentialDeposit: '0',
          onChainId: 6,
          coingeckoId: 'polkadot',
        },
        {
          symbol: 'KSM',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 4,
          coingeckoId: 'kusama',
        },
        {
          symbol: 'KAR',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 101,
          coingeckoId: 'karura',
        },
        {
          symbol: 'BNC',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 102,
          coingeckoId: 'bifrost-native-coin',
        },
        {
          symbol: 'vKSM',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 103,
        },
        {
          symbol: 'MOVR',
          decimals: 18,
          existentialDeposit: '0',
          onChainId: 104,
          coingeckoId: 'moonriver',
        },
        {
          symbol: 'aUSD',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 129,
          coingeckoId: 'acala-dollar',
        },
        {
          symbol: 'USDT',
          decimals: 6,
          existentialDeposit: '0',
          onChainId: 130,
          coingeckoId: 'tether',
        },
        {
          symbol: 'USDC',
          decimals: 6,
          existentialDeposit: '0',
          onChainId: 131,
          coingeckoId: 'usd-coin',
        },
        {
          symbol: 'wBTC',
          decimals: 8,
          existentialDeposit: '0',
          onChainId: 132,
          coingeckoId: 'bitcoin',
        },
        {
          symbol: 'wETH',
          decimals: 18,
          existentialDeposit: '0',
          onChainId: 133,
          coingeckoId: 'ethereum',
        },
      ],
    },
  },
} as const;

export const CrabKusama: IChain<'crab-kusama'> = {
  id: 'crab-kusama',
  name: 'Darwinia Crab',
  account: '*25519',
  subscanUrl: 'https://crab-parachain.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/crab%20parachain_specs.png',
  rpcs: ['wss://crab-parachain-rpc.darwinia.network/'],
  paraId: 2105,
  relay: { id: 'kusama' },
} as const;

export const CrabStandalone: IChain<'crab-standalone'> = {
  id: 'crab-standalone',
  name: 'Darwinia Crab Standalone',
  account: '*25519',
  subscanUrl: 'https://crab.subscan.io/',
  rpcs: [
    'wss://crab-rpc.darwinia.network',
    'wss://darwiniacrab-rpc.dwellir.com',
    'wss://crab.api.onfinality.io/public-ws',
  ],
} as const;

export const Creditcoin: IChain<'creditcoin'> = {
  id: 'creditcoin',
  name: 'Creditcoin',
  account: '*25519',
  rpcs: ['wss://rpc.mainnet.creditcoin.network/ws'],
} as const;

export const CrownSterling: IChain<'crown-sterling'> = {
  id: 'crown-sterling',
  name: 'Crown Sterling',
  account: '*25519',
  rpcs: ['wss://blockchain.crownsterling.io'],
} as const;

export const Crust: IChain<'crust'> = {
  id: 'crust',
  name: 'Crust Standalone',
  account: '*25519',
  subscanUrl: 'https://crust.subscan.io/',
  rpcs: [
    'wss://rpc.crust.network',
    'wss://crust.api.onfinality.io/public-ws',
    'wss://rpc-crust-mainnet.decoo.io',
  ],
} as const;

export const CrustParachain: IChain<'crust-parachain'> = {
  id: 'crust-parachain',
  name: 'Crust',
  account: '*25519',
  rpcs: ['wss://crust-parachain.crustapps.net'],
  paraId: 2008,
  relay: { id: 'polkadot' },
} as const;

export const Custom: IChain<'custom'> = {
  id: 'custom',
  name: 'Custom',
  account: '*25519',
  rpcs: [],
} as const;

export const DarwiniaPolkadot: IChain<'darwinia-polkadot'> = {
  id: 'darwinia-polkadot',
  name: 'Darwinia',
  account: '*25519',
  subscanUrl: 'https://darwinia.subscan.io/',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/darwinia%20parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/darwinia%20parachain_metadata_latest.apng',
  rpcs: ['wss://parachain-rpc.darwinia.network'],
  paraId: 2046,
  relay: { id: 'polkadot' },
} as const;

export const DarwiniaPolkadot2: IChain<'darwinia-polkadot-2'> = {
  id: 'darwinia-polkadot-2',
  name: 'Darwinia Backup',
  account: '*25519',
  rpcs: [],
  paraId: 2003,
  relay: { id: 'polkadot' },
} as const;

export const DarwiniaStandalone: IChain<'darwinia-standalone'> = {
  id: 'darwinia-standalone',
  name: 'Darwinia Standalone',
  account: '*25519',
  rpcs: ['wss://rpc.darwinia.network', 'wss://darwinia-rpc.dwellir.com'],
} as const;

export const Debio: IChain<'debio'> = {
  id: 'debio',
  name: 'DeBio',
  account: '*25519',
  rpcs: ['wss://ws-rpc.debio.network'],
} as const;

export const DockPosMainnet: IChain<'dock-pos-mainnet'> = {
  id: 'dock-pos-mainnet',
  name: 'Dock',
  account: '*25519',
  subscanUrl: 'https://dock.subscan.io/',
  rpcs: ['wss://mainnet-node.dock.io'],
} as const;

export const Dorafactory: IChain<'dorafactory'> = {
  id: 'dorafactory',
  name: 'Dora Factory',
  account: '*25519',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/dora%20ksm%20parachain_metadata_latest.apng',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/dora%20ksm%20parachain_metadata_latest.apng',
  rpcs: ['wss://kusama.dorafactory.org'],
  paraId: 2115,
  relay: { id: 'kusama' },
} as const;

export const Edgeware: IChain<'edgeware'> = {
  id: 'edgeware',
  name: 'Edgeware',
  account: '*25519',
  subscanUrl: 'https://edgeware.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/edgeware_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/edgeware_metadata_latest.apng',
  rpcs: [
    'wss://edgeware.api.onfinality.io/public-ws',
    'wss://mainnet2.edgewa.re',
    'wss://edgeware.jelliedowl.net',
    'wss://mainnet3.edgewa.re',
    'wss://mainnet4.edgewa.re',
    'wss://mainnet5.edgewa.re',
    'wss://edgeware-rpc.dwellir.com',
  ],
} as const;

export const EfinityPolkadot: IChain<'efinity-polkadot'> = {
  id: 'efinity-polkadot',
  name: 'Efinity',
  account: 'Sr25519',
  subscanUrl: 'https://efinity.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/efinity_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/efinity_metadata_latest.apng',
  rpcs: [
    'wss://rpc.efinity.io',
    'wss://efinity-rpc.dwellir.com',
    'wss://efinity.api.onfinality.io/public-ws',
  ],
  paraId: 2021,
  relay: { id: 'polkadot' },
} as const;

export const EfinityStandalone: IChain<'efinity-standalone'> = {
  id: 'efinity-standalone',
  name: 'Efinity Standalone',
  account: '*25519',
  rpcs: [],
} as const;

export const Encointer: IChain<'encointer'> = {
  id: 'encointer',
  name: 'Encointer',
  account: '*25519',
  subscanUrl: 'https://encointer.subscan.io/',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/encointer-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/encointer-parachain_metadata_latest.apng',
  rpcs: [
    'wss://kusama.api.encointer.org',
    'wss://encointer.api.onfinality.io/public-ws',
  ],
  paraId: 1001,
  relay: { id: 'kusama' },
} as const;

export const EquilibriumPolkadot: IChain<'equilibrium-polkadot'> = {
  id: 'equilibrium-polkadot',
  name: 'Equilibrium',
  account: '*25519',
  subscanUrl: 'https://equilibrium.subscan.io/',
  overrideNativeTokenId: 'equilibrium-polkadot-substrate-equilibrium-eq',
  rpcs: ['wss://node.pol.equilibrium.io/', 'wss://equilibrium-rpc.dwellir.com'],
  paraId: 2011,
  relay: { id: 'polkadot' },
  balanceModuleConfigs: {
    'substrate-native': { disable: true },
    'substrate-equilibrium': { disable: false },
  },
} as const;

export const Frequency: IChain<'frequency'> = {
  id: 'frequency',
  name: 'Frequency',
  account: '*25519',
  rpcs: ['wss://0.rpc.frequency.xyz', 'wss://1.rpc.frequency.xyz'],
  paraId: 2091,
  relay: { id: 'polkadot' },
} as const;

export const Geminis: IChain<'geminis'> = {
  id: 'geminis',
  name: 'Geminis',
  account: '*25519',
  rpcs: ['wss://rpc.geminis.network'],
  paraId: 2038,
  relay: { id: 'polkadot' },
} as const;

export const GenshiroKusama: IChain<'genshiro-kusama'> = {
  id: 'genshiro-kusama',
  name: 'Genshiro',
  account: '*25519',
  rpcs: ['wss://node.genshiro.io'],
  paraId: 2024,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-native': { disable: true },
    'substrate-equilibrium': { disable: false },
  },
} as const;

export const Gm: IChain<'gm'> = {
  id: 'gm',
  name: 'GM',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/gm_parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/gm_parachain_metadata_latest.apng',
  rpcs: [
    'wss://kusama.gmordie.com',
    'wss://ws.gm.bldnodes.org',
    'wss://ws-node-gm.terrabiodao.org',
    'wss://leemo.gmordie.com',
    'wss://intern.gmordie.com',
  ],
  paraId: 2123,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-tokens': {
      tokens: [
        { symbol: 'GM', decimals: 0, existentialDeposit: '0', onChainId: 1 },
        { symbol: 'GN', decimals: 0, existentialDeposit: '0', onChainId: 2 },
      ],
    },
  },
} as const;

export const Hanonycash: IChain<'hanonycash'> = {
  id: 'hanonycash',
  name: 'Hanonycash',
  account: '*25519',
  rpcs: [],
} as const;

export const Hashed: IChain<'hashed'> = {
  id: 'hashed',
  name: 'Hashed',
  account: '*25519',
  rpcs: ['wss://c1.hashed.network'],
  paraId: 2093,
  relay: { id: 'polkadot' },
} as const;

export const HeikoKusama: IChain<'heiko-kusama'> = {
  id: 'heiko-kusama',
  name: 'Parallel Heiko',
  account: '*25519',
  subscanUrl: 'https://parallel-heiko.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/heiko_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/heiko_metadata_latest.apng',
  rpcs: [
    'wss://parallel-heiko.api.onfinality.io/public-ws',
    'wss://heiko-rpc.parallel.fi',
  ],
  paraId: 2085,
  relay: { id: 'kusama' },
} as const;

export const Hydra: IChain<'hydra'> = {
  id: 'hydra',
  name: 'HydraDX',
  account: '*25519',
  subscanUrl: 'https://hydradx.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/hydradx_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/hydradx_metadata_latest.apng',
  rpcs: [
    'wss://rpc.hydradx.cloud',
    'wss://hydradx.api.onfinality.io/public-ws',
    'wss://hydradx-rpc.dwellir.com',
  ],
  paraId: 2034,
  relay: { id: 'polkadot' },
  balanceModuleConfigs: {
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'LRNA',
          decimals: 12,
          existentialDeposit: '400000000',
          onChainId: 1,
        },
        {
          symbol: 'DAI',
          decimals: 18,
          existentialDeposit: '10000000000000000',
          onChainId: 2,
          coingeckoId: 'dai',
        },
        {
          symbol: 'WBTC',
          decimals: 8,
          existentialDeposit: '44',
          onChainId: 3,
          coingeckoId: 'bitcoin',
        },
        {
          symbol: 'WETH',
          decimals: 18,
          existentialDeposit: '7000000000000',
          onChainId: 4,
          coingeckoId: 'ethereum',
        },
        {
          symbol: 'DOT',
          decimals: 10,
          existentialDeposit: '17540000',
          onChainId: 5,
          coingeckoId: 'polkadot',
        },
        {
          symbol: 'APE',
          decimals: 18,
          existentialDeposit: '2518891687657430',
          onChainId: 6,
          coingeckoId: 'apecoin',
        },
        {
          symbol: 'USDC',
          decimals: 6,
          existentialDeposit: '10000',
          onChainId: 7,
          coingeckoId: 'usd-coin',
        },
      ],
    },
  },
} as const;

export const Imbue: IChain<'imbue'> = {
  id: 'imbue',
  name: 'Imbue',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/imbue_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/imbue_metadata_latest.apng',
  rpcs: ['wss://imbue-kusama.imbue.network'],
  paraId: 2121,
  relay: { id: 'kusama' },
} as const;

export const IntegriteeKusama: IChain<'integritee-kusama'> = {
  id: 'integritee-kusama',
  name: 'Integritee',
  account: '*25519',
  subscanUrl: 'https://integritee.subscan.io/',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/integritee-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/integritee-parachain_metadata_latest.apng',
  rpcs: [
    'wss://kusama.api.integritee.network',
    'wss://integritee-kusama.api.onfinality.io/public-ws',
    'wss://integritee-ksm-rpc.dwellir.com',
  ],
  paraId: 2015,
  relay: { id: 'kusama' },
} as const;

export const IntegriteePolkadot: IChain<'integritee-polkadot'> = {
  id: 'integritee-polkadot',
  name: 'Integritee Shell',
  account: '*25519',
  rpcs: ['wss://polkadot.api.integritee.network'],
  paraId: 2039,
  relay: { id: 'polkadot' },
} as const;

export const Interlay: IChain<'interlay'> = {
  id: 'interlay',
  name: 'Interlay',
  account: '*25519',
  subscanUrl: 'https://interlay.subscan.io/',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/interlay-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/interlay-parachain_metadata_latest.apng',
  overrideNativeTokenId: 'interlay-substrate-orml-intr',
  rpcs: [
    'wss://api.interlay.io/parachain',
    'wss://interlay.api.onfinality.io/public-ws',
  ],
  paraId: 2032,
  relay: { id: 'polkadot' },
} as const;

export const Ipci: IChain<'ipci'> = {
  id: 'ipci',
  name: 'DAO IPCI',
  account: '*25519',
  rpcs: ['wss://kusama.rpc.ipci.io'],
  chainspecQrUrl: 'https://metadata.novasama.io/qr/ipci_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/ipci_metadata_latest.apng',
  paraId: 2222,
  relay: { id: 'kusama' },
} as const;

export const Joystream: IChain<'joystream'> = {
  id: 'joystream',
  name: 'Joystream',
  account: '*25519',
  rpcs: ['wss://rpc.joystream.org'],
} as const;

export const Kabocha: IChain<'kabocha'> = {
  id: 'kabocha',
  name: 'Kabocha',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/kabocha-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/kabocha-parachain_metadata_latest.apng',
  rpcs: ['wss://kabocha.jelliedowl.net'],
  paraId: 2113,
  relay: { id: 'kusama' },
} as const;

export const Kapex: IChain<'kapex'> = {
  id: 'kapex',
  name: 'Kapex',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/totem-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/totem-parachain_metadata_latest.apng',
  rpcs: ['wss://k-ui.kapex.network'],
  paraId: 2007,
  relay: { id: 'polkadot' },
} as const;

export const Karura: IChain<'karura'> = {
  id: 'karura',
  name: 'Karura',
  account: '*25519',
  subscanUrl: 'https://karura.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/karura_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/karura_metadata_latest.apng',
  rpcs: [
    'wss://karura-rpc-0.aca-api.network',
    'wss://karura-rpc-1.aca-api.network',
    'wss://karura-rpc-2.aca-api.network/ws',
    'wss://karura-rpc-3.aca-api.network/ws',
    'wss://karura.polkawallet.io',
    'wss://karura.api.onfinality.io/public-ws',
    'wss://karura-rpc.dwellir.com',
  ],
  paraId: 2000,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-orml': { disable: true },
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'LKSM',
          decimals: 12,
          existentialDeposit: '500000000',
          onChainId: '{"Token":"LKSM"}',
          coingeckoId: 'liquid-ksm',
        },
        {
          symbol: 'BNC',
          decimals: 12,
          existentialDeposit: '8000000000',
          onChainId: '{"Token":"BNC"}',
          coingeckoId: 'bifrost-native-coin',
        },
        {
          symbol: 'TAI',
          decimals: 12,
          existentialDeposit: '1000000000000',
          onChainId: '{"Token":"TAI"}',
          coingeckoId: 'taiga',
        },
        {
          symbol: 'PHA',
          decimals: 12,
          existentialDeposit: '40000000000',
          onChainId: '{"Token":"PHA"}',
          coingeckoId: 'pha',
        },
        {
          symbol: 'KINT',
          decimals: 12,
          existentialDeposit: '133330000',
          onChainId: '{"Token":"KINT"}',
          coingeckoId: 'kintsugi',
        },
        {
          symbol: 'VSKSM',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"Token":"VSKSM"}',
        },
        {
          symbol: 'KSM',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"Token":"KSM"}',
          coingeckoId: 'kusama',
        },
        {
          symbol: 'aUSD',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"Token":"KUSD"}',
          coingeckoId: 'acala-dollar',
        },
        {
          symbol: 'KBTC',
          decimals: 8,
          existentialDeposit: '66',
          onChainId: '{"Token":"KBTC"}',
          coingeckoId: 'kintsugi-btc',
        },
        {
          symbol: 'KMA',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"ForeignAsset":10}',
          coingeckoId: 'calamari-network',
        },
        {
          symbol: 'GENS',
          decimals: 9,
          existentialDeposit: '1000000000000',
          onChainId: '{"ForeignAsset":14}',
          coingeckoId: 'genshiro',
        },
        {
          symbol: 'LT',
          decimals: 12,
          existentialDeposit: '1000000000000',
          onChainId: '{"ForeignAsset":19}',
        },
        {
          symbol: 'TEER',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"ForeignAsset":8}',
          coingeckoId: 'integritee',
        },
        {
          symbol: 'TUR',
          decimals: 10,
          existentialDeposit: '40000000000',
          onChainId: '{"ForeignAsset":16}',
        },
        {
          symbol: 'HKO',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"ForeignAsset":4}',
        },
        {
          symbol: 'KICO',
          decimals: 14,
          existentialDeposit: '100000000000000',
          onChainId: '{"ForeignAsset":6}',
        },
        {
          symbol: 'QTZ',
          decimals: 18,
          existentialDeposit: '1000000000000000000',
          onChainId: '{"ForeignAsset":2}',
          coingeckoId: 'quartz',
        },
        {
          symbol: 'LIT',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"ForeignAsset":20}',
          coingeckoId: 'litentry',
        },
        {
          symbol: 'NEER',
          decimals: 18,
          existentialDeposit: '100000000000000000',
          onChainId: '{"ForeignAsset":9}',
          coingeckoId: 'metaverse-network-pioneer',
        },
        {
          symbol: 'ARIS',
          decimals: 8,
          existentialDeposit: '1000000000000',
          onChainId: '{"ForeignAsset":1}',
        },
        {
          symbol: 'RMRK',
          decimals: 10,
          existentialDeposit: '100000000',
          onChainId: '{"ForeignAsset":0}',
          coingeckoId: 'rmrk',
        },
        {
          symbol: 'CSM',
          decimals: 12,
          existentialDeposit: '1000000000000',
          onChainId: '{"ForeignAsset":5}',
          coingeckoId: 'crust-storage-market',
        },
        {
          symbol: 'PCHU',
          decimals: 18,
          existentialDeposit: '100000000000000000',
          onChainId: '{"ForeignAsset":17}',
        },
        {
          symbol: 'CRAB',
          decimals: 18,
          existentialDeposit: '1000000000000000000',
          onChainId: '{"ForeignAsset":13}',
        },
        {
          symbol: 'BSX',
          decimals: 12,
          existentialDeposit: '1000000000000',
          onChainId: '{"ForeignAsset":11}',
          coingeckoId: 'basilisk',
        },
        {
          symbol: 'AIR',
          decimals: 18,
          existentialDeposit: '100000000000000000',
          onChainId: '{"ForeignAsset":12}',
          coingeckoId: 'altair',
        },
        {
          symbol: 'USDT',
          decimals: 6,
          existentialDeposit: '10000',
          onChainId: '{"ForeignAsset":7}',
          coingeckoId: 'tether',
        },
        {
          symbol: 'SDN',
          decimals: 18,
          existentialDeposit: '10000000000000000',
          onChainId: '{"ForeignAsset":18}',
          coingeckoId: 'shiden',
        },
        {
          symbol: 'EQD',
          decimals: 9,
          existentialDeposit: '10000000000',
          onChainId: '{"ForeignAsset":15}',
        },
        {
          symbol: 'MOVR',
          decimals: 18,
          existentialDeposit: '1000000000000000',
          onChainId: '{"ForeignAsset":3}',
          coingeckoId: 'moonriver',
        },
        {
          symbol: 'taiKSM',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"StableAssetPoolToken":0}',
        },
        {
          symbol: '3USD',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"StableAssetPoolToken":1}',
        },
        {
          symbol: 'USDCet',
          decimals: 6,
          existentialDeposit: '10000',
          onChainId: '{"Erc20":"0x1f3a10587a20114ea25ba1b388ee2dd4a337ce27"}',
        },
        {
          symbol: 'DAI',
          decimals: 18,
          existentialDeposit: '10000000000000000',
          onChainId: '{"Erc20":"0x4bb6afb5fa2b07a5d1c499e1c3ddb5a15e709a71"}',
        },
        {
          symbol: 'waUSD',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"Erc20":"0xe20683ad1ed8bbeed7e1ae74be10f19d8045b530"}',
        },
        {
          symbol: 'lp KSM-RMRK',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"DexShare":[{"Token":"KSM"},{"ForeignAsset":0}]}',
        },
        {
          symbol: 'lp KSM-LKSM',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"DexShare":[{"Token":"KSM"},{"Token":"LKSM"}]}',
        },
        {
          symbol: 'lp KAR-KUSD',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"KAR"},{"Token":"KUSD"}]}',
        },
        {
          symbol: 'lp KAR-QTZ',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"KAR"},{"ForeignAsset":2}]}',
        },
        {
          symbol: 'lp KUSD-KSM',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"Token":"KSM"}]}',
        },
        {
          symbol: 'lp KUSD-BNC',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"Token":"BNC"}]}',
        },
        {
          symbol: 'lp KUSD-CSM',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"ForeignAsset":5}]}',
        },
        {
          symbol: 'lp KUSD-RMRK',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"ForeignAsset":0}]}',
        },
        {
          symbol: 'lp KSM-ARIS',
          decimals: 12,
          existentialDeposit: '100000000',
          onChainId: '{"DexShare":[{"Token":"KSM"},{"ForeignAsset":1}]}',
        },
        {
          symbol: 'lp KUSD-KINT',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"Token":"KINT"}]}',
        },
        {
          symbol: 'lp TAI-taiKSM',
          decimals: 12,
          existentialDeposit: '1000000000000',
          onChainId:
            '{"DexShare":[{"Token":"TAI"},{"StableAssetPoolToken":0}]}',
        },
        {
          symbol: 'lp KAR-KSM',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"KAR"},{"Token":"KSM"}]}',
        },
        {
          symbol: 'lp KUSD-AIR',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"ForeignAsset":12}]}',
        },
        {
          symbol: 'lp KAR-LKSM',
          decimals: 12,
          existentialDeposit: '100000000000',
          onChainId: '{"DexShare":[{"Token":"KAR"},{"Token":"LKSM"}]}',
        },
        {
          symbol: 'lp KUSD-QTZ',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"ForeignAsset":2}]}',
        },
        {
          symbol: 'lp KUSD-PHA',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"Token":"PHA"}]}',
        },
        {
          symbol: 'lp KUSD-LKSM',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"Token":"LKSM"}]}',
        },
        {
          symbol: 'lp KUSD-KBTC',
          decimals: 12,
          existentialDeposit: '10000000000',
          onChainId: '{"DexShare":[{"Token":"KUSD"},{"Token":"KBTC"}]}',
        },
      ],
    },
  },
} as const;

export const Khala: IChain<'khala'> = {
  id: 'khala',
  name: 'Khala',
  account: '*25519',
  subscanUrl: 'https://khala.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/khala_specs.png',
  rpcs: [
    'wss://khala-api.phala.network/ws',
    'wss://khala.api.onfinality.io/public-ws',
    'wss://khala-rpc.dwellir.com',
    'wss://public-rpc.pinknode.io/khala',
  ],
  paraId: 2004,
  relay: { id: 'kusama' },
} as const;

export const Kico: IChain<'kico'> = {
  id: 'kico',
  name: 'Kico',
  account: '*25519',
  rpcs: ['wss://rpc.kico.dico.io'],
  paraId: 2107,
  relay: { id: 'kusama' },
} as const;

export const KiltSpiritnet: IChain<'kilt-spiritnet'> = {
  id: 'kilt-spiritnet',
  name: 'KILT Spiritnet',
  account: '*25519',
  subscanUrl: 'https://spiritnet.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/kilt-spiritnet_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/kilt-spiritnet_metadata_latest.apng',
  rpcs: [
    'wss://spiritnet.kilt.io/',
    'wss://spiritnet.api.onfinality.io/public-ws',
    'wss://kilt-rpc.dwellir.com',
  ],
  paraId: 2086,
  relay: { id: 'polkadot' },
} as const;

export const Kintsugi: IChain<'kintsugi'> = {
  id: 'kintsugi',
  name: 'Kintsugi',
  account: '*25519',
  subscanUrl: 'https://kintsugi.subscan.io/',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/kintsugi-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/kintsugi-parachain_metadata_latest.apng',
  overrideNativeTokenId: 'kintsugi-substrate-orml-kint',
  rpcs: [
    'wss://api-kusama.interlay.io/parachain',
    'wss://kintsugi.api.onfinality.io/public-ws',
    'wss://kintsugi-rpc.dwellir.com',
  ],
  paraId: 2092,
  relay: { id: 'kusama' },
} as const;

export const Kpron: IChain<'kpron'> = {
  id: 'kpron',
  name: 'Kpron',
  account: '*25519',
  rpcs: ['wss://kusama-kpron-rpc.apron.network/'],
  paraId: 2019,
  relay: { id: 'kusama' },
} as const;

export const Kulupu: IChain<'kulupu'> = {
  id: 'kulupu',
  name: 'Kulupu',
  account: '*25519',
  subscanUrl: 'https://kulupu.subscan.io/',
  rpcs: ['wss://rpc.kulupu.corepaper.org/ws'],
} as const;

export const Kusama: IChain<'kusama'> = {
  id: 'kusama',
  name: 'Kusama',
  account: '*25519',
  subscanUrl: 'https://kusama.subscan.io/',
  chainspecQrUrl: 'https://metadata.parity.io/qr/kusama_specs.png',
  latestMetadataQrUrl:
    'https://metadata.parity.io/qr/kusama_metadata_latest.apng',
  rpcs: [
    'wss://kusama-rpc.polkadot.io',
    'wss://kusama.api.onfinality.io/public-ws',
    'wss://kusama-rpc.dwellir.com',
    'wss://kusama-rpc-tn.dwellir.com',
    'wss://kusama.public.curie.radiumblock.co/ws',
    'wss://public-rpc.pinknode.io/kusama',
    'wss://1rpc.io/ksm',
    'wss://rpc.dotters.network/kusama',
  ],
} as const;

export const KusamaBridgeHub: IChain<'kusama-bridge-hub'> = {
  id: 'kusama-bridge-hub',
  name: 'BridgeHub',
  account: '*25519',
  rpcs: ['wss://kusama-bridge-hub-rpc.polkadot.io'],
  paraId: 1002,
  relay: { id: 'kusama' },
} as const;

export const Kusari: IChain<'kusari'> = {
  id: 'kusari',
  name: 'Kusari',
  account: '*25519',
  rpcs: ['wss://ws.kusari.network'],
} as const;

export const Kylin: IChain<'kylin'> = {
  id: 'kylin',
  name: 'Kylin',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/kylin_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/kylin_metadata_latest.apng',
  rpcs: ['wss://polkadot.kylin-node.co.uk'],
  paraId: 2052,
  relay: { id: 'polkadot' },
} as const;

export const Listen: IChain<'listen'> = {
  id: 'listen',
  name: 'Listen',
  account: '*25519',
  rpcs: ['wss://rpc.mainnet.listen.io', 'wss://wss.mainnet.listen.io'],
  paraId: 2118,
  relay: { id: 'kusama' },
} as const;

export const Litentry: IChain<'litentry'> = {
  id: 'litentry',
  name: 'Litentry',
  account: '*25519',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/litentry-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/litentry-parachain_metadata_latest.apng',
  rpcs: [
    'wss://rpc.litentry-parachain.litentry.io',
    'wss://litentry-rpc.dwellir.com',
  ],
  paraId: 2013,
  relay: { id: 'polkadot' },
} as const;

export const Litmus: IChain<'litmus'> = {
  id: 'litmus',
  name: 'Litmus',
  account: '*25519',
  subscanUrl: 'https://litmus.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/litmus-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/litmus-parachain_metadata_latest.apng',
  rpcs: ['wss://rpc.litmus-parachain.litentry.io'],
  paraId: 2106,
  relay: { id: 'kusama' },
} as const;

export const Logion: IChain<'logion'> = {
  id: 'logion',
  name: 'Logion',
  account: '*25519',
  rpcs: ['wss://rpc01.logion.network'],
} as const;

export const LoomNetwork: IChain<'loom-network'> = {
  id: 'loom-network',
  name: 'Loom',
  account: '*25519',
  rpcs: ['wss://kusama.dappchains.com'],
  paraId: 2080,
  relay: { id: 'kusama' },
} as const;

export const Luhn: IChain<'luhn'> = {
  id: 'luhn',
  name: 'Luhn',
  account: '*25519',
  rpcs: ['wss://c1.luhn.network'],
  paraId: 2232,
  relay: { id: 'kusama' },
} as const;

export const Mangata: IChain<'mangata'> = {
  id: 'mangata',
  name: 'MangataX',
  coingeckoId: null,
  account: '*25519',
  subscanUrl: 'https://mangatax.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/mangata-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/mangata-parachain_metadata_latest.apng',
  overrideNativeTokenId: 'mangata-substrate-tokens-mgx',
  rpcs: [
    'wss://prod-kusama-collator-01.mangatafinance.cloud',
    'wss://mangata-x.api.onfinality.io/public-ws',
  ],
  paraId: 2110,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-tokens': {
      tokens: [
        { symbol: 'MGX', decimals: 18, existentialDeposit: '0', onChainId: 0 },
      ],
    },
  },
} as const;

export const Manta: IChain<'manta'> = {
  id: 'manta',
  name: 'Manta',
  account: '*25519',
  rpcs: [],
  paraId: 2015,
  relay: { id: 'polkadot' },
} as const;

export const Mars: IChain<'mars'> = {
  id: 'mars',
  name: 'Mars',
  account: '*25519',
  rpcs: ['wss://wss.mars.aresprotocol.io'],
  paraId: 2008,
  relay: { id: 'kusama' },
} as const;

export const Mathchain: IChain<'mathchain'> = {
  id: 'mathchain',
  name: 'MathChain',
  account: '*25519',
  rpcs: [
    'wss://mathchain-asia.maiziqianbao.net/ws',
    'wss://mathchain-us.maiziqianbao.net/ws',
  ],
} as const;

export const Minix: IChain<'minix'> = {
  id: 'minix',
  name: 'MiniX',
  account: '*25519',
  rpcs: [],
} as const;

export const Moonbeam: IChain<'moonbeam'> = {
  id: 'moonbeam',
  name: 'Moonbeam',
  account: 'secp256k1',
  subscanUrl: 'https://moonbeam.subscan.io/',
  rpcs: [
    'wss://wss.api.moonbeam.network',
    'wss://moonbeam.public.blastapi.io',
    'wss://moonbeam.api.onfinality.io/public-ws',
    'wss://public-rpc.pinknode.io/moonbeam',
    'wss://1rpc.io/glmr',
  ],
  paraId: 2004,
  relay: { id: 'polkadot' },
} as const;

export const Moonriver: IChain<'moonriver'> = {
  id: 'moonriver',
  name: 'Moonriver',
  account: 'secp256k1',
  subscanUrl: 'https://moonriver.subscan.io/',
  rpcs: [
    'wss://wss.api.moonriver.moonbeam.network',
    'wss://moonriver.public.blastapi.io',
    'wss://moonriver.api.onfinality.io/public-ws',
    'wss://public-rpc.pinknode.io/moonriver',
  ],
  paraId: 2023,
  relay: { id: 'kusama' },
} as const;

export const Myriad: IChain<'myriad'> = {
  id: 'myriad',
  name: 'Myriad',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/appchain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/appchain_metadata_latest.apng',
  account: '*25519',
  rpcs: ['wss://ws-rpc.myriad.social'],
} as const;

export const Neatcoin: IChain<'neatcoin'> = {
  id: 'neatcoin',
  name: 'Neatcoin',
  account: '*25519',
  rpcs: ['wss://rpc.neatcoin.org/ws'],
} as const;

export const Nftmart: IChain<'nftmart'> = {
  id: 'nftmart',
  name: 'NFTMart',
  account: '*25519',
  rpcs: ['wss://mainnet.nftmart.io/rpc/ws'],
} as const;

export const NodlePolkadot: IChain<'nodle-polkadot'> = {
  id: 'nodle-polkadot',
  name: 'Nodle',
  account: '*25519',
  subscanUrl: 'https://nodle.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/nodle-para_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/nodle-para_metadata_latest.apng',
  rpcs: [
    'wss://nodle-parachain.api.onfinality.io/public-ws',
    'wss://eden-rpc.dwellir.com',
    'wss://public-rpc.pinknode.io/nodle',
  ],
  paraId: 2026,
  relay: { id: 'polkadot' },
} as const;

export const Oak: IChain<'oak'> = {
  id: 'oak',
  name: 'Oak',
  account: '*25519',
  rpcs: ['wss://rpc.oak.tech'],
  paraId: 2090,
  relay: { id: 'polkadot' },
} as const;

export const Odyssey: IChain<'odyssey'> = {
  id: 'odyssey',
  name: 'Ares Odyssey',
  account: '*25519',
  rpcs: ['wss://wss.odyssey.aresprotocol.io'],
  paraId: 2028,
  relay: { id: 'polkadot' },
} as const;

export const Omnibtc: IChain<'omnibtc'> = {
  id: 'omnibtc',
  name: 'OmniBTC',
  account: '*25519',
  rpcs: ['wss://psc-parachain.coming.chat'],
  paraId: 2053,
  relay: { id: 'polkadot' },
} as const;

export const OrigintrailParachain: IChain<'origintrail-parachain'> = {
  id: 'origintrail-parachain',
  name: 'OriginTrail',
  account: '*25519',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/origintrail-parachain_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/origintrail-parachain_metadata_latest.apng',
  rpcs: ['wss://parachain-rpc.origin-trail.network'],
  paraId: 2043,
  relay: { id: 'polkadot' },
} as const;

export const Parallel: IChain<'parallel'> = {
  id: 'parallel',
  name: 'Parallel',
  account: '*25519',
  subscanUrl: 'https://parallel.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/parallel_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/parallel_metadata_latest.apng',
  rpcs: ['wss://rpc.parallel.fi'],
  paraId: 2012,
  relay: { id: 'polkadot' },
} as const;

export const Pendulum: IChain<'pendulum'> = {
  id: 'pendulum',
  name: 'Pendulum',
  account: '*25519',
  rpcs: ['wss://rpc-pendulum.prd.pendulumchain.tech'],
  paraId: 2094,
  relay: { id: 'polkadot' },
} as const;

export const Phala: IChain<'phala'> = {
  id: 'phala',
  name: 'Phala',
  account: '*25519',
  subscanUrl: 'https://phala.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/phala_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/phala_metadata_latest.apng',
  rpcs: [
    'wss://api.phala.network/ws',
    'wss://phala.api.onfinality.io/public-ws',
  ],
  paraId: 2035,
  relay: { id: 'polkadot' },
} as const;

export const Picasso: IChain<'picasso'> = {
  id: 'picasso',
  name: 'Picasso',
  account: '*25519',
  subscanUrl: 'https://picasso.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/picasso_specs.png',
  rpcs: ['wss://rpc.composablenodes.tech'],
  paraId: 2087,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-orml': { disable: true },
    'substrate-tokens': {
      tokens: [
        {
          symbol: 'DOT',
          decimals: 10,
          existentialDeposit: '0',
          onChainId: 6,
          coingeckoId: 'polkadot',
        },
        {
          symbol: 'KSM',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 4,
          coingeckoId: 'kusama',
        },
        {
          symbol: 'KAR',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 101,
          coingeckoId: 'karura',
        },
        {
          symbol: 'BNC',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 102,
          coingeckoId: 'bifrost-native-coin',
        },
        {
          symbol: 'vKSM',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 103,
        },
        {
          symbol: 'MOVR',
          decimals: 18,
          existentialDeposit: '0',
          onChainId: 104,
          coingeckoId: 'moonriver',
        },
        {
          symbol: 'aUSD',
          decimals: 12,
          existentialDeposit: '0',
          onChainId: 129,
          coingeckoId: 'acala-dollar',
        },
        {
          symbol: 'USDT',
          decimals: 6,
          existentialDeposit: '0',
          onChainId: 130,
          coingeckoId: 'tether',
        },
        {
          symbol: 'USDC',
          decimals: 6,
          existentialDeposit: '0',
          onChainId: 131,
          coingeckoId: 'usd-coin',
        },
        {
          symbol: 'wBTC',
          decimals: 8,
          existentialDeposit: '0',
          onChainId: 132,
          coingeckoId: 'bitcoin',
        },
        {
          symbol: 'wETH',
          decimals: 18,
          existentialDeposit: '0',
          onChainId: 133,
          coingeckoId: 'ethereum',
        },
      ],
    },
  },
} as const;

export const Pichiu: IChain<'pichiu'> = {
  id: 'pichiu',
  name: 'Pichiu',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/pichiu_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/pichiu_metadata_latest.apng',
  rpcs: ['wss://kusama.kylin-node.co.uk'],
  paraId: 2102,
  relay: { id: 'kusama' },
} as const;

export const PolkadexPolkadot: IChain<'polkadex-polkadot'> = {
  id: 'polkadex-polkadot',
  name: 'Polkadex',
  account: '*25519',
  rpcs: [],
  paraId: 2040,
  relay: { id: 'polkadot' },
} as const;

export const PolkadexStandalone: IChain<'polkadex-standalone'> = {
  id: 'polkadex-standalone',
  name: 'Polkadex Standalone',
  account: '*25519',
  subscanUrl: 'https://polkadex.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/node_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/node_metadata_latest.apng',
  rpcs: [
    'wss://mainnet.polkadex.trade',
    'wss://polkadex.api.onfinality.io/public-ws',
  ],
} as const;

export const Polkadot: IChain<'polkadot'> = {
  id: 'polkadot',
  name: 'Polkadot',
  account: '*25519',
  subscanUrl: 'https://polkadot.subscan.io/',
  chainspecQrUrl: 'https://metadata.parity.io/qr/polkadot_specs.png',
  latestMetadataQrUrl:
    'https://metadata.parity.io/qr/polkadot_metadata_latest.apng',
  rpcs: [
    'wss://rpc.polkadot.io',
    'wss://polkadot.api.onfinality.io/public-ws',
    'wss://polkadot-rpc.dwellir.com',
    'wss://polkadot-rpc-tn.dwellir.com',
    'wss://public-rpc.pinknode.io/polkadot',
    'wss://polkadot.public.curie.radiumblock.co/ws',
    'wss://1rpc.io/dot',
    'wss://rpc.dotters.network/polkadot',
  ],
} as const;

export const PolkadotCollectives: IChain<'polkadot-collectives'> = {
  id: 'polkadot-collectives',
  name: 'Collectives',
  account: '*25519',
  rpcs: [
    'wss://polkadot-collectives-rpc.polkadot.io',
    'wss://collectives.api.onfinality.io/public-ws',
  ],
  paraId: 1001,
  relay: { id: 'polkadot' },
} as const;

export const Polkasmith: IChain<'polkasmith'> = {
  id: 'polkasmith',
  name: 'PolkaSmith',
  account: '*25519',
  rpcs: ['wss://wss-polkasmith.polkafoundry.com'],
  paraId: 2009,
  relay: { id: 'kusama' },
} as const;

export const Polymesh: IChain<'polymesh'> = {
  id: 'polymesh',
  name: 'Polymesh',
  account: '*25519',
  subscanUrl: 'https://polymesh.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/polymesh_mainnet_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/polymesh_mainnet_metadata_latest.apng',
  rpcs: ['wss://mainnet-rpc.polymesh.network'],
} as const;

export const Quartz: IChain<'quartz'> = {
  id: 'quartz',
  name: 'Quartz',
  account: '*25519',
  subscanUrl: 'https://quartz.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/quartz_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/quartz_metadata_latest.apng',
  rpcs: [
    'wss://quartz.api.onfinality.io/public-ws',
    'wss://us-ws-quartz.unique.network',
    'wss://asia-ws-quartz.unique.network',
    'wss://eu-ws-quartz.unique.network',
  ],
  paraId: 2095,
  relay: { id: 'kusama' },
} as const;

export const Riochain: IChain<'riochain'> = {
  id: 'riochain',
  name: 'RioChain',
  account: '*25519',
  rpcs: ['wss://node.v1.riochain.io'],
} as const;

export const Riodefi: IChain<'riodefi'> = {
  id: 'riodefi',
  name: 'RioDeFi',
  account: '*25519',
  rpcs: ['wss://rio-kusama.riocorenetwork.com'],
  paraId: 2227,
  relay: { id: 'kusama' },
} as const;

export const RobonomicsKusama: IChain<'robonomics-kusama'> = {
  id: 'robonomics-kusama',
  name: 'Robonomics',
  account: '*25519',
  subscanUrl: 'https://robonomics.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/robonomics_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/robonomics_metadata_latest.apng',
  rpcs: [
    'wss://kusama.rpc.robonomics.network/',
    'wss://robonomics.api.onfinality.io/public-ws',
    'wss://robonomics-rpc.dwellir.com',
    'wss://robonomics.0xsamsara.com',
    'wss://robonomics.leemo.me',
  ],
  paraId: 2048,
  relay: { id: 'kusama' },
} as const;

export const Sakura: IChain<'sakura'> = {
  id: 'sakura',
  name: 'Sakura',
  account: '*25519',
  subscanUrl: 'https://sakura.subscan.io/',
  rpcs: ['wss://api-sakura.clover.finance'],
  paraId: 2016,
  relay: { id: 'kusama' },
} as const;

export const ShadowKusama: IChain<'shadow-kusama'> = {
  id: 'shadow-kusama',
  name: 'Crust Shadow',
  account: '*25519',
  subscanUrl: 'https://shadow.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/crust-collator_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/crust-collator_metadata_latest.apng',
  rpcs: ['wss://rpc-shadow.crust.network/', 'wss://rpc2-shadow.crust.network'],
  paraId: 2012,
  relay: { id: 'kusama' },
} as const;

export const Sherpax: IChain<'sherpax'> = {
  id: 'sherpax',
  name: 'SherpaX',
  account: '*25519',
  rpcs: ['wss://mainnet.sherpax.io'],
} as const;

export const ShidenKusama: IChain<'shiden-kusama'> = {
  id: 'shiden-kusama',
  name: 'Shiden',
  account: '*25519',
  subscanUrl: 'https://shiden.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/shiden_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/shiden_metadata_latest.apng',
  rpcs: [
    'wss://rpc.shiden.astar.network',
    'wss://shiden.public.blastapi.io',
    'wss://shiden-rpc.dwellir.com',
    'wss://shiden.api.onfinality.io/public-ws',
    'wss://public-rpc.pinknode.io/shiden',
  ],
  paraId: 2007,
  relay: { id: 'kusama' },
} as const;

export const Snow: IChain<'snow'> = {
  id: 'snow',
  name: 'Snow',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/snow_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/snow_metadata_latest.apng',
  rpcs: ['wss://snow-rpc.icenetwork.io'],
  paraId: 2129,
  relay: { id: 'kusama' },
} as const;

export const SoraKsm: IChain<'sora-ksm'> = {
  id: 'sora-ksm',
  name: 'Sora',
  account: '*25519',
  rpcs: ['wss://ws.parachain-collator-1.c1.sora2.soramitsu.co.jp'],
  paraId: 2011,
  relay: { id: 'kusama' },
} as const;

export const SoraSubstrate: IChain<'sora-substrate'> = {
  id: 'sora-substrate',
  name: 'Sora Standalone',
  account: '*25519',
  subscanUrl: 'https://sora.subscan.io/',
  rpcs: [
    'wss://mof2.sora.org',
    'wss://ws.mof.sora.org',
    'wss://mof3.sora.org',
    'wss://sora.api.onfinality.io/public-ws',
  ],
} as const;

export const Spanner: IChain<'spanner'> = {
  id: 'spanner',
  name: 'Spanner',
  account: '*25519',
  rpcs: [],
} as const;

export const Stafi: IChain<'stafi'> = {
  id: 'stafi',
  name: 'Stafi',
  account: '*25519',
  subscanUrl: 'https://stafi.subscan.io/',
  rpcs: ['wss://mainnet-rpc.stafi.io'],
} as const;

export const Statemine: IChain<'statemine'> = {
  id: 'statemine',
  name: 'Statemine',
  account: '*25519',
  subscanUrl: 'https://statemine.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/statemine_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/statemine_metadata_latest.apng',
  rpcs: [
    'wss://statemine-rpc.polkadot.io',
    'wss://statemine.api.onfinality.io/public-ws',
    'wss://statemine-rpc.dwellir.com',
    'wss://statemine-rpc-tn.dwellir.com',
    'wss://public-rpc.pinknode.io/statemine',
    'wss://statemine.public.curie.radiumblock.co/ws',
  ],
  paraId: 1000,
  relay: { id: 'kusama' },
  balanceModuleConfigs: {
    'substrate-assets': {
      tokens: [
        { assetId: 8, symbol: 'RMRK', coingeckoId: 'rmrk' },
        { assetId: 16, symbol: 'ARIS' },
        { assetId: 1984, symbol: 'USDT', coingeckoId: 'tether' },
      ],
    },
  },
} as const;

export const Statemint: IChain<'statemint'> = {
  id: 'statemint',
  name: 'Statemint',
  account: '*25519',
  subscanUrl: 'https://statemint.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/statemint_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/statemint_metadata_latest.apng',
  rpcs: [
    'wss://statemint-rpc.polkadot.io',
    'wss://statemint.api.onfinality.io/public-ws',
    'wss://statemint-rpc.dwellir.com',
    'wss://statemint-rpc-tn.dwellir.com',
    'wss://public-rpc.pinknode.io/statemint',
    'wss://statemint.public.curie.radiumblock.co/ws',
  ],
  paraId: 1000,
  relay: { id: 'polkadot' },
  balanceModuleConfigs: {
    'substrate-assets': {
      tokens: [{ assetId: 1984, symbol: 'USDT', coingeckoId: 'tether' }],
    },
  },
} as const;

export const Subdao: IChain<'subdao'> = {
  id: 'subdao',
  name: 'SubDAO',
  account: '*25519',
  rpcs: ['wss://parachain-rpc.subdao.org'],
  paraId: 2018,
  relay: { id: 'polkadot' },
} as const;

export const SubgameKusama: IChain<'subgame-kusama'> = {
  id: 'subgame-kusama',
  name: 'SubGame Gamma Kusama',
  account: '*25519',
  rpcs: ['wss://gamma.subgame.org/'],
  paraId: 2018,
  relay: { id: 'kusama' },
} as const;

export const SubgamePolkadot: IChain<'subgame-polkadot'> = {
  id: 'subgame-polkadot',
  name: 'SubGame Gamma Polkadot',
  account: '*25519',
  rpcs: [],
  paraId: 2017,
  relay: { id: 'polkadot' },
} as const;

export const SubgameStandalone: IChain<'subgame-standalone'> = {
  id: 'subgame-standalone',
  name: 'SubGame',
  account: '*25519',
  subscanUrl: 'https://subgame.subscan.io/',
  rpcs: ['wss://mainnet.subgame.org/'],
} as const;

export const SubsocialX: IChain<'subsocial-x'> = {
  id: 'subsocial-x',
  name: 'SubsocialX',
  coingeckoId: null,
  account: '*25519',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/subsocial-parachain_specs.png',
  rpcs: ['wss://para.f3joule.network', 'wss://para.subsocial.network'],
  paraId: 2100,
  relay: { id: 'kusama' },
} as const;

export const Swapdex: IChain<'swapdex'> = {
  id: 'swapdex',
  name: 'Swapdex',
  account: '*25519',
  rpcs: ['wss://ws.swapdex.network'],
} as const;

export const Tanganika: IChain<'tanganika'> = {
  id: 'tanganika',
  name: 'Tanganika',
  account: '*25519',
  subscanUrl: 'https://datahighway.subscan.io/',
  chainspecQrUrl:
    'https://metadata.novasama.io/qr/datahighway-parachain_specs.png',
  rpcs: ['wss://tanganika.datahighway.com'],
  paraId: 2116,
  relay: { id: 'kusama' },
} as const;

export const Ternoa: IChain<'ternoa'> = {
  id: 'ternoa',
  name: 'Ternoa',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/mainnet_specs.png',
  rpcs: ['wss://mainnet.ternoa.network'],
} as const;

export const ThebifrostMainnet: IChain<'thebifrost-mainnet'> = {
  id: 'thebifrost-mainnet',
  name: 'The Bifrost',
  account: '*25519',
  rpcs: [
    'wss://public-01.mainnet.thebifrost.io/wss',
    'wss://public-02.mainnet.thebifrost.io/wss',
  ],
} as const;

export const Tinker: IChain<'tinker'> = {
  id: 'tinker',
  name: 'InvArch Tinkernet',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/tinkernet_node_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/tinkernet_node_metadata_latest.apng',
  rpcs: [
    'wss://tinker.invarch.network',
    'wss://invarch-tinkernet.api.onfinality.io/public-ws',
  ],
  paraId: 2125,
  relay: { id: 'kusama' },
} as const;

export const Trustbase: IChain<'trustbase'> = {
  id: 'trustbase',
  name: 'TrustBase',
  account: '*25519',
  rpcs: [],
  paraId: 2078,
  relay: { id: 'kusama' },
} as const;

export const Turing: IChain<'turing'> = {
  id: 'turing',
  name: 'Turing',
  account: '*25519',
  subscanUrl: 'https://turing.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/turing_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/turing_metadata_latest.apng',
  coingeckoId: null,
  rpcs: ['wss://rpc.turing.oak.tech', 'wss://turing-rpc.dwellir.com'],
  paraId: 2114,
  relay: { id: 'kusama' },
} as const;

export const Uniarts: IChain<'uniarts'> = {
  id: 'uniarts',
  name: 'UniArts',
  account: '*25519',
  subscanUrl: 'https://uniarts.subscan.io/',
  rpcs: ['wss://mainnet.uniarts.vip:9443'],
} as const;

export const Unique: IChain<'unique'> = {
  id: 'unique',
  name: 'Unique',
  account: '*25519',
  subscanUrl: 'https://unique.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/unique_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/unique_metadata_latest.apng',
  rpcs: [
    'wss://us-ws.unique.network/',
    'wss://asia-ws.unique.network/',
    'wss://eu-ws.unique.network/',
  ],
  paraId: 2037,
  relay: { id: 'polkadot' },
} as const;

export const Unorthodox: IChain<'unorthodox'> = {
  id: 'unorthodox',
  name: 'Unorthodox',
  account: '*25519',
  rpcs: ['wss://rpc.kusama.standard.tech'],
  paraId: 2094,
  relay: { id: 'kusama' },
} as const;

export const Westlake: IChain<'westlake'> = {
  id: 'westlake',
  name: 'Westlake',
  account: '*25519',
  rpcs: [],
} as const;

export const Xx: IChain<'xx'> = {
  id: 'xx',
  name: 'XX',
  account: '*25519',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/xxnetwork_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/xxnetwork_metadata_latest.apng',
  rpcs: ['wss://rpc.xx.network'],
} as const;

export const Zeitgeist: IChain<'zeitgeist'> = {
  id: 'zeitgeist',
  name: 'Zeitgeist',
  account: '*25519',
  subscanUrl: 'https://zeitgeist.subscan.io/',
  chainspecQrUrl: 'https://metadata.novasama.io/qr/zeitgeist_specs.png',
  latestMetadataQrUrl:
    'https://metadata.novasama.io/qr/zeitgeist_metadata_latest.apng',
  rpcs: [
    'wss://zeitgeist-rpc.dwellir.com',
    'wss://zeitgeist.api.onfinality.io/public-ws',
  ],
  paraId: 2101,
  relay: { id: 'kusama' },
} as const;

export const Zero: IChain<'zero'> = {
  id: 'zero',
  name: 'Subzero',
  account: '*25519',
  rpcs: ['wss://rpc-1.kusama.node.zero.io'],
  paraId: 2236,
  relay: { id: 'kusama' },
} as const;

export const _3Dpass: IChain<'3-dpass'> = {
  id: '3-dpass',
  name: '3DPass',
  account: '*25519',
  rpcs: ['wss://rpc2.3dpass.org'],
} as const;
