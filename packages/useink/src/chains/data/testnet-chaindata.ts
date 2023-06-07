import { IChain } from './types.ts';

export const AjunaTestnet: IChain<'ajuna-testnet'> = {
  id: 'ajuna-testnet',
  name: 'Ajuna Testnet',
  account: '*25519',
  rpcs: ['wss://rpc-test.ajuna.network'],
} as const;

export const AlephTestnet: IChain<'aleph-testnet'> = {
  id: 'aleph-testnet',
  name: 'Aleph Zero Testnet',
  account: '*25519',
  rpcs: ['wss://ws.test.azero.dev', 'wss://aleph-zero-testnet-rpc.dwellir.com'],
} as const;

export const ArcticTestnetRococo: IChain<'arctic-testnet-rococo'> = {
  id: 'arctic-testnet-rococo',
  name: 'Arctic Testnet',
  account: '*25519',
  rpcs: ['wss://arctic-rococo-rpc.icenetwork.io'],
  paraId: 3015,
  relay: { id: 'rococo-testnet' },
} as const;

export const ArcticTestnetStandalone: IChain<'arctic-testnet-standalone'> = {
  id: 'arctic-testnet-standalone',
  name: 'Arctic Testnet Standalone',
  account: '*25519',
  subscanUrl: 'https://arctic.subscan.io/',
  rpcs: ['wss://arctic-rpc.icenetwork.io:9944'],
} as const;

export const AresGladiosTestnet: IChain<'ares-gladios-testnet'> = {
  id: 'ares-gladios-testnet',
  name: 'Ares Gladios',
  account: '*25519',
  rpcs: ['wss://gladios.aresprotocol.io'],
} as const;

export const AutomataContextfreeTestnet: IChain<'automata-contextfree-testnet'> =
  {
    id: 'automata-contextfree-testnet',
    name: 'Automata ContextFree',
    account: '*25519',
    rpcs: [
      'wss://cf-api.ata.network',
      'wss://contextfree.api.onfinality.io/public-ws',
    ],
  } as const;

export const BifrostTestnet: IChain<'bifrost-testnet'> = {
  id: 'bifrost-testnet',
  name: 'Bifrost Testnet',
  account: '*25519',
  subscanUrl: 'https://bifrost-testnet.subscan.io/',
  rpcs: [],
} as const;

export const BitcountryTestnet: IChain<'bitcountry-testnet'> = {
  id: 'bitcountry-testnet',
  name: 'Bit.Country',
  account: '*25519',
  rpcs: ['wss://tewai-rpc.bit.country'],
} as const;

export const BrainstormTestnet: IChain<'brainstorm-testnet'> = {
  id: 'brainstorm-testnet',
  name: 'InvArch Brainstorm',
  account: '*25519',
  rpcs: [],
} as const;

export const CessTestnet: IChain<'cess-testnet'> = {
  id: 'cess-testnet',
  name: 'Cess',
  account: '*25519',
  rpcs: ['wss://testnet-rpc0.cess.cloud/ws/'],
} as const;

export const ChainoliTestnet: IChain<'chainoli-testnet'> = {
  id: 'chainoli-testnet',
  name: 'Oli',
  account: '*25519',
  rpcs: [],
  paraId: 4023,
  relay: { id: 'rococo-testnet' },
} as const;

export const CharcoalTestnet: IChain<'charcoal-testnet'> = {
  id: 'charcoal-testnet',
  name: 'Charcoal',
  account: '*25519',
  rpcs: [],
  paraId: 2086,
  relay: { id: 'westend-testnet' },
} as const;

export const CloverTestnet: IChain<'clover-testnet'> = {
  id: 'clover-testnet',
  name: 'Clover Testnet',
  account: '*25519',
  subscanUrl: 'https://clover-testnet.subscan.io/',
  rpcs: [],
} as const;

export const CoinversationTestnet: IChain<'coinversation-testnet'> = {
  id: 'coinversation-testnet',
  name: 'Coinversation Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.coinversation.io/'],
} as const;

export const CreditcoinTestnet: IChain<'creditcoin-testnet'> = {
  id: 'creditcoin-testnet',
  name: 'Creditcoin Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.testnet.creditcoin.network/ws'],
} as const;

export const CrustMaxwellTestnet: IChain<'crust-maxwell-testnet'> = {
  id: 'crust-maxwell-testnet',
  name: 'Crust Maxwell',
  account: '*25519',
  rpcs: [],
} as const;

export const DatahighwayTestnet: IChain<'datahighway-testnet'> = {
  id: 'datahighway-testnet',
  name: 'Spreehafen',
  account: '*25519',
  rpcs: [],
} as const;

export const DebioTestnet: IChain<'debio-testnet'> = {
  id: 'debio-testnet',
  name: 'DeBio Testnet',
  account: '*25519',
  rpcs: ['wss://ws-rpc.testnet.debio.network'],
} as const;

export const Development: IChain<'development'> = {
  id: 'development',
  name: 'Development',
  account: '*25519',
  rpcs: ['ws://127.0.0.1:9944'],
} as const;

export const DockTestnet: IChain<'dock-testnet'> = {
  id: 'dock-testnet',
  name: 'Dock Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const DolphinTestnet: IChain<'dolphin-testnet'> = {
  id: 'dolphin-testnet',
  name: 'Dolphin',
  account: '*25519',
  subscanUrl: 'https://dolphin.subscan.io/',
  rpcs: [],
} as const;

export const DotmogTestnet: IChain<'dotmog-testnet'> = {
  id: 'dotmog-testnet',
  name: 'DOTMog',
  account: '*25519',
  rpcs: ['wss://mogiway-01.dotmog.com'],
} as const;

export const EdgewareTestnet: IChain<'edgeware-testnet'> = {
  id: 'edgeware-testnet',
  name: 'Beresheet',
  account: '*25519',
  rpcs: ['wss://beresheet.jelliedowl.net'],
} as const;

export const EggnetTestnet: IChain<'eggnet-testnet'> = {
  id: 'eggnet-testnet',
  name: 'Eggnet',
  account: '*25519',
  rpcs: [],
  paraId: 4006,
  relay: { id: 'rococo-testnet' },
} as const;

export const EncointerTestnetRococo: IChain<'encointer-testnet-rococo'> = {
  id: 'encointer-testnet-rococo',
  name: 'Encointer Lietaer',
  account: '*25519',
  rpcs: ['wss://rococo.api.encointer.org'],
  paraId: 1003,
  relay: { id: 'rococo-testnet' },
} as const;

export const EncointerTestnetStandalone: IChain<'encointer-testnet-standalone'> =
  {
    id: 'encointer-testnet-standalone',
    name: 'Encointer Gesell',
    account: '*25519',
    rpcs: ['wss://gesell.encointer.org'],
  } as const;

export const EquilibriumTestnet: IChain<'equilibrium-testnet'> = {
  id: 'equilibrium-testnet',
  name: 'Equilibrium Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const FantourTestnet: IChain<'fantour-testnet'> = {
  id: 'fantour-testnet',
  name: 'Fantour',
  account: '*25519',
  rpcs: [],
} as const;

export const FerrumTestnet: IChain<'ferrum-testnet'> = {
  id: 'ferrum-testnet',
  name: 'Ferrum',
  account: '*25519',
  rpcs: ['wss://testnet.dev.svcs.ferrumnetwork.io'],
} as const;

export const GalitalTestnet: IChain<'galital-testnet'> = {
  id: 'galital-testnet',
  name: 'Galital PC2',
  account: '*25519',
  rpcs: [],
} as const;

export const GaloisTestnet: IChain<'galois-testnet'> = {
  id: 'galois-testnet',
  name: 'Galois',
  account: '*25519',
  rpcs: [
    'wss://galois-hk.maiziqianbao.net/ws',
    'wss://galois.maiziqianbao.net/ws',
  ],
} as const;

export const GamepowerTestnet: IChain<'gamepower-testnet'> = {
  id: 'gamepower-testnet',
  name: 'GamePower',
  account: '*25519',
  rpcs: [],
} as const;

export const GeekTestnet: IChain<'geek-testnet'> = {
  id: 'geek-testnet',
  name: 'GeekCash',
  account: '*25519',
  rpcs: ['wss://testnet.geekcash.org'],
} as const;

export const GuildTestnet: IChain<'guild-testnet'> = {
  id: 'guild-testnet',
  name: 'Guild Testnet',
  account: '*25519',
  rpcs: ['wss://1.oracle.network.guild.xyz'],
} as const;

export const HalongbayTestnet: IChain<'halongbay-testnet'> = {
  id: 'halongbay-testnet',
  name: 'Halongbay',
  account: '*25519',
  rpcs: [],
} as const;

export const HelixstreetTestnet: IChain<'helixstreet-testnet'> = {
  id: 'helixstreet-testnet',
  name: 'Helixstreet',
  account: '*25519',
  rpcs: ['wss://rpc-rococo.helixstreet.io'],
  paraId: 3025,
  relay: { id: 'rococo-testnet' },
} as const;

export const IntegriteeTestnet: IChain<'integritee-testnet'> = {
  id: 'integritee-testnet',
  name: 'Integritee Testnet',
  account: '*25519',
  rpcs: ['wss://teerw1.integritee.network'],
  paraId: 2081,
  relay: { id: 'westend-testnet' },
} as const;

export const InterlayTestnetStandalone: IChain<'interlay-testnet-standalone'> =
  {
    id: 'interlay-testnet-standalone',
    name: 'Interlay Testnet',
    account: '*25519',
    rpcs: ['wss://api-testnet.interlay.io/parachain/'],
  } as const;

export const InterlayTestnetWestend: IChain<'interlay-testnet-westend'> = {
  id: 'interlay-testnet-westend',
  name: 'Interlay Testnet',
  account: '*25519',
  rpcs: [],
  paraId: 2094,
  relay: { id: 'westend-testnet' },
} as const;

export const IpseTestnet: IChain<'ipse-testnet'> = {
  id: 'ipse-testnet',
  name: 'Ipse',
  account: '*25519',
  rpcs: [
    'wss://testnet-china.ipse.io',
    'wss://testnet-usa.ipse.io',
    'wss://testnet-europe.ipse.io',
  ],
} as const;

export const JazTestnet: IChain<'jaz-testnet'> = {
  id: 'jaz-testnet',
  name: 'Artio',
  account: '*25519',
  rpcs: ['wss://ws0.jaz.network'],
} as const;

export const JoystreamTestnet: IChain<'joystream-testnet'> = {
  id: 'joystream-testnet',
  name: 'Joystream Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.joystream.org:9944', 'wss://joystream-rpc.dwellir.com'],
} as const;

export const JupiterTestnet: IChain<'jupiter-testnet'> = {
  id: 'jupiter-testnet',
  name: 'Jupiter',
  account: '*25519',
  rpcs: [],
} as const;

export const KaruraTestnet: IChain<'karura-testnet'> = {
  id: 'karura-testnet',
  name: 'Wendala',
  account: '*25519',
  rpcs: [],
  paraId: 2005,
  relay: { id: 'westend-testnet' },
} as const;

export const KhalaTestnet: IChain<'khala-testnet'> = {
  id: 'khala-testnet',
  name: 'Khala Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const KiltTestnetStandalone: IChain<'kilt-testnet-standalone'> = {
  id: 'kilt-testnet-standalone',
  name: 'KILT Mashnet',
  account: '*25519',
  rpcs: ['wss://full-nodes.kilt.io:9944/'],
} as const;

export const KiltTestnetStandalone2: IChain<'kilt-testnet-standalone-2'> = {
  id: 'kilt-testnet-standalone-2',
  name: 'KILT Peregrine',
  account: '*25519',
  subscanUrl: 'https://kilt-testnet.subscan.io/',
  rpcs: ['wss://peregrine.kilt.io/parachain-public-ws/'],
} as const;

export const KiltTestnetWestend: IChain<'kilt-testnet-westend'> = {
  id: 'kilt-testnet-westend',
  name: 'Wilt',
  account: '*25519',
  rpcs: ['wss://westend.kilt.io:9977'],
  paraId: 2085,
  relay: { id: 'westend-testnet' },
} as const;

export const KintsugiTestnet: IChain<'kintsugi-testnet'> = {
  id: 'kintsugi-testnet',
  name: 'Kintsugi Testnet',
  account: '*25519',
  rpcs: ['wss://api-dev-kintsugi.interlay.io/parachain'],
} as const;

export const KlugdossierTestnet: IChain<'klugdossier-testnet'> = {
  id: 'klugdossier-testnet',
  name: 'Klug Dossier',
  account: '*25519',
  rpcs: [],
} as const;

export const KylinTestnet: IChain<'kylin-testnet'> = {
  id: 'kylin-testnet',
  name: 'Kylin Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const LaminarTestnet: IChain<'laminar-testnet'> = {
  id: 'laminar-testnet',
  name: 'Turbulence',
  account: '*25519',
  rpcs: [],
} as const;

export const LitentryTestnet: IChain<'litentry-testnet'> = {
  id: 'litentry-testnet',
  name: 'Litentry Testnet',
  account: '*25519',
  rpcs: ['wss://testnet.litentry.io'],
} as const;

export const LogionTestnetStandalone: IChain<'logion-testnet-standalone'> = {
  id: 'logion-testnet-standalone',
  name: 'Logion Testnet Parachain',
  account: '*25519',
  rpcs: ['wss://chimay.logion.network'],
} as const;

export const LogionTestnetStandalone2: IChain<'logion-testnet-standalone-2'> = {
  id: 'logion-testnet-standalone-2',
  name: 'Logion Testnet',
  account: '*25519',
  rpcs: ['wss://test-rpc01.logion.network'],
} as const;

export const MandalaTestnet: IChain<'mandala-testnet'> = {
  id: 'mandala-testnet',
  name: 'Mandala',
  account: '*25519',
  subscanUrl: 'https://acala-testnet.subscan.io/',
  rpcs: ['wss://mandala.polkawallet.io'],
} as const;

export const MantaTestnet: IChain<'manta-testnet'> = {
  id: 'manta-testnet',
  name: 'Manta Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const MinixTestnet: IChain<'minix-testnet'> = {
  id: 'minix-testnet',
  name: 'MiniX Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const MoonbaseAlphaTestnet: IChain<'moonbase-alpha-testnet'> = {
  id: 'moonbase-alpha-testnet',
  name: 'Moonbase Alpha',
  account: 'secp256k1',
  subscanUrl: 'https://moonbase.subscan.io/',
  rpcs: [
    'wss://wss.api.moonbase.moonbeam.network',
    'wss://moonbase-alpha.public.blastapi.io',
    'wss://moonbeam-alpha.api.onfinality.io/public-ws',
    'wss://public-rpc.pinknode.io/alphanet',
  ],
} as const;

export const MoonshadowTestnet: IChain<'moonshadow-testnet'> = {
  id: 'moonshadow-testnet',
  name: 'Moonshadow',
  account: '*25519',
  rpcs: [],
  paraId: 2002,
  relay: { id: 'westend-testnet' },
} as const;

export const MybankTestnet: IChain<'mybank-testnet'> = {
  id: 'mybank-testnet',
  name: 'mybank.network',
  account: '*25519',
  rpcs: [],
} as const;

export const MyriadTestnet: IChain<'myriad-testnet'> = {
  id: 'myriad-testnet',
  name: 'Myriad Testnet',
  account: '*25519',
  rpcs: ['wss://ws-rpc.testnet.myriad.social'],
} as const;

export const NftmartTestnet: IChain<'nftmart-testnet'> = {
  id: 'nftmart-testnet',
  name: 'NFTMart Testnet',
  account: '*25519',
  rpcs: ['wss://dev-ws.nftmart.io', 'wss://staging-ws.nftmart.io'],
} as const;

export const NodleTestnet: IChain<'nodle-testnet'> = {
  id: 'nodle-testnet',
  name: 'Arcadia',
  account: '*25519',
  rpcs: [],
} as const;

export const OpalTestnet: IChain<'opal-testnet'> = {
  id: 'opal-testnet',
  name: 'Opal',
  account: '*25519',
  rpcs: [
    'wss://ws-opal.unique.network',
    'wss://eu-ws-opal.unique.network',
    'wss://us-ws-opal.unique.network',
    'wss://asia-ws-opal.unique.network',
  ],
} as const;

export const OpportunityTestnet: IChain<'opportunity-testnet'> = {
  id: 'opportunity-testnet',
  name: 'Opportunity',
  account: '*25519',
  rpcs: [],
} as const;

export const PangolinTestnet: IChain<'pangolin-testnet'> = {
  id: 'pangolin-testnet',
  name: 'Pangolin',
  account: '*25519',
  subscanUrl: 'https://pangolin.subscan.io/',
  rpcs: ['wss://pangolin-rpc.darwinia.network'],
} as const;

export const PangoroTestnetStandalone: IChain<'pangoro-testnet-standalone'> = {
  id: 'pangoro-testnet-standalone',
  name: 'Pangoro',
  account: '*25519',
  subscanUrl: 'https://pangoro.subscan.io/',
  rpcs: ['wss://pangoro-rpc.darwinia.network'],
} as const;

export const PangoroTestnetWestend: IChain<'pangoro-testnet-westend'> = {
  id: 'pangoro-testnet-westend',
  name: 'Pangoro',
  account: '*25519',
  rpcs: [],
  paraId: 2102,
  relay: { id: 'westend-testnet' },
} as const;

export const PhalaTestnet: IChain<'phala-testnet'> = {
  id: 'phala-testnet',
  name: 'Phala Testnet',
  account: '*25519',
  rpcs: ['wss://poc5.phala.network/ws'],
} as const;

export const PhoenixTestnet: IChain<'phoenix-testnet'> = {
  id: 'phoenix-testnet',
  name: 'Phoenix Mashnet',
  account: '*25519',
  rpcs: [],
} as const;

export const PichiuTestnet: IChain<'pichiu-testnet'> = {
  id: 'pichiu-testnet',
  name: 'Pichiu Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const PolkadexTestnet: IChain<'polkadex-testnet'> = {
  id: 'polkadex-testnet',
  name: 'Polkadex Testnet',
  account: '*25519',
  rpcs: ['wss://blockchain.polkadex.trade'],
} as const;

export const PolymeshTestnet: IChain<'polymesh-testnet'> = {
  id: 'polymesh-testnet',
  name: 'Polymesh Testnet',
  account: '*25519',
  subscanUrl: 'https://polymesh-testnet.subscan.io/',
  rpcs: ['wss://testnet-rpc.polymesh.live'],
} as const;

export const PontemTestnet: IChain<'pontem-testnet'> = {
  id: 'pontem-testnet',
  name: 'Pontem',
  account: '*25519',
  rpcs: [],
} as const;

export const PrismTestnet: IChain<'prism-testnet'> = {
  id: 'prism-testnet',
  name: 'Prism',
  account: '*25519',
  rpcs: [],
} as const;

export const RealisTestnet: IChain<'realis-testnet'> = {
  id: 'realis-testnet',
  name: 'Realis.Network',
  account: '*25519',
  rpcs: [],
} as const;

export const RiochainTestnet: IChain<'riochain-testnet'> = {
  id: 'riochain-testnet',
  name: 'RioChain Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const RobonomicsTestnet: IChain<'robonomics-testnet'> = {
  id: 'robonomics-testnet',
  name: 'Robonomics Testnet',
  account: '*25519',
  rpcs: ['wss://rococo.rpc.robonomics.network'],
  paraId: 2048,
  relay: { id: 'rococo-testnet' },
} as const;

export const RocfinityTestnet: IChain<'rocfinity-testnet'> = {
  id: 'rocfinity-testnet',
  name: 'Rocfinity',
  account: '*25519',
  rpcs: ['wss://rpc.rococo.efinity.io'],
  paraId: 2021,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoAcurastTestnet: IChain<'rococo-acurast-testnet'> = {
  id: 'rococo-acurast-testnet',
  name: 'Acurast',
  account: '*25519',
  rpcs: ['wss://ws.acurast-rococo.diamond.papers.tech'],
  paraId: 4191,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoAmplitudeTestnet: IChain<'rococo-amplitude-testnet'> = {
  id: 'rococo-amplitude-testnet',
  name: 'Amplitude Testnet',
  account: '*25519',
  rpcs: ['wss://rpc-foucoco.pendulumchain.tech'],
  paraId: 2124,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoAventusTestnet: IChain<'rococo-aventus-testnet'> = {
  id: 'rococo-aventus-testnet',
  name: 'Aventus Testnet',
  account: '*25519',
  rpcs: [],
  paraId: 2056,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoBajunTestnet: IChain<'rococo-bajun-testnet'> = {
  id: 'rococo-bajun-testnet',
  name: 'Bajun Testnet',
  account: '*25519',
  rpcs: ['wss://rpc-rococo.bajun.network'],
  paraId: 2119,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoBasiliskTestnet: IChain<'rococo-basilisk-testnet'> = {
  id: 'rococo-basilisk-testnet',
  name: 'Basilisk Testnet',
  account: '*25519',
  rpcs: ['wss://rococo-basilisk-rpc.hydration.dev'],
  paraId: 2090,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoBifrostTestnet: IChain<'rococo-bifrost-testnet'> = {
  id: 'rococo-bifrost-testnet',
  name: 'Bifrost Testnet',
  account: '*25519',
  rpcs: ['wss://bifrost-rpc.rococo.liebi.com/ws'],
  paraId: 2030,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoBitgreenTestnet: IChain<'rococo-bitgreen-testnet'> = {
  id: 'rococo-bitgreen-testnet',
  name: 'Bitgreen Testnet',
  account: '*25519',
  rpcs: ['wss://staging.bitgreen.org'],
  paraId: 20048,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoBridgehubTestnet: IChain<'rococo-bridgehub-testnet'> = {
  id: 'rococo-bridgehub-testnet',
  name: 'Bridgehub Rococo',
  account: '*25519',
  rpcs: ['wss://rococo-bridge-hub-rpc.polkadot.io'],
  paraId: 1013,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoCatalystTestnet: IChain<'rococo-catalyst-testnet'> = {
  id: 'rococo-catalyst-testnet',
  name: 'Catalyst',
  account: '*25519',
  rpcs: ['wss://fullnode.catalyst.cntrfg.com'],
  paraId: 2031,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoConftiTestnet: IChain<'rococo-confti-testnet'> = {
  id: 'rococo-confti-testnet',
  name: 'Confti',
  account: '*25519',
  rpcs: [],
  paraId: 4094,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoContractsTestnet: IChain<'rococo-contracts-testnet'> = {
  id: 'rococo-contracts-testnet',
  name: 'Contracts',
  account: '*25519',
  rpcs: ['wss://rococo-contracts-rpc.polkadot.io'],
  paraId: 1002,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoCrustTestnet: IChain<'rococo-crust-testnet'> = {
  id: 'rococo-crust-testnet',
  name: 'Crust Testnet',
  account: '*25519',
  rpcs: ['wss://rococo-csm.crustcode.com/'],
  paraId: 2012,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoDaliTestnet: IChain<'rococo-dali-testnet'> = {
  id: 'rococo-dali-testnet',
  name: 'Dali',
  account: '*25519',
  subscanUrl: 'https://dali.subscan.io/',
  rpcs: ['wss://rpc.composablefinance.ninja'],
  paraId: 2087,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoDolphinTestnet: IChain<'rococo-dolphin-testnet'> = {
  id: 'rococo-dolphin-testnet',
  name: 'Dolphin',
  account: '*25519',
  subscanUrl: 'https://dolphin.subscan.io/',
  rpcs: ['wss://ws.rococo.dolphin.engineering'],
  paraId: 2084,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoEthosTestnet: IChain<'rococo-ethos-testnet'> = {
  id: 'rococo-ethos-testnet',
  name: 'Ethos',
  account: '*25519',
  rpcs: ['wss://ethos.jur.io'],
  paraId: 2095,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoFrequencyTestnet: IChain<'rococo-frequency-testnet'> = {
  id: 'rococo-frequency-testnet',
  name: 'Frequency Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.rococo.frequency.xyz'],
  paraId: 4044,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoGenshiroTestnet: IChain<'rococo-genshiro-testnet'> = {
  id: 'rococo-genshiro-testnet',
  name: 'Genshiro Testnet',
  account: '*25519',
  rpcs: ['wss://parachain-testnet.equilab.io/rococo/collator/node1/wss'],
  paraId: 2024,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoHydraDxTestnet: IChain<'rococo-hydra-dx-testnet'> = {
  id: 'rococo-hydra-dx-testnet',
  name: 'HydraDX Testnet',
  account: '*25519',
  rpcs: ['wss://rococo-hydradx-rpc.hydration.dev'],
  paraId: 2034,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoImbueTestnet: IChain<'rococo-imbue-testnet'> = {
  id: 'rococo-imbue-testnet',
  name: 'Imbue Testnet',
  account: '*25519',
  rpcs: ['wss://rococo.imbue.network'],
  paraId: 2121,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoIntegriteeTestnet: IChain<'rococo-integritee-testnet'> = {
  id: 'rococo-integritee-testnet',
  name: 'Integritee Testnet',
  account: '*25519',
  rpcs: ['wss://rococo.api.integritee.network'],
  paraId: 3002,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoKabochaTestnet: IChain<'rococo-kabocha-testnet'> = {
  id: 'rococo-kabocha-testnet',
  name: 'Kabocha Testnet',
  account: '*25519',
  rpcs: ['wss://kabsoup1.jelliedowl.com'],
  paraId: 2113,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoKiltTestnet: IChain<'rococo-kilt-testnet'> = {
  id: 'rococo-kilt-testnet',
  name: 'Rilt',
  account: '*25519',
  rpcs: ['wss://rococo.kilt.io'],
  paraId: 2086,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoLitentryTestnet: IChain<'rococo-litentry-testnet'> = {
  id: 'rococo-litentry-testnet',
  name: 'Litentry Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.rococo-parachain-sg.litentry.io'],
  paraId: 2106,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoMangataTestnet: IChain<'rococo-mangata-testnet'> = {
  id: 'rococo-mangata-testnet',
  name: 'MangataX Testnet',
  account: '*25519',
  subscanUrl: 'https://mangata-testnet.subscan.io/',
  rpcs: ['wss://roccoco-testnet-collator-01.mangatafinance.cloud'],
  paraId: 2110,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoMd5Testnet: IChain<'rococo-md-5-testnet'> = {
  id: 'rococo-md-5-testnet',
  name: 'MD5',
  account: '*25519',
  rpcs: ['wss://c1.md5.network'],
  paraId: 2089,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoMoonsamaTestnet: IChain<'rococo-moonsama-testnet'> = {
  id: 'rococo-moonsama-testnet',
  name: 'Moonsama',
  account: '*25519',
  rpcs: [],
  paraId: 2055,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoNodleTestnet: IChain<'rococo-nodle-testnet'> = {
  id: 'rococo-nodle-testnet',
  name: 'Nodle Testnet',
  account: '*25519',
  rpcs: ['wss://nodle-paradis.api.onfinality.io/public-ws'],
  paraId: 2026,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoOriginTrailParachainTestnet: IChain<'rococo-origin-trail-parachain-testnet'> =
  {
    id: 'rococo-origin-trail-parachain-testnet',
    name: 'OriginTrail Testnet',
    account: '*25519',
    rpcs: ['wss://parachain-testnet-rpc.origin-trail.network/'],
    paraId: 2043,
    relay: { id: 'rococo-testnet' },
  } as const;

export const RococoPangolinTestnet: IChain<'rococo-pangolin-testnet'> = {
  id: 'rococo-pangolin-testnet',
  name: 'Pangolin',
  account: '*25519',
  subscanUrl: 'https://pangolin-parachain.subscan.io/',
  rpcs: ['wss://pangolin-parachain-rpc.darwinia.network'],
  paraId: 2105,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoSoraTestnet: IChain<'rococo-sora-testnet'> = {
  id: 'rococo-sora-testnet',
  name: 'Sora Rococo',
  account: '*25519',
  rpcs: ['wss://ws.parachain-collator-1.c1.stg1.sora2.soramitsu.co.jp'],
  paraId: 2011,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoSpreehafenTestnet: IChain<'rococo-spreehafen-testnet'> = {
  id: 'rococo-spreehafen-testnet',
  name: 'Spreehafen',
  account: '*25519',
  rpcs: ['wss://spreehafen.datahighway.com'],
  paraId: 2116,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoStatemintTestnet: IChain<'rococo-statemint-testnet'> = {
  id: 'rococo-statemint-testnet',
  name: 'Rockmine',
  account: '*25519',
  rpcs: ['wss://rococo-rockmine-rpc.polkadot.io'],
  paraId: 1000,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoSubsocialTestnet: IChain<'rococo-subsocial-testnet'> = {
  id: 'rococo-subsocial-testnet',
  name: 'SoonsocialX',
  account: '*25519',
  rpcs: ['wss://rco-para.subsocial.network'],
  paraId: 2100,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoSubzeroTestnet: IChain<'rococo-subzero-testnet'> = {
  id: 'rococo-subzero-testnet',
  name: 'Subzero Testnet',
  account: '*25519',
  rpcs: ['wss://staging.para.sub.zero.io'],
  paraId: 4040,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoTestnet: IChain<'rococo-testnet'> = {
  id: 'rococo-testnet',
  name: 'Rococo',
  account: '*25519',
  subscanUrl: 'https://rococo.subscan.io/',
  rpcs: ['wss://rococo-rpc.polkadot.io'],
} as const;

export const RococoTinkernetTestnet: IChain<'rococo-tinkernet-testnet'> = {
  id: 'rococo-tinkernet-testnet',
  name: 'Tinkernet',
  account: '*25519',
  rpcs: [],
  paraId: 2125,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoTuringTestnet: IChain<'rococo-turing-testnet'> = {
  id: 'rococo-turing-testnet',
  name: 'Turing Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.turing-staging.oak.tech'],
  paraId: 2114,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoUnitNetworkTestnet: IChain<'rococo-unit-network-testnet'> = {
  id: 'rococo-unit-network-testnet',
  name: 'Unit',
  account: '*25519',
  rpcs: ['wss://www.unitnode3.info:443'],
  paraId: 4168,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoVirtoTestnet: IChain<'rococo-virto-testnet'> = {
  id: 'rococo-virto-testnet',
  name: 'Virto',
  account: '*25519',
  rpcs: [],
  paraId: 3003,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoWatrTestnet: IChain<'rococo-watr-testnet'> = {
  id: 'rococo-watr-testnet',
  name: 'Watr',
  account: '*25519',
  rpcs: ['wss://rpc.dev.watr.org'],
  paraId: 2058,
  relay: { id: 'rococo-testnet' },
} as const;

export const RococoZeitgeistTestnet: IChain<'rococo-zeitgeist-testnet'> = {
  id: 'rococo-zeitgeist-testnet',
  name: 'Zeitgeist Rococo Battery Station',
  account: '*25519',
  rpcs: ['wss://roc.zeitgeist.pm'],
  paraId: 2101,
  relay: { id: 'rococo-testnet' },
} as const;

export const SherpaxTestnet: IChain<'sherpax-testnet'> = {
  id: 'sherpax-testnet',
  name: 'Sherpax Testnet',
  account: '*25519',
  rpcs: ['wss://sherpax-testnet.chainx.org'],
} as const;

export const ShibuyaTestnet: IChain<'shibuya-testnet'> = {
  id: 'shibuya-testnet',
  name: 'Shibuya',
  account: '*25519',
  subscanUrl: 'https://shibuya.subscan.io/',
  rpcs: ['wss://rpc.shibuya.astar.network', 'wss://shibuya-rpc.dwellir.com'],
} as const;

export const SkyekiwiTestnet: IChain<'skyekiwi-testnet'> = {
  id: 'skyekiwi-testnet',
  name: 'SkyeKiwi',
  account: '*25519',
  rpcs: ['wss://staging.rpc.skye.kiwi'],
} as const;

export const SnowbridgeTestnet: IChain<'snowbridge-testnet'> = {
  id: 'snowbridge-testnet',
  name: 'Snowbridge',
  account: '*25519',
  rpcs: ['wss://rococo-rpc.snowbridge.network'],
  paraId: 3016,
  relay: { id: 'rococo-testnet' },
} as const;

export const SoonsocialTestnet: IChain<'soonsocial-testnet'> = {
  id: 'soonsocial-testnet',
  name: 'Soonsocial',
  account: '*25519',
  rpcs: [],
} as const;

export const SoraSubstrateTestnet: IChain<'sora-substrate-testnet'> = {
  id: 'sora-substrate-testnet',
  name: 'Sora Testnet',
  account: '*25519',
  rpcs: [
    'wss://ws.framenode-1.s1.stg1.sora2.soramitsu.co.jp',
    'wss://ws.framenode-2.s1.stg1.sora2.soramitsu.co.jp',
    'wss://ws.framenode-3.s2.stg1.sora2.soramitsu.co.jp',
    'wss://ws.framenode-4.s2.stg1.sora2.soramitsu.co.jp',
  ],
} as const;

export const StagexTestnet: IChain<'stagex-testnet'> = {
  id: 'stagex-testnet',
  name: 'Stagex',
  account: '*25519',
  rpcs: ['wss://s-ui.kapex.network'],
  paraId: 2007,
  relay: { id: 'rococo-testnet' },
} as const;

export const SubdaoTestnet: IChain<'subdao-testnet'> = {
  id: 'subdao-testnet',
  name: 'SubDAO Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const SubgameTestnet: IChain<'subgame-testnet'> = {
  id: 'subgame-testnet',
  name: 'SubGame Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const SubspaceFarmnetTestnet: IChain<'subspace-farmnet-testnet'> = {
  id: 'subspace-farmnet-testnet',
  name: 'Subspace Farmnet',
  account: '*25519',
  rpcs: [],
} as const;

export const SubspaceGemini1Testnet: IChain<'subspace-gemini-1-testnet'> = {
  id: 'subspace-gemini-1-testnet',
  name: 'Subspace Gemini',
  account: '*25519',
  rpcs: ['wss://eu.gemini-1b.subspace.network/ws'],
} as const;

export const SubspaceGemini2ATestnet: IChain<'subspace-gemini-2-a-testnet'> = {
  id: 'subspace-gemini-2-a-testnet',
  name: 'Subspace Gemini 2a',
  account: '*25519',
  rpcs: [
    'wss://eu-0.gemini-2a.subspace.network/ws',
    'wss://eu-1.gemini-2a.subspace.network/ws',
    'wss://eu-2.gemini-2a.subspace.network/ws',
    'wss://subspace-gemini-2a-rpc.dwellir.com',
  ],
} as const;

export const SubspaceTestnet: IChain<'subspace-testnet'> = {
  id: 'subspace-testnet',
  name: 'Subspace',
  account: '*25519',
  rpcs: ['wss://test-rpc.subspace.network'],
} as const;

export const SubstrateTestnet: IChain<'substrate-testnet'> = {
  id: 'substrate-testnet',
  name: 'Flaming Fir',
  account: '*25519',
  rpcs: [],
} as const;

export const SumiStagingTestnet: IChain<'sumi-staging-testnet'> = {
  id: 'sumi-staging-testnet',
  name: 'SUMI staging testnet',
  account: '*25519',
  rpcs: ['wss://testnet1.sumi.xyz'],
} as const;

export const T0RnTestnet: IChain<'t-0-rn-testnet'> = {
  id: 't-0-rn-testnet',
  name: 't0rn',
  account: '*25519',
  rpcs: ['wss://ws.t0rn.io'],
  paraId: 3333,
  relay: { id: 'rococo-testnet' },
} as const;

export const TernoaAlphanetTestnet: IChain<'ternoa-alphanet-testnet'> = {
  id: 'ternoa-alphanet-testnet',
  name: 'Ternoa Alphanet',
  account: '*25519',
  rpcs: ['wss://alphanet.ternoa.com'],
} as const;

export const TernoaTestnet: IChain<'ternoa-testnet'> = {
  id: 'ternoa-testnet',
  name: 'Ternoa Testnet',
  account: '*25519',
  rpcs: ['wss://testnet.ternoa.com/'],
} as const;

export const ThebifrostTestnet: IChain<'thebifrost-testnet'> = {
  id: 'thebifrost-testnet',
  name: 'The Bifrost Testnet',
  account: '*25519',
  rpcs: [
    'wss://public-01.testnet.thebifrost.io/ws',
    'wss://public-02.testnet.thebifrost.io/ws',
  ],
} as const;

export const UniartsTestnet: IChain<'uniarts-testnet'> = {
  id: 'uniarts-testnet',
  name: 'UniArts Testnet',
  account: '*25519',
  rpcs: ['wss://testnet.uniarts.network'],
} as const;

export const UniqueTestnet: IChain<'unique-testnet'> = {
  id: 'unique-testnet',
  name: 'Unique Testnet',
  account: '*25519',
  rpcs: [],
} as const;

export const UnitvTestnet: IChain<'unitv-testnet'> = {
  id: 'unitv-testnet',
  name: 'Unit',
  account: '*25519',
  rpcs: [],
} as const;

export const VaraTestnet: IChain<'vara-testnet'> = {
  id: 'vara-testnet',
  name: 'Vara',
  account: '*25519',
  rpcs: ['wss://rpc.vara-network.io'],
} as const;

export const VodkaTestnet: IChain<'vodka-testnet'> = {
  id: 'vodka-testnet',
  name: 'Vodka',
  account: '*25519',
  rpcs: [],
} as const;

export const Web3GamesTestnet: IChain<'web-3-games-testnet'> = {
  id: 'web-3-games-testnet',
  name: 'Web3Games',
  account: '*25519',
  rpcs: ['wss://devnet.web3games.org'],
} as const;

export const WestendBridgeHubTestnet: IChain<'westend-bridge-hub-testnet'> = {
  id: 'westend-bridge-hub-testnet',
  name: 'BridgeHub Westend',
  account: '*25519',
  rpcs: ['wss://westend-bridge-hub-rpc.polkadot.io'],
  paraId: 1002,
  relay: { id: 'westend-testnet' },
} as const;

export const WestendCollectivesTestnet: IChain<'westend-collectives-testnet'> =
  {
    id: 'westend-collectives-testnet',
    name: 'Collectives Testnet',
    account: '*25519',
    rpcs: ['wss://westend-collectives-rpc.polkadot.io'],
    paraId: 1001,
    relay: { id: 'westend-testnet' },
  } as const;

export const WestendPichiuTestnet: IChain<'westend-pichiu-testnet'> = {
  id: 'westend-pichiu-testnet',
  name: 'Pichiu Testnet',
  account: '*25519',
  rpcs: ['wss://westend.kylin-node.co.uk'],
  paraId: 2112,
  relay: { id: 'westend-testnet' },
} as const;

export const WestendStandardTestnet: IChain<'westend-standard-testnet'> = {
  id: 'westend-standard-testnet',
  name: 'Standard',
  account: '*25519',
  rpcs: ['wss://rpc.westend.standard.tech'],
  paraId: 2094,
  relay: { id: 'westend-testnet' },
} as const;

export const WestendTestnet: IChain<'westend-testnet'> = {
  id: 'westend-testnet',
  name: 'Westend',
  account: '*25519',
  subscanUrl: 'https://westend.subscan.io/',
  chainspecQrUrl: 'https://metadata.parity.io/qr/westend_specs.png',
  latestMetadataQrUrl:
    'https://metadata.parity.io/qr/westend_metadata_latest.apng',
  rpcs: [
    'wss://westend-rpc.polkadot.io',
    'wss://westend.api.onfinality.io/public-ws',
    'wss://rpc.pinknode.io/westend/explorer',
    'wss://westend-rpc.dwellir.com',
    'wss://westend-rpc-tn.dwellir.com',
    'wss://rpc.dotters.network/westend',
    'wss://rpc.ibp.network/westend',
  ],
} as const;

export const WestmintTestnet: IChain<'westmint-testnet'> = {
  id: 'westmint-testnet',
  name: 'Westmint',
  account: '*25519',
  rpcs: [
    'wss://westmint-rpc.polkadot.io',
    'wss://westmint-rpc.dwellir.com',
    'wss://westmint-rpc-tn.dwellir.com',
  ],
  paraId: 1000,
  relay: { id: 'westend-testnet' },
} as const;

export const WhalaTestnet: IChain<'whala-testnet'> = {
  id: 'whala-testnet',
  name: 'Whala',
  account: '*25519',
  rpcs: [],
  paraId: 2013,
  relay: { id: 'westend-testnet' },
} as const;

export const ZCloakTestnet: IChain<'z-cloak-testnet'> = {
  id: 'z-cloak-testnet',
  name: 'zCloak',
  account: '*25519',
  rpcs: [],
} as const;

export const ZeitgeistTestnet: IChain<'zeitgeist-testnet'> = {
  id: 'zeitgeist-testnet',
  name: 'Zeitgeist Battery Station',
  account: '*25519',
  rpcs: ['wss://bsr.zeitgeist.pm'],
} as const;

export const ZeroTestnet: IChain<'zero-testnet'> = {
  id: 'zero-testnet',
  name: 'Zero Alphaville',
  account: '*25519',
  rpcs: [],
} as const;

export const _3DpassTestnet: IChain<'3-dpass-testnet'> = {
  id: '3-dpass-testnet',
  name: '3DPass Testnet',
  account: '*25519',
  rpcs: ['wss://test-rpc.3dpass.org'],
} as const;
