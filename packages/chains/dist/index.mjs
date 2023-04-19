// src/AlephZero.ts
var AlephZero = {
  id: "AlephZero",
  name: "Aleph Zero",
  ss58Prefix: 42,
  coingeckoId: "aleph-zero",
  explorerUrls: ["https://alephzero.subscan.io/"],
  rpcUrls: ["wss://ws.azero.dev"],
  token: {
    symbol: "ALEPH"
  }
};
var AlephZeroTestnet = {
  id: "AlephZeroTestnet",
  name: "Aleph Zero Testnet",
  ss58Prefix: 42,
  rpcUrls: ["wss://ws.test.azero.dev"],
  explorerUrls: ["https://azero.dev/?rpc=wss%3A%2F%2Fws.test.azero.dev"],
  testnet: true,
  token: {
    symbol: "ALEPH"
  }
};

// src/Astar.ts
var Astar = {
  id: "Astar",
  name: "Astar",
  ss58Prefix: 5,
  rpcUrls: ["wss://astar-rpc.dwellir.com"],
  explorerUrls: ["https://astar.subscan.io"],
  token: {
    symbol: "ASTR"
  }
};
var Shiden = {
  id: "Shiden",
  name: "Shiden",
  ss58Prefix: 5,
  rpcUrls: ["wss://shiden-rpc.dwellir.com"],
  explorerUrls: ["https://shiden.subscan.io"],
  token: {
    symbol: "SDN"
  }
};
var Shibuya = {
  id: "Shibuya",
  name: "Shibuya Testnet",
  testnet: true,
  ss58Prefix: 5,
  rpcUrls: ["wss://shibuya-rpc.dwellir.com"],
  explorerUrls: ["https://shibuya.subscan.io"],
  token: {
    symbol: "SBY"
  }
};

// src/ContractsRococo.ts
var ContractsRococo = {
  id: "ContractsRococo",
  name: "Contracts (Rococo)",
  ss58Prefix: 5,
  rpcUrls: ["wss://rococo-contracts-rpc.polkadot.io"],
  explorerUrls: [
    "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer"
  ],
  testnet: true,
  token: {
    symbol: "ROC"
  }
};

// src/Development.ts
var Development = {
  id: "Development",
  name: "Development",
  ss58Prefix: 5,
  rpcUrls: ["ws://127.0.0.1:9944"],
  explorerUrls: [
    "https://polkadot.js.org/apps/#/explorer?rpc=ws://127.0.0.1:9944"
  ],
  testnet: true,
  token: {
    symbol: "DEV"
  }
};

// src/Phala.ts
var Phala = {
  id: "Phala",
  name: "Phala",
  ss58Prefix: 5,
  rpcUrls: [
    "wss://api.phala.network/ws",
    "wss://phala.api.onfinality.io/public-ws"
  ],
  explorerUrls: ["https://phala.subscan.io"],
  token: {
    symbol: "PHA"
  }
};
var Khala = {
  id: "Khala",
  name: "Khala",
  ss58Prefix: 5,
  rpcUrls: [
    "wss://api.khala.network/ws",
    "wss://khala.api.onfinality.io/public-ws"
  ],
  explorerUrls: ["https://khala.subscan.io"],
  token: {
    symbol: "KHA"
  }
};
var PhalaTestnet = {
  id: "PhalaTestnet",
  name: "Phala Testnet",
  ss58Prefix: 5,
  rpcUrls: [
    "wss://poc5.phala.network/ws#/explorer"
  ],
  explorerUrls: [
    "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpoc5.phala.network%2Fws#/explorer"
  ],
  token: {
    symbol: "KHA"
  }
};

// src/Rococo.ts
var Rococo = {
  id: "Rococo",
  name: "Rococo",
  ss58Prefix: 5,
  rpcUrls: ["wss://rococo-rpc.polkadot.io"],
  explorerUrls: [
    "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/explorer"
  ],
  testnet: true,
  token: {
    symbol: "ROC"
  }
};

// src/index.ts
var Chains = {
  AlephZero,
  AlephZeroTestnet,
  Astar,
  ContractsRococo,
  Development,
  Khala,
  Phala,
  PhalaTestnet,
  Rococo,
  Shibuya,
  Shiden
};
var AllChains = Object.values(Chains);
export {
  AlephZero,
  AlephZeroTestnet,
  AllChains,
  Astar,
  Chains,
  ContractsRococo,
  Development,
  Khala,
  Phala,
  PhalaTestnet,
  Rococo,
  Shibuya,
  Shiden
};
