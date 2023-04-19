"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AlephZero: () => AlephZero,
  AlephZeroTestnet: () => AlephZeroTestnet,
  AllChains: () => AllChains,
  Astar: () => Astar,
  Chains: () => Chains,
  ContractsRococo: () => ContractsRococo,
  Development: () => Development,
  Khala: () => Khala,
  Phala: () => Phala,
  PhalaTestnet: () => PhalaTestnet,
  Rococo: () => Rococo,
  Shibuya: () => Shibuya,
  Shiden: () => Shiden
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
