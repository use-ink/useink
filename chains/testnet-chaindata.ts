import { Chain } from './types.ts';

export const WestendTestnet: Chain = {
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
};

export const RococoTestnet: Chain = {
  id: 'rococo-testnet',
  name: 'Rococo',
  account: '*25519',
  subscanUrl: 'https://rococo.subscan.io/',
  rpcs: ['wss://rococo-rpc.polkadot.io'],
};

export const _3DpassTestnet: Chain = {
  id: '3-dpass-testnet',
  name: '3DPass Testnet',
  account: '*25519',
  rpcs: ['wss://test-rpc.3dpass.org'],
};

export const AjunaTestnet: Chain = {
  id: 'ajuna-testnet',
  name: 'Ajuna Testnet',
  account: '*25519',
  rpcs: ['wss://rpc-test.ajuna.network'],
};

export const AlephTestnet: Chain = {
  id: 'aleph-testnet',
  name: 'Aleph Zero Testnet',
  account: '*25519',
  rpcs: ['wss://ws.test.azero.dev', 'wss://aleph-zero-testnet-rpc.dwellir.com'],
};

export const ArcticTestnetRococo: Chain = {
  id: 'arctic-testnet-rococo',
  name: 'Arctic Testnet',
  account: '*25519',
  rpcs: ['wss://arctic-rococo-rpc.icenetwork.io'],
  paraId: 3015,
  relay: { id: 'rococo-testnet' },
};

export const ArcticTestnetStandalone: Chain = {
  id: 'arctic-testnet-standalone',
  name: 'Arctic Testnet Standalone',
  account: '*25519',
  subscanUrl: 'https://arctic.subscan.io/',
  rpcs: ['wss://arctic-rpc.icenetwork.io:9944'],
};

export const AresGladiosTestnet: Chain = {
  id: 'ares-gladios-testnet',
  name: 'Ares Gladios',
  account: '*25519',
  rpcs: ['wss://gladios.aresprotocol.io'],
};

export const AutomataContextfreeTestnet: Chain = {
  id: 'automata-contextfree-testnet',
  name: 'Automata ContextFree',
  account: '*25519',
  rpcs: [
    'wss://cf-api.ata.network',
    'wss://contextfree.api.onfinality.io/public-ws',
  ],
};

export const BifrostTestnet: Chain = {
  id: 'bifrost-testnet',
  name: 'Bifrost Testnet',
  account: '*25519',
  subscanUrl: 'https://bifrost-testnet.subscan.io/',
  rpcs: [],
};

export const BitcountryTestnet: Chain = {
  id: 'bitcountry-testnet',
  name: 'Bit.Country',
  account: '*25519',
  rpcs: ['wss://tewai-rpc.bit.country'],
};

export const BrainstormTestnet: Chain = {
  id: 'brainstorm-testnet',
  name: 'InvArch Brainstorm',
  account: '*25519',
  rpcs: [],
};

export const CessTestnet: Chain = {
  id: 'cess-testnet',
  name: 'Cess',
  account: '*25519',
  rpcs: ['wss://testnet-rpc0.cess.cloud/ws/'],
};

export const ChainoliTestnet: Chain = {
  id: 'chainoli-testnet',
  name: 'Oli',
  account: '*25519',
  rpcs: [],
  paraId: 4023,
  relay: { id: 'rococo-testnet' },
};

export const CharcoalTestnet: Chain = {
  id: 'charcoal-testnet',
  name: 'Charcoal',
  account: '*25519',
  rpcs: [],
  paraId: 2086,
  relay: { id: 'westend-testnet' },
};

export const CloverTestnet: Chain = {
  id: 'clover-testnet',
  name: 'Clover Testnet',
  account: '*25519',
  subscanUrl: 'https://clover-testnet.subscan.io/',
  rpcs: [],
};

export const CoinversationTestnet: Chain = {
  id: 'coinversation-testnet',
  name: 'Coinversation Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.coinversation.io/'],
};

export const CreditcoinTestnet: Chain = {
  id: 'creditcoin-testnet',
  name: 'Creditcoin Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.testnet.creditcoin.network/ws'],
};

export const CrustMaxwellTestnet: Chain = {
  id: 'crust-maxwell-testnet',
  name: 'Crust Maxwell',
  account: '*25519',
  rpcs: [],
};

export const DatahighwayTestnet: Chain = {
  id: 'datahighway-testnet',
  name: 'Spreehafen',
  account: '*25519',
  rpcs: [],
};

export const DebioTestnet: Chain = {
  id: 'debio-testnet',
  name: 'DeBio Testnet',
  account: '*25519',
  rpcs: ['wss://ws-rpc.testnet.debio.network'],
};

export const DockTestnet: Chain = {
  id: 'dock-testnet',
  name: 'Dock Testnet',
  account: '*25519',
  rpcs: [],
};

export const DolphinTestnet: Chain = {
  id: 'dolphin-testnet',
  name: 'Dolphin',
  account: '*25519',
  subscanUrl: 'https://dolphin.subscan.io/',
  rpcs: [],
};

export const DotmogTestnet: Chain = {
  id: 'dotmog-testnet',
  name: 'DOTMog',
  account: '*25519',
  rpcs: ['wss://mogiway-01.dotmog.com'],
};

export const EdgewareTestnet: Chain = {
  id: 'edgeware-testnet',
  name: 'Beresheet',
  account: '*25519',
  rpcs: ['wss://beresheet.jelliedowl.net'],
};

export const EggnetTestnet: Chain = {
  id: 'eggnet-testnet',
  name: 'Eggnet',
  account: '*25519',
  rpcs: [],
  paraId: 4006,
  relay: { id: 'rococo-testnet' },
};

export const EncointerTestnetRococo: Chain = {
  id: 'encointer-testnet-rococo',
  name: 'Encointer Lietaer',
  account: '*25519',
  rpcs: ['wss://rococo.api.encointer.org'],
  paraId: 1003,
  relay: { id: 'rococo-testnet' },
};

export const EncointerTestnetStandalone: Chain = {
  id: 'encointer-testnet-standalone',
  name: 'Encointer Gesell',
  account: '*25519',
  rpcs: ['wss://gesell.encointer.org'],
};

export const EquilibriumTestnet: Chain = {
  id: 'equilibrium-testnet',
  name: 'Equilibrium Testnet',
  account: '*25519',
  rpcs: [],
};

export const FantourTestnet: Chain = {
  id: 'fantour-testnet',
  name: 'Fantour',
  account: '*25519',
  rpcs: [],
};

export const FerrumTestnet: Chain = {
  id: 'ferrum-testnet',
  name: 'Ferrum',
  account: '*25519',
  rpcs: ['wss://testnet.dev.svcs.ferrumnetwork.io'],
};

export const GalitalTestnet: Chain = {
  id: 'galital-testnet',
  name: 'Galital PC2',
  account: '*25519',
  rpcs: [],
};

export const GaloisTestnet: Chain = {
  id: 'galois-testnet',
  name: 'Galois',
  account: '*25519',
  rpcs: [
    'wss://galois-hk.maiziqianbao.net/ws',
    'wss://galois.maiziqianbao.net/ws',
  ],
};

export const GamepowerTestnet: Chain = {
  id: 'gamepower-testnet',
  name: 'GamePower',
  account: '*25519',
  rpcs: [],
};

export const GeekTestnet: Chain = {
  id: 'geek-testnet',
  name: 'GeekCash',
  account: '*25519',
  rpcs: ['wss://testnet.geekcash.org'],
};

export const GuildTestnet: Chain = {
  id: 'guild-testnet',
  name: 'Guild Testnet',
  account: '*25519',
  rpcs: ['wss://1.oracle.network.guild.xyz'],
};

export const HalongbayTestnet: Chain = {
  id: 'halongbay-testnet',
  name: 'Halongbay',
  account: '*25519',
  rpcs: [],
};

export const HelixstreetTestnet: Chain = {
  id: 'helixstreet-testnet',
  name: 'Helixstreet',
  account: '*25519',
  rpcs: ['wss://rpc-rococo.helixstreet.io'],
  paraId: 3025,
  relay: { id: 'rococo-testnet' },
};

export const IntegriteeTestnet: Chain = {
  id: 'integritee-testnet',
  name: 'Integritee Testnet',
  account: '*25519',
  rpcs: ['wss://teerw1.integritee.network'],
  paraId: 2081,
  relay: { id: 'westend-testnet' },
};

export const InterlayTestnetStandalone: Chain = {
  id: 'interlay-testnet-standalone',
  name: 'Interlay Testnet',
  account: '*25519',
  rpcs: ['wss://api-testnet.interlay.io/parachain/'],
};

export const InterlayTestnetWestend: Chain = {
  id: 'interlay-testnet-westend',
  name: 'Interlay Testnet',
  account: '*25519',
  rpcs: [],
  paraId: 2094,
  relay: { id: 'westend-testnet' },
};

export const IpseTestnet: Chain = {
  id: 'ipse-testnet',
  name: 'Ipse',
  account: '*25519',
  rpcs: [
    'wss://testnet-china.ipse.io',
    'wss://testnet-usa.ipse.io',
    'wss://testnet-europe.ipse.io',
  ],
};

export const JazTestnet: Chain = {
  id: 'jaz-testnet',
  name: 'Artio',
  account: '*25519',
  rpcs: ['wss://ws0.jaz.network'],
};

export const JoystreamTestnet: Chain = {
  id: 'joystream-testnet',
  name: 'Joystream Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.joystream.org:9944', 'wss://joystream-rpc.dwellir.com'],
};

export const JupiterTestnet: Chain = {
  id: 'jupiter-testnet',
  name: 'Jupiter',
  account: '*25519',
  rpcs: [],
};

export const KaruraTestnet: Chain = {
  id: 'karura-testnet',
  name: 'Wendala',
  account: '*25519',
  rpcs: [],
  paraId: 2005,
  relay: { id: 'westend-testnet' },
};

export const KhalaTestnet: Chain = {
  id: 'khala-testnet',
  name: 'Khala Testnet',
  account: '*25519',
  rpcs: [],
};

export const KiltTestnetStandalone: Chain = {
  id: 'kilt-testnet-standalone',
  name: 'KILT Mashnet',
  account: '*25519',
  rpcs: ['wss://full-nodes.kilt.io:9944/'],
};

export const KiltTestnetStandalone2: Chain = {
  id: 'kilt-testnet-standalone-2',
  name: 'KILT Peregrine',
  account: '*25519',
  subscanUrl: 'https://kilt-testnet.subscan.io/',
  rpcs: ['wss://peregrine.kilt.io/parachain-public-ws/'],
};

export const KiltTestnetWestend: Chain = {
  id: 'kilt-testnet-westend',
  name: 'Wilt',
  account: '*25519',
  rpcs: ['wss://westend.kilt.io:9977'],
  paraId: 2085,
  relay: { id: 'westend-testnet' },
};

export const KintsugiTestnet: Chain = {
  id: 'kintsugi-testnet',
  name: 'Kintsugi Testnet',
  account: '*25519',
  rpcs: ['wss://api-dev-kintsugi.interlay.io/parachain'],
};

export const KlugdossierTestnet: Chain = {
  id: 'klugdossier-testnet',
  name: 'Klug Dossier',
  account: '*25519',
  rpcs: [],
};

export const KylinTestnet: Chain = {
  id: 'kylin-testnet',
  name: 'Kylin Testnet',
  account: '*25519',
  rpcs: [],
};

export const LaminarTestnet: Chain = {
  id: 'laminar-testnet',
  name: 'Turbulence',
  account: '*25519',
  rpcs: [],
};

export const LitentryTestnet: Chain = {
  id: 'litentry-testnet',
  name: 'Litentry Testnet',
  account: '*25519',
  rpcs: ['wss://testnet.litentry.io'],
};

export const LogionTestnetStandalone: Chain = {
  id: 'logion-testnet-standalone',
  name: 'Logion Testnet Parachain',
  account: '*25519',
  rpcs: ['wss://chimay.logion.network'],
};

export const LogionTestnetStandalone2: Chain = {
  id: 'logion-testnet-standalone-2',
  name: 'Logion Testnet',
  account: '*25519',
  rpcs: ['wss://test-rpc01.logion.network'],
};

export const MandalaTestnet: Chain = {
  id: 'mandala-testnet',
  name: 'Mandala',
  account: '*25519',
  subscanUrl: 'https://acala-testnet.subscan.io/',
  rpcs: ['wss://mandala.polkawallet.io'],
};

export const MantaTestnet: Chain = {
  id: 'manta-testnet',
  name: 'Manta Testnet',
  account: '*25519',
  rpcs: [],
};

export const MinixTestnet: Chain = {
  id: 'minix-testnet',
  name: 'MiniX Testnet',
  account: '*25519',
  rpcs: [],
};

export const MoonbaseAlphaTestnet: Chain = {
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
};

export const MoonshadowTestnet: Chain = {
  id: 'moonshadow-testnet',
  name: 'Moonshadow',
  account: '*25519',
  rpcs: [],
  paraId: 2002,
  relay: { id: 'westend-testnet' },
};

export const MybankTestnet: Chain = {
  id: 'mybank-testnet',
  name: 'mybank.network',
  account: '*25519',
  rpcs: [],
};

export const MyriadTestnet: Chain = {
  id: 'myriad-testnet',
  name: 'Myriad Testnet',
  account: '*25519',
  rpcs: ['wss://ws-rpc.testnet.myriad.social'],
};

export const NftmartTestnet: Chain = {
  id: 'nftmart-testnet',
  name: 'NFTMart Testnet',
  account: '*25519',
  rpcs: ['wss://dev-ws.nftmart.io', 'wss://staging-ws.nftmart.io'],
};

export const NodleTestnet: Chain = {
  id: 'nodle-testnet',
  name: 'Arcadia',
  account: '*25519',
  rpcs: [],
};

export const OpalTestnet: Chain = {
  id: 'opal-testnet',
  name: 'Opal',
  account: '*25519',
  rpcs: [
    'wss://ws-opal.unique.network',
    'wss://eu-ws-opal.unique.network',
    'wss://us-ws-opal.unique.network',
    'wss://asia-ws-opal.unique.network',
  ],
};

export const OpportunityTestnet: Chain = {
  id: 'opportunity-testnet',
  name: 'Opportunity',
  account: '*25519',
  rpcs: [],
};

export const PangolinTestnet: Chain = {
  id: 'pangolin-testnet',
  name: 'Pangolin',
  account: '*25519',
  subscanUrl: 'https://pangolin.subscan.io/',
  rpcs: ['wss://pangolin-rpc.darwinia.network'],
};

export const PangoroTestnetStandalone: Chain = {
  id: 'pangoro-testnet-standalone',
  name: 'Pangoro',
  account: '*25519',
  subscanUrl: 'https://pangoro.subscan.io/',
  rpcs: ['wss://pangoro-rpc.darwinia.network'],
};

export const PangoroTestnetWestend: Chain = {
  id: 'pangoro-testnet-westend',
  name: 'Pangoro',
  account: '*25519',
  rpcs: [],
  paraId: 2102,
  relay: { id: 'westend-testnet' },
};

export const PhalaTestnet: Chain = {
  id: 'phala-testnet',
  name: 'Phala Testnet',
  account: '*25519',
  rpcs: ['wss://poc5.phala.network/ws'],
};

export const PhoenixTestnet: Chain = {
  id: 'phoenix-testnet',
  name: 'Phoenix Mashnet',
  account: '*25519',
  rpcs: [],
};

export const PichiuTestnet: Chain = {
  id: 'pichiu-testnet',
  name: 'Pichiu Testnet',
  account: '*25519',
  rpcs: [],
};

export const PolkadexTestnet: Chain = {
  id: 'polkadex-testnet',
  name: 'Polkadex Testnet',
  account: '*25519',
  rpcs: ['wss://blockchain.polkadex.trade'],
};

export const PolymeshTestnet: Chain = {
  id: 'polymesh-testnet',
  name: 'Polymesh Testnet',
  account: '*25519',
  subscanUrl: 'https://polymesh-testnet.subscan.io/',
  rpcs: ['wss://testnet-rpc.polymesh.live'],
};

export const PontemTestnet: Chain = {
  id: 'pontem-testnet',
  name: 'Pontem',
  account: '*25519',
  rpcs: [],
};

export const PrismTestnet: Chain = {
  id: 'prism-testnet',
  name: 'Prism',
  account: '*25519',
  rpcs: [],
};

export const RealisTestnet: Chain = {
  id: 'realis-testnet',
  name: 'Realis.Network',
  account: '*25519',
  rpcs: [],
};

export const RiochainTestnet: Chain = {
  id: 'riochain-testnet',
  name: 'RioChain Testnet',
  account: '*25519',
  rpcs: [],
};

export const RobonomicsTestnet: Chain = {
  id: 'robonomics-testnet',
  name: 'Robonomics Testnet',
  account: '*25519',
  rpcs: ['wss://rococo.rpc.robonomics.network'],
  paraId: 2048,
  relay: { id: 'rococo-testnet' },
};

export const RocfinityTestnet: Chain = {
  id: 'rocfinity-testnet',
  name: 'Rocfinity',
  account: '*25519',
  rpcs: ['wss://rpc.rococo.efinity.io'],
  paraId: 2021,
  relay: { id: 'rococo-testnet' },
};

export const RococoAcurastTestnet: Chain = {
  id: 'rococo-acurast-testnet',
  name: 'Acurast',
  account: '*25519',
  rpcs: ['wss://ws.acurast-rococo.diamond.papers.tech'],
  paraId: 4191,
  relay: { id: 'rococo-testnet' },
};

export const RococoAmplitudeTestnet: Chain = {
  id: 'rococo-amplitude-testnet',
  name: 'Amplitude Testnet',
  account: '*25519',
  rpcs: ['wss://rpc-foucoco.pendulumchain.tech'],
  paraId: 2124,
  relay: { id: 'rococo-testnet' },
};

export const RococoAventusTestnet: Chain = {
  id: 'rococo-aventus-testnet',
  name: 'Aventus Testnet',
  account: '*25519',
  rpcs: [],
  paraId: 2056,
  relay: { id: 'rococo-testnet' },
};

export const RococoBajunTestnet: Chain = {
  id: 'rococo-bajun-testnet',
  name: 'Bajun Testnet',
  account: '*25519',
  rpcs: ['wss://rpc-rococo.bajun.network'],
  paraId: 2119,
  relay: { id: 'rococo-testnet' },
};

export const RococoBasiliskTestnet: Chain = {
  id: 'rococo-basilisk-testnet',
  name: 'Basilisk Testnet',
  account: '*25519',
  rpcs: ['wss://rococo-basilisk-rpc.hydration.dev'],
  paraId: 2090,
  relay: { id: 'rococo-testnet' },
};

export const RococoBifrostTestnet: Chain = {
  id: 'rococo-bifrost-testnet',
  name: 'Bifrost Testnet',
  account: '*25519',
  rpcs: ['wss://bifrost-rpc.rococo.liebi.com/ws'],
  paraId: 2030,
  relay: { id: 'rococo-testnet' },
};

export const RococoBitgreenTestnet: Chain = {
  id: 'rococo-bitgreen-testnet',
  name: 'Bitgreen Testnet',
  account: '*25519',
  rpcs: ['wss://staging.bitgreen.org'],
  paraId: 20048,
  relay: { id: 'rococo-testnet' },
};

export const RococoBridgehubTestnet: Chain = {
  id: 'rococo-bridgehub-testnet',
  name: 'Bridgehub Rococo',
  account: '*25519',
  rpcs: ['wss://rococo-bridge-hub-rpc.polkadot.io'],
  paraId: 1013,
  relay: { id: 'rococo-testnet' },
};

export const RococoCatalystTestnet: Chain = {
  id: 'rococo-catalyst-testnet',
  name: 'Catalyst',
  account: '*25519',
  rpcs: ['wss://fullnode.catalyst.cntrfg.com'],
  paraId: 2031,
  relay: { id: 'rococo-testnet' },
};

export const RococoConftiTestnet: Chain = {
  id: 'rococo-confti-testnet',
  name: 'Confti',
  account: '*25519',
  rpcs: [],
  paraId: 4094,
  relay: { id: 'rococo-testnet' },
};

export const RococoContractsTestnet: Chain = {
  id: 'rococo-contracts-testnet',
  name: 'Contracts',
  account: '*25519',
  rpcs: ['wss://rococo-contracts-rpc.polkadot.io'],
  paraId: 1002,
  relay: { id: 'rococo-testnet' },
};

export const RococoCrustTestnet: Chain = {
  id: 'rococo-crust-testnet',
  name: 'Crust Testnet',
  account: '*25519',
  rpcs: ['wss://rococo-csm.crustcode.com/'],
  paraId: 2012,
  relay: { id: 'rococo-testnet' },
};

export const RococoDaliTestnet: Chain = {
  id: 'rococo-dali-testnet',
  name: 'Dali',
  account: '*25519',
  subscanUrl: 'https://dali.subscan.io/',
  rpcs: ['wss://rpc.composablefinance.ninja'],
  paraId: 2087,
  relay: { id: 'rococo-testnet' },
};

export const RococoDolphinTestnet: Chain = {
  id: 'rococo-dolphin-testnet',
  name: 'Dolphin',
  account: '*25519',
  subscanUrl: 'https://dolphin.subscan.io/',
  rpcs: ['wss://ws.rococo.dolphin.engineering'],
  paraId: 2084,
  relay: { id: 'rococo-testnet' },
};

export const RococoEthosTestnet: Chain = {
  id: 'rococo-ethos-testnet',
  name: 'Ethos',
  account: '*25519',
  rpcs: ['wss://ethos.jur.io'],
  paraId: 2095,
  relay: { id: 'rococo-testnet' },
};

export const RococoFrequencyTestnet: Chain = {
  id: 'rococo-frequency-testnet',
  name: 'Frequency Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.rococo.frequency.xyz'],
  paraId: 4044,
  relay: { id: 'rococo-testnet' },
};

export const RococoGenshiroTestnet: Chain = {
  id: 'rococo-genshiro-testnet',
  name: 'Genshiro Testnet',
  account: '*25519',
  rpcs: ['wss://parachain-testnet.equilab.io/rococo/collator/node1/wss'],
  paraId: 2024,
  relay: { id: 'rococo-testnet' },
};

export const RococoHydraDxTestnet: Chain = {
  id: 'rococo-hydra-dx-testnet',
  name: 'HydraDX Testnet',
  account: '*25519',
  rpcs: ['wss://rococo-hydradx-rpc.hydration.dev'],
  paraId: 2034,
  relay: { id: 'rococo-testnet' },
};

export const RococoImbueTestnet: Chain = {
  id: 'rococo-imbue-testnet',
  name: 'Imbue Testnet',
  account: '*25519',
  rpcs: ['wss://rococo.imbue.network'],
  paraId: 2121,
  relay: { id: 'rococo-testnet' },
};

export const RococoIntegriteeTestnet: Chain = {
  id: 'rococo-integritee-testnet',
  name: 'Integritee Testnet',
  account: '*25519',
  rpcs: ['wss://rococo.api.integritee.network'],
  paraId: 3002,
  relay: { id: 'rococo-testnet' },
};

export const RococoKabochaTestnet: Chain = {
  id: 'rococo-kabocha-testnet',
  name: 'Kabocha Testnet',
  account: '*25519',
  rpcs: ['wss://kabsoup1.jelliedowl.com'],
  paraId: 2113,
  relay: { id: 'rococo-testnet' },
};

export const RococoKiltTestnet: Chain = {
  id: 'rococo-kilt-testnet',
  name: 'Rilt',
  account: '*25519',
  rpcs: ['wss://rococo.kilt.io'],
  paraId: 2086,
  relay: { id: 'rococo-testnet' },
};

export const RococoLitentryTestnet: Chain = {
  id: 'rococo-litentry-testnet',
  name: 'Litentry Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.rococo-parachain-sg.litentry.io'],
  paraId: 2106,
  relay: { id: 'rococo-testnet' },
};

export const RococoMangataTestnet: Chain = {
  id: 'rococo-mangata-testnet',
  name: 'MangataX Testnet',
  account: '*25519',
  subscanUrl: 'https://mangata-testnet.subscan.io/',
  rpcs: ['wss://roccoco-testnet-collator-01.mangatafinance.cloud'],
  paraId: 2110,
  relay: { id: 'rococo-testnet' },
};

export const RococoMd5Testnet: Chain = {
  id: 'rococo-md-5-testnet',
  name: 'MD5',
  account: '*25519',
  rpcs: ['wss://c1.md5.network'],
  paraId: 2089,
  relay: { id: 'rococo-testnet' },
};

export const RococoMoonsamaTestnet: Chain = {
  id: 'rococo-moonsama-testnet',
  name: 'Moonsama',
  account: '*25519',
  rpcs: [],
  paraId: 2055,
  relay: { id: 'rococo-testnet' },
};

export const RococoNodleTestnet: Chain = {
  id: 'rococo-nodle-testnet',
  name: 'Nodle Testnet',
  account: '*25519',
  rpcs: ['wss://nodle-paradis.api.onfinality.io/public-ws'],
  paraId: 2026,
  relay: { id: 'rococo-testnet' },
};

export const RococoOriginTrailParachainTestnet: Chain = {
  id: 'rococo-origin-trail-parachain-testnet',
  name: 'OriginTrail Testnet',
  account: '*25519',
  rpcs: ['wss://parachain-testnet-rpc.origin-trail.network/'],
  paraId: 2043,
  relay: { id: 'rococo-testnet' },
};

export const RococoPangolinTestnet: Chain = {
  id: 'rococo-pangolin-testnet',
  name: 'Pangolin',
  account: '*25519',
  subscanUrl: 'https://pangolin-parachain.subscan.io/',
  rpcs: ['wss://pangolin-parachain-rpc.darwinia.network'],
  paraId: 2105,
  relay: { id: 'rococo-testnet' },
};

export const RococoSoraTestnet: Chain = {
  id: 'rococo-sora-testnet',
  name: 'Sora Rococo',
  account: '*25519',
  rpcs: ['wss://ws.parachain-collator-1.c1.stg1.sora2.soramitsu.co.jp'],
  paraId: 2011,
  relay: { id: 'rococo-testnet' },
};

export const RococoSpreehafenTestnet: Chain = {
  id: 'rococo-spreehafen-testnet',
  name: 'Spreehafen',
  account: '*25519',
  rpcs: ['wss://spreehafen.datahighway.com'],
  paraId: 2116,
  relay: { id: 'rococo-testnet' },
};

export const RococoStatemintTestnet: Chain = {
  id: 'rococo-statemint-testnet',
  name: 'Rockmine',
  account: '*25519',
  rpcs: ['wss://rococo-rockmine-rpc.polkadot.io'],
  paraId: 1000,
  relay: { id: 'rococo-testnet' },
};

export const RococoSubsocialTestnet: Chain = {
  id: 'rococo-subsocial-testnet',
  name: 'SoonsocialX',
  account: '*25519',
  rpcs: ['wss://rco-para.subsocial.network'],
  paraId: 2100,
  relay: { id: 'rococo-testnet' },
};

export const RococoSubzeroTestnet: Chain = {
  id: 'rococo-subzero-testnet',
  name: 'Subzero Testnet',
  account: '*25519',
  rpcs: ['wss://staging.para.sub.zero.io'],
  paraId: 4040,
  relay: { id: 'rococo-testnet' },
};

export const RococoTinkernetTestnet: Chain = {
  id: 'rococo-tinkernet-testnet',
  name: 'Tinkernet',
  account: '*25519',
  rpcs: [],
  paraId: 2125,
  relay: { id: 'rococo-testnet' },
};

export const RococoTuringTestnet: Chain = {
  id: 'rococo-turing-testnet',
  name: 'Turing Testnet',
  account: '*25519',
  rpcs: ['wss://rpc.turing-staging.oak.tech'],
  paraId: 2114,
  relay: { id: 'rococo-testnet' },
};

export const RococoUnitNetworkTestnet: Chain = {
  id: 'rococo-unit-network-testnet',
  name: 'Unit',
  account: '*25519',
  rpcs: ['wss://www.unitnode3.info:443'],
  paraId: 4168,
  relay: { id: 'rococo-testnet' },
};

export const RococoVirtoTestnet: Chain = {
  id: 'rococo-virto-testnet',
  name: 'Virto',
  account: '*25519',
  rpcs: [],
  paraId: 3003,
  relay: { id: 'rococo-testnet' },
};

export const RococoWatrTestnet: Chain = {
  id: 'rococo-watr-testnet',
  name: 'Watr',
  account: '*25519',
  rpcs: ['wss://rpc.dev.watr.org'],
  paraId: 2058,
  relay: { id: 'rococo-testnet' },
};

export const RococoZeitgeistTestnet: Chain = {
  id: 'rococo-zeitgeist-testnet',
  name: 'Zeitgeist Rococo Battery Station',
  account: '*25519',
  rpcs: ['wss://roc.zeitgeist.pm'],
  paraId: 2101,
  relay: { id: 'rococo-testnet' },
};

export const SherpaxTestnet: Chain = {
  id: 'sherpax-testnet',
  name: 'Sherpax Testnet',
  account: '*25519',
  rpcs: ['wss://sherpax-testnet.chainx.org'],
};

export const ShibuyaTestnet: Chain = {
  id: 'shibuya-testnet',
  name: 'Shibuya',
  account: '*25519',
  subscanUrl: 'https://shibuya.subscan.io/',
  rpcs: ['wss://rpc.shibuya.astar.network', 'wss://shibuya-rpc.dwellir.com'],
};

export const SkyekiwiTestnet: Chain = {
  id: 'skyekiwi-testnet',
  name: 'SkyeKiwi',
  account: '*25519',
  rpcs: ['wss://staging.rpc.skye.kiwi'],
};

export const SnowbridgeTestnet: Chain = {
  id: 'snowbridge-testnet',
  name: 'Snowbridge',
  account: '*25519',
  rpcs: ['wss://rococo-rpc.snowbridge.network'],
  paraId: 3016,
  relay: { id: 'rococo-testnet' },
};

export const SoonsocialTestnet: Chain = {
  id: 'soonsocial-testnet',
  name: 'Soonsocial',
  account: '*25519',
  rpcs: [],
};

export const SoraSubstrateTestnet: Chain = {
  id: 'sora-substrate-testnet',
  name: 'Sora Testnet',
  account: '*25519',
  rpcs: [
    'wss://ws.framenode-1.s1.stg1.sora2.soramitsu.co.jp',
    'wss://ws.framenode-2.s1.stg1.sora2.soramitsu.co.jp',
    'wss://ws.framenode-3.s2.stg1.sora2.soramitsu.co.jp',
    'wss://ws.framenode-4.s2.stg1.sora2.soramitsu.co.jp',
  ],
};

export const StagexTestnet: Chain = {
  id: 'stagex-testnet',
  name: 'Stagex',
  account: '*25519',
  rpcs: ['wss://s-ui.kapex.network'],
  paraId: 2007,
  relay: { id: 'rococo-testnet' },
};

export const SubdaoTestnet: Chain = {
  id: 'subdao-testnet',
  name: 'SubDAO Testnet',
  account: '*25519',
  rpcs: [],
};

export const SubgameTestnet: Chain = {
  id: 'subgame-testnet',
  name: 'SubGame Testnet',
  account: '*25519',
  rpcs: [],
};

export const SubspaceFarmnetTestnet: Chain = {
  id: 'subspace-farmnet-testnet',
  name: 'Subspace Farmnet',
  account: '*25519',
  rpcs: [],
};

export const SubspaceGemini1Testnet: Chain = {
  id: 'subspace-gemini-1-testnet',
  name: 'Subspace Gemini',
  account: '*25519',
  rpcs: ['wss://eu.gemini-1b.subspace.network/ws'],
};

export const SubspaceGemini2ATestnet: Chain = {
  id: 'subspace-gemini-2-a-testnet',
  name: 'Subspace Gemini 2a',
  account: '*25519',
  rpcs: [
    'wss://eu-0.gemini-2a.subspace.network/ws',
    'wss://eu-1.gemini-2a.subspace.network/ws',
    'wss://eu-2.gemini-2a.subspace.network/ws',
    'wss://subspace-gemini-2a-rpc.dwellir.com',
  ],
};

export const SubspaceTestnet: Chain = {
  id: 'subspace-testnet',
  name: 'Subspace',
  account: '*25519',
  rpcs: ['wss://test-rpc.subspace.network'],
};

export const SubstrateTestnet: Chain = {
  id: 'substrate-testnet',
  name: 'Flaming Fir',
  account: '*25519',
  rpcs: [],
};

export const T0RnTestnet: Chain = {
  id: 't-0-rn-testnet',
  name: 't0rn',
  account: '*25519',
  rpcs: ['wss://ws.t0rn.io'],
  paraId: 3333,
  relay: { id: 'rococo-testnet' },
};

export const TernoaAlphanetTestnet: Chain = {
  id: 'ternoa-alphanet-testnet',
  name: 'Ternoa Alphanet',
  account: '*25519',
  rpcs: ['wss://alphanet.ternoa.com'],
};

export const TernoaTestnet: Chain = {
  id: 'ternoa-testnet',
  name: 'Ternoa Testnet',
  account: '*25519',
  rpcs: ['wss://testnet.ternoa.com/'],
};

export const ThebifrostTestnet: Chain = {
  id: 'thebifrost-testnet',
  name: 'The Bifrost Testnet',
  account: '*25519',
  rpcs: [
    'wss://public-01.testnet.thebifrost.io/ws',
    'wss://public-02.testnet.thebifrost.io/ws',
  ],
};

export const UniartsTestnet: Chain = {
  id: 'uniarts-testnet',
  name: 'UniArts Testnet',
  account: '*25519',
  rpcs: ['wss://testnet.uniarts.network'],
};

export const UniqueTestnet: Chain = {
  id: 'unique-testnet',
  name: 'Unique Testnet',
  account: '*25519',
  rpcs: [],
};

export const UnitvTestnet: Chain = {
  id: 'unitv-testnet',
  name: 'Unit',
  account: '*25519',
  rpcs: [],
};

export const VaraTestnet: Chain = {
  id: 'vara-testnet',
  name: 'Vara',
  account: '*25519',
  rpcs: ['wss://rpc.vara-network.io'],
};

export const VodkaTestnet: Chain = {
  id: 'vodka-testnet',
  name: 'Vodka',
  account: '*25519',
  rpcs: [],
};

export const Web3GamesTestnet: Chain = {
  id: 'web-3-games-testnet',
  name: 'Web3Games',
  account: '*25519',
  rpcs: ['wss://devnet.web3games.org'],
};

export const WestendBridgeHubTestnet: Chain = {
  id: 'westend-bridge-hub-testnet',
  name: 'BridgeHub Westend',
  account: '*25519',
  rpcs: ['wss://westend-bridge-hub-rpc.polkadot.io'],
  paraId: 1002,
  relay: { id: 'westend-testnet' },
};

export const WestendCollectivesTestnet: Chain = {
  id: 'westend-collectives-testnet',
  name: 'Collectives Testnet',
  account: '*25519',
  rpcs: ['wss://westend-collectives-rpc.polkadot.io'],
  paraId: 1001,
  relay: { id: 'westend-testnet' },
};

export const WestendPichiuTestnet: Chain = {
  id: 'westend-pichiu-testnet',
  name: 'Pichiu Testnet',
  account: '*25519',
  rpcs: ['wss://westend.kylin-node.co.uk'],
  paraId: 2112,
  relay: { id: 'westend-testnet' },
};

export const WestendStandardTestnet: Chain = {
  id: 'westend-standard-testnet',
  name: 'Standard',
  account: '*25519',
  rpcs: ['wss://rpc.westend.standard.tech'],
  paraId: 2094,
  relay: { id: 'westend-testnet' },
};

export const WestmintTestnet: Chain = {
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
};

export const WhalaTestnet: Chain = {
  id: 'whala-testnet',
  name: 'Whala',
  account: '*25519',
  rpcs: [],
  paraId: 2013,
  relay: { id: 'westend-testnet' },
};

export const ZCloakTestnet: Chain = {
  id: 'z-cloak-testnet',
  name: 'zCloak',
  account: '*25519',
  rpcs: [],
};

export const ZeitgeistTestnet: Chain = {
  id: 'zeitgeist-testnet',
  name: 'Zeitgeist Battery Station',
  account: '*25519',
  rpcs: ['wss://bsr.zeitgeist.pm'],
};

export const ZeroTestnet: Chain = {
  id: 'zero-testnet',
  name: 'Zero Alphaville',
  account: '*25519',
  rpcs: [],
};

export const SumiStagingTestnet: Chain = {
  id: 'sumi-staging-testnet',
  name: 'SUMI staging testnet',
  account: '*25519',
  rpcs: ['wss://testnet1.sumi.xyz'],
};

export const AllTestnets = {
  AjunaTestnet,
  AlephTestnet,
  ArcticTestnetRococo,
  ArcticTestnetStandalone,
  AresGladiosTestnet,
  AutomataContextfreeTestnet,
  BifrostTestnet,
  BitcountryTestnet,
  BrainstormTestnet,
  CessTestnet,
  ChainoliTestnet,
  CharcoalTestnet,
  CloverTestnet,
  CoinversationTestnet,
  CreditcoinTestnet,
  CrustMaxwellTestnet,
  DatahighwayTestnet,
  DebioTestnet,
  DockTestnet,
  DolphinTestnet,
  DotmogTestnet,
  EdgewareTestnet,
  EggnetTestnet,
  EncointerTestnetRococo,
  EncointerTestnetStandalone,
  EquilibriumTestnet,
  FantourTestnet,
  FerrumTestnet,
  GalitalTestnet,
  GaloisTestnet,
  GamepowerTestnet,
  GeekTestnet,
  GuildTestnet,
  HalongbayTestnet,
  HelixstreetTestnet,
  IntegriteeTestnet,
  InterlayTestnetStandalone,
  InterlayTestnetWestend,
  IpseTestnet,
  JazTestnet,
  JoystreamTestnet,
  JupiterTestnet,
  KaruraTestnet,
  KhalaTestnet,
  KiltTestnetStandalone,
  KiltTestnetStandalone2,
  KiltTestnetWestend,
  KintsugiTestnet,
  KlugdossierTestnet,
  KylinTestnet,
  LaminarTestnet,
  LitentryTestnet,
  LogionTestnetStandalone,
  LogionTestnetStandalone2,
  MandalaTestnet,
  MantaTestnet,
  MinixTestnet,
  MoonbaseAlphaTestnet,
  MoonshadowTestnet,
  MybankTestnet,
  MyriadTestnet,
  NftmartTestnet,
  NodleTestnet,
  OpalTestnet,
  OpportunityTestnet,
  PangolinTestnet,
  PangoroTestnetStandalone,
  PangoroTestnetWestend,
  PhalaTestnet,
  PhoenixTestnet,
  PichiuTestnet,
  PolkadexTestnet,
  PolymeshTestnet,
  PontemTestnet,
  PrismTestnet,
  RealisTestnet,
  RiochainTestnet,
  RobonomicsTestnet,
  RocfinityTestnet,
  RococoAcurastTestnet,
  RococoAmplitudeTestnet,
  RococoAventusTestnet,
  RococoBajunTestnet,
  RococoBasiliskTestnet,
  RococoBifrostTestnet,
  RococoBitgreenTestnet,
  RococoBridgehubTestnet,
  RococoCatalystTestnet,
  RococoConftiTestnet,
  RococoContractsTestnet,
  RococoCrustTestnet,
  RococoDaliTestnet,
  RococoDolphinTestnet,
  RococoEthosTestnet,
  RococoFrequencyTestnet,
  RococoGenshiroTestnet,
  RococoHydraDxTestnet,
  RococoImbueTestnet,
  RococoIntegriteeTestnet,
  RococoKabochaTestnet,
  RococoKiltTestnet,
  RococoLitentryTestnet,
  RococoMangataTestnet,
  RococoMd5Testnet,
  RococoMoonsamaTestnet,
  RococoNodleTestnet,
  RococoOriginTrailParachainTestnet,
  RococoPangolinTestnet,
  RococoSoraTestnet,
  RococoSpreehafenTestnet,
  RococoStatemintTestnet,
  RococoSubsocialTestnet,
  RococoSubzeroTestnet,
  RococoTestnet,
  RococoTinkernetTestnet,
  RococoTuringTestnet,
  RococoUnitNetworkTestnet,
  RococoVirtoTestnet,
  RococoWatrTestnet,
  RococoZeitgeistTestnet,
  SherpaxTestnet,
  ShibuyaTestnet,
  SkyekiwiTestnet,
  SnowbridgeTestnet,
  SoonsocialTestnet,
  SoraSubstrateTestnet,
  StagexTestnet,
  SubdaoTestnet,
  SubgameTestnet,
  SubspaceFarmnetTestnet,
  SubspaceGemini1Testnet,
  SubspaceGemini2ATestnet,
  SubspaceTestnet,
  SubstrateTestnet,
  SumiStagingTestnet,
  T0RnTestnet,
  TernoaAlphanetTestnet,
  TernoaTestnet,
  ThebifrostTestnet,
  UniartsTestnet,
  UniqueTestnet,
  UnitvTestnet,
  VaraTestnet,
  VodkaTestnet,
  Web3GamesTestnet,
  WestendBridgeHubTestnet,
  WestendCollectivesTestnet,
  WestendPichiuTestnet,
  WestendStandardTestnet,
  WestendTestnet,
  WestmintTestnet,
  WhalaTestnet,
  ZCloakTestnet,
  ZeitgeistTestnet,
  ZeroTestnet,
  _3DpassTestnet,
};

export const PalletContractTestnets = {
  PhalaTestnet,
  RococoContractsTestnet,
  ShibuyaTestnet,
  ZeitgeistTestnet,
  ZeroTestnet,
};
