"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  APIContext: () => APIContext,
  APIProvider: () => APIProvider,
  CallError: () => CallError,
  UseInkProvider: () => UseInkProvider,
  call: () => call,
  decodeContractExecResult: () => decodeContractExecResult,
  decodeError: () => decodeError,
  getExpiredItem: () => getExpiredItem,
  hasAny: () => hasAny,
  isBroadcasting: () => isBroadcasting,
  isDryRun: () => isDryRun,
  isErrored: () => isErrored,
  isFinalized: () => isFinalized,
  isInBlock: () => isInBlock,
  isNone: () => isNone,
  isPendingSignature: () => isPendingSignature,
  pseudoRandomId: () => pseudoRandomId,
  shouldDisable: () => shouldDisable,
  shouldDisableStrict: () => shouldDisableStrict,
  stringNumberToBN: () => stringNumberToBN,
  toContractAbiMessage: () => toContractAbiMessage,
  toRegistryErrorDecoded: () => toRegistryErrorDecoded,
  useAbiMessage: () => useAbiMessage,
  useApi: () => useApi,
  useApis: () => useApis,
  useBalance: () => useBalance,
  useBlockHeader: () => useBlockHeader,
  useBlockHeaders: () => useBlockHeaders,
  useCall: () => useCall,
  useCallSubscription: () => useCallSubscription,
  useChain: () => useChain,
  useChains: () => useChains,
  useConfig: () => useConfig,
  useContract: () => useContract,
  useContractEvents: () => useContractEvents,
  useContractTx: () => useContractTx,
  useDryRun: () => useDryRun,
  useExtension: () => useExtension,
  useInterval: () => useInterval,
  useIsMounted: () => useIsMounted,
  useNotifications: () => useNotifications,
  useTxPaymentInfo: () => useTxPaymentInfo
});
module.exports = __toCommonJS(src_exports);

// src/hooks/contracts/useAbiMessage.ts
var import_react = require("react");

// src/utils/contractTxUtils.ts
var isNone = (tx) => tx.status === "None";
var isDryRun = (tx) => tx.status === "DryRun";
var isPendingSignature = (tx) => tx.status === "PendingSignature";
var isBroadcasting = (tx) => tx.status === "Broadcast";
var isInBlock = (tx) => tx.status === "InBlock";
var hasAny = (tx, ...statuses) => statuses.includes(tx.status);
var isFinalized = (tx) => tx.status === "Finalized";
var isErrored = (tx) => tx.status === "Errored";
var shouldDisable = (tx) => hasAny(tx, "DryRun", "PendingSignature", "Broadcast");
var shouldDisableStrict = (tx) => shouldDisable(tx) || isInBlock(tx);

// src/utils/contracts/decodeContractExecResult.ts
function decodeContractExecResult(result, message, registry) {
  if (result.isErr)
    return { ok: false, error: result.asErr };
  if (!message.returnType)
    return { ok: false, error: void 0 };
  const raw = registry.createTypeUnsafe(
    message.returnType.lookupName || message.returnType.type,
    [result.asOk.data.toU8a(true)],
    { isPedantic: true }
  );
  return { ok: true, value: raw.toHuman().Ok };
}

// src/utils/contracts/call.ts
async function call(contract, abiMessage, caller, args = [], options) {
  const { value, gasLimit, storageDepositLimit } = options || {};
  const apiCaller = contract.api.call.contractsApi;
  if (!apiCaller?.call)
    return;
  const raw = await apiCaller.call(
    caller,
    contract.address,
    value ?? 0n,
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.toU8a(args)
  );
  if (!raw)
    return;
  const decoded = decodeContractExecResult(
    raw.result,
    abiMessage,
    contract.abi.registry
  );
  if (!decoded.ok)
    return decoded;
  const { gasConsumed, gasRequired, storageDeposit } = raw;
  return {
    ok: true,
    value: {
      decoded: decoded.value,
      raw,
      gasConsumed,
      gasRequired,
      storageDeposit
    }
  };
}

// src/utils/contracts/decodeError.ts
var toDefaultMessage = (registryError) => `${registryError?.section}.${registryError?.method}: ${registryError?.docs}`;
var decodeError = ({ error }, { api }, moduleMessages) => {
  if (!error)
    return { message: "Unable to decode result" };
  if (!error.isModule)
    return {};
  const registryError = api?.registry.findMetaError(error.asModule);
  const message = moduleMessages?.[registryError.method] || toDefaultMessage(registryError);
  return { message, registryError };
};

// src/utils/contracts/toContractAbiMessage.ts
var toContractAbiMessage = (contract, message) => {
  const value = contract.abi.messages.find((m) => m.method === message);
  if (!value) {
    const messages = contract?.abi.messages.map((m) => m.method).join(", ");
    const error = `"${message}" not found in metadata.spec.messages: [${messages}]`;
    console.error(error);
    return { ok: false, error };
  }
  return { ok: true, value };
};

// src/utils/contracts/toRegistryErrorDecoded.ts
var toRegistryErrorDecoded = (registry, result) => {
  try {
    return result.isErr && result.asErr.isModule ? registry.findMetaError(result.asErr.asModule) : void 0;
  } catch (e) {
    console.error(e);
    return void 0;
  }
};

// src/constants.ts
var FIVE_SECONDS = 5e3;
var HALF_A_SECOND = 500;

// src/utils/getExpiredItem.ts
var timeFromCreation = (creationTime) => Date.now() - creationTime;
function getExpiredItem(items, expirationPeriod = FIVE_SECONDS) {
  if (expirationPeriod === 0)
    return [];
  return items.filter(
    (item) => timeFromCreation(item.createdAt) >= expirationPeriod
  );
}

// src/utils/parseUnits.ts
var stringNumberToBN = (valWithCommas) => {
  return BigInt(valWithCommas.split(",").join(""));
};

// src/utils/pseudoRandomId.ts
var pseudoRandomId = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce(
  (t2, e) => t2 += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_",
  ""
);

// src/hooks/contracts/useAbiMessage.ts
function useAbiMessage(contract, message) {
  const abiMessage = (0, import_react.useMemo)(() => {
    if (!contract)
      return;
    return toContractAbiMessage(contract, message);
  }, [contract, message]);
  if (!abiMessage || !abiMessage.ok)
    return;
  return abiMessage.value;
}

// src/hooks/contracts/useCall.ts
var import_react7 = require("react");

// src/hooks/useExtension.ts
var import_react6 = require("react");

// src/providers/extension/context.ts
var import_react2 = require("react");

// src/providers/extension/model.ts
var EXTENSION_DEFAULTS = {
  connect: () => null,
  disconnect: () => null,
  account: void 0,
  accounts: void 0,
  extension: void 0,
  setAccount: () => null
};

// src/providers/extension/context.ts
var ExtensionContext = (0, import_react2.createContext)({
  ...EXTENSION_DEFAULTS
});

// src/providers/extension/provider.tsx
var import_react5 = __toESM(require("react"));

// src/providers/config/context.ts
var import_react3 = __toESM(require("react"));

// ../chains/dist/index.mjs
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

// src/providers/config/model.ts
var DEFAULT_CONFIG = {
  dappName: "A dapp built with useInk!",
  chains: [ContractsRococo],
  notifications: {
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND
  },
  contractEvents: {
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND
  }
};

// src/providers/config/context.ts
var ConfigContext = import_react3.default.createContext(DEFAULT_CONFIG);

// src/hooks/useConfig.ts
var import_react4 = require("react");
var useConfig = () => (0, import_react4.useContext)(ConfigContext);

// src/providers/extension/provider.tsx
var import_extension_dapp = require("@polkadot/extension-dapp");
var getAutoConnectAddress = (key) => localStorage.getItem(key);
var ExtensionProvider = ({ children }) => {
  const C = useConfig();
  const [account, setCallerAccount] = import_react5.default.useState();
  const [accounts, setAccounts] = import_react5.default.useState();
  const [extension, setExtension] = import_react5.default.useState();
  const [error, setError] = import_react5.default.useState();
  const originName = C.dappName && C.dappName.trim().length > 0 ? C.dappName : "A dapp built with useink!";
  const enableAutoConnect = import_react5.default.useCallback((address) => {
    localStorage.setItem(originName, address);
  }, [originName]);
  const disableAutoConnect = import_react5.default.useCallback(() => {
    if (getAutoConnectAddress(originName))
      localStorage.removeItem(originName);
  }, [originName]);
  const disconnect = import_react5.default.useCallback(() => {
    disableAutoConnect();
    setAccounts(void 0);
    setCallerAccount(void 0);
    setExtension(void 0);
  }, [originName]);
  const setAccount = import_react5.default.useCallback(
    (newAccount) => {
      (0, import_extension_dapp.web3FromAddress)(newAccount.address).then((ext) => {
        setExtension(ext);
        setCallerAccount(newAccount);
        if (!C.extension?.skipAutoConnect) {
          enableAutoConnect(newAccount.address);
        }
      }).catch((e) => {
        console.error("Account not found in any extensions", e);
        setError("AccountNotFound" /* AccountNotFound */);
      });
    },
    [C.extension?.skipAutoConnect]
  );
  const connect = import_react5.default.useCallback(async () => {
    await (0, import_extension_dapp.web3Enable)(originName);
    const allAccounts = await (0, import_extension_dapp.web3Accounts)();
    if (!allAccounts.length) {
      setAccounts([]);
      console.error("No accounts found for connected extensions");
      return;
    }
    setAccounts(allAccounts);
    if (!account) {
      const autoConnectAddress = getAutoConnectAddress(originName);
      const initialAccount = !C.extension?.skipAutoConnect ? allAccounts.find((a) => a.address === autoConnectAddress) || allAccounts[0] : allAccounts[0];
      if (!initialAccount) {
        console.error("Account undefined");
        return;
      }
      if (!C.extension?.skipAutoConnect && initialAccount) {
        enableAutoConnect(initialAccount.address);
      }
      (0, import_extension_dapp.web3FromAddress)(initialAccount.address).then((ext) => {
        setCallerAccount(initialAccount);
        setExtension(ext);
      }).catch((e) => {
        console.error("connection error", e);
      });
    }
  }, []);
  import_react5.default.useEffect(() => {
    if (getAutoConnectAddress(originName)) {
      connect();
      return;
    }
    disconnect();
  }, []);
  return /* @__PURE__ */ import_react5.default.createElement(
    ExtensionContext.Provider,
    {
      value: {
        account,
        accounts,
        connect,
        disconnect,
        error,
        extension,
        setAccount
      }
    },
    children
  );
};

// src/hooks/useExtension.ts
var useExtension = () => (0, import_react6.useContext)(ExtensionContext);

// src/hooks/contracts/useCall.ts
var CallError = /* @__PURE__ */ ((CallError2) => {
  CallError2["ContractUndefined"] = "Contract is undefined";
  CallError2["InvalidAbiMessage"] = "Invalid ABI Message";
  CallError2["NoResponse"] = "No response";
  return CallError2;
})(CallError || {});
function useCall(contract, message) {
  const [result, setResult] = (0, import_react7.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react7.useState)(false);
  const abiMessage = useAbiMessage(contract, message);
  const { account } = useExtension();
  const send = (0, import_react7.useCallback)(
    async (args, options, caller) => {
      const callingAddress = caller ? caller : account?.address;
      if (!abiMessage || !contract || !callingAddress)
        return;
      try {
        setIsSubmitting(true);
        const callResult = await call(
          contract,
          abiMessage,
          callingAddress,
          args,
          options
        );
        setResult(callResult);
        setIsSubmitting(false);
        return callResult;
      } catch (e) {
        console.error(e);
        setIsSubmitting(false);
        return;
      }
    },
    [account, abiMessage]
  );
  return { send, isSubmitting, result };
}

// src/hooks/contracts/useCallSubscription.ts
var import_react12 = require("react");

// src/hooks/substrate/useBlockHeader.ts
var import_react11 = require("react");

// src/providers/blockHeader/context.ts
var import_react8 = require("react");

// src/providers/blockHeader/model.ts
var BLOCK_HEADER_DEFAULTS = {};

// src/providers/blockHeader/context.ts
var BlockHeaderContext = (0, import_react8.createContext)({
  ...BLOCK_HEADER_DEFAULTS
});

// src/providers/blockHeader/provider.tsx
var import_react9 = __toESM(require("react"));

// src/providers/blockHeader/reducer.ts
function chainBlockHeaderReducer(state, action) {
  switch (action.type) {
    case "ADD_CHAIN_BLOCK_HEADER":
      return {
        ...state,
        [action.chainId]: action.blockHeader
      };
  }
}

// src/providers/blockHeader/provider.tsx
var toBlockNumber = (valWithComma) => parseInt(`${valWithComma?.split(",").join("")}`);
var BlockHeaderProvider = ({
  children
}) => {
  const chainApis = useApis();
  const [chainBlockHeaders, dispatch] = (0, import_react9.useReducer)(
    chainBlockHeaderReducer,
    {}
  );
  const chainIds = (0, import_react9.useMemo)(
    () => chainApis.apis ? Object.keys(chainApis.apis) : [],
    [chainApis]
  );
  (0, import_react9.useEffect)(() => {
    function listenToBlocks() {
      return chainIds.map((chainId) => {
        return chainApis?.apis?.[chainId]?.api?.rpc.chain.subscribeNewHeads(
          (header) => {
            try {
              const blockNumber = toBlockNumber(
                header.number.toHuman()?.toString()
              );
              blockNumber && dispatch({
                type: "ADD_CHAIN_BLOCK_HEADER",
                chainId,
                blockHeader: { blockNumber, header }
              });
            } catch (e) {
              console.error(e);
            }
          }
        );
      });
    }
    let unsubFuncs;
    Promise.all(listenToBlocks()).then((unsubs) => unsubFuncs = unsubs);
    return () => {
      unsubFuncs && unsubFuncs.forEach((unsub) => unsub && unsub());
    };
  }, [chainApis]);
  return /* @__PURE__ */ import_react9.default.createElement(BlockHeaderContext.Provider, { value: chainBlockHeaders }, children);
};

// src/hooks/useChain.ts
var import_react10 = require("react");
var useChain = (chainId) => {
  const { chains } = useConfig();
  return (0, import_react10.useMemo)(() => {
    return chainId ? chains.find((c) => c.id === chainId) : chains[0];
  }, [chains, chainId]);
};

// src/hooks/substrate/useBlockHeader.ts
var useBlockHeader = (chainId) => {
  const chain = useChain(chainId);
  return chain ? (0, import_react11.useContext)(BlockHeaderContext)[chain.id] : void 0;
};
var useBlockHeaders = () => (0, import_react11.useContext)(BlockHeaderContext);

// src/hooks/contracts/useCallSubscription.ts
function useCallSubscription(chainContract, message, args = [], options, caller) {
  const call2 = useCall(chainContract?.contract, message);
  const blockNumber = useBlockHeader(chainContract?.chainId)?.blockNumber;
  (0, import_react12.useEffect)(() => {
    call2.send(args, options, caller);
  }, [blockNumber]);
  return call2;
}

// src/hooks/contracts/useContract.ts
var import_api_contract = require("@polkadot/api-contract");
var import_react16 = require("react");

// src/providers/api/context.ts
var import_react13 = require("react");
var APIContext = (0, import_react13.createContext)({
  apis: {}
});

// src/providers/api/provider.tsx
var import_react14 = __toESM(require("react"));
var import_api = require("@polkadot/api");

// src/providers/api/reducer.ts
function apiProvidersReducer(state, action) {
  switch (action.type) {
    case "ADD_API_PROVIDER":
      return {
        ...state,
        [action.chainId]: action.apiProvider
      };
  }
}

// src/providers/api/provider.tsx
var APIProvider = ({
  children
}) => {
  const chains = useChains();
  const [apis, dispatch] = (0, import_react14.useReducer)(apiProvidersReducer, {});
  (0, import_react14.useEffect)(() => {
    chains.forEach((chain) => {
      const provider = new import_api.WsProvider(chain.rpcUrls[0]);
      import_api.ApiPromise.create({ provider }).then((api) => {
        dispatch({
          type: "ADD_API_PROVIDER",
          chainId: chain.id,
          apiProvider: { api, provider }
        });
      });
    });
  }, [chains]);
  return /* @__PURE__ */ import_react14.default.createElement(APIContext.Provider, { value: { apis }, children });
};

// src/hooks/useApi.ts
var import_react15 = require("react");
var useApis = () => (0, import_react15.useContext)(APIContext);
var useApi = (chainId) => chainId ? useApis()?.apis?.[chainId] : void 0;

// src/hooks/contracts/useContract.ts
function useContract(address, metadata, chainId) {
  const [contract, setContract] = (0, import_react16.useState)();
  const chainConfig = useChain(chainId);
  const { api } = useApi(chainConfig?.id) || {};
  const abi = (0, import_react16.useMemo)(
    () => api && new import_api_contract.Abi(metadata, api.registry.getChainProperties()),
    [api]
  );
  (0, import_react16.useEffect)(() => {
    try {
      api && abi && setContract(new import_api_contract.ContractPromise(api, abi, address));
    } catch (err) {
      console.error("Couldn't create contract instance: ", err);
    }
  }, [abi, address, api]);
  return chainConfig ? { chainId: chainConfig.id, contract } : void 0;
}

// src/hooks/contracts/useContractEvents.ts
var import_react21 = require("react");

// src/providers/contractEvents/context.ts
var import_react17 = require("react");

// src/providers/contractEvents/model.ts
var DEFAULT_CONTRACT_EVENTS = {};

// src/providers/contractEvents/context.ts
var ContractEventsContext = (0, import_react17.createContext)({
  events: DEFAULT_CONTRACT_EVENTS,
  addContractEvent: () => null,
  removeContractEvent: () => null
});

// src/providers/contractEvents/provider.tsx
var import_react19 = __toESM(require("react"));

// src/hooks/useIsMounted.ts
var import_react18 = __toESM(require("react"));
function useIsMounted() {
  const isMounted = import_react18.default.useRef(false);
  import_react18.default.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return import_react18.default.useCallback(() => isMounted.current, []);
}

// src/providers/contractEvents/reducer.ts
function contractEventReducer(state, action) {
  switch (action.type) {
    case "ADD_CONTRACT_EVENT":
      return {
        ...state,
        [action.address]: [...state[action.address] || [], action.event]
      };
    case "REMOVE_CONTRACT_EVENT": {
      const contractEvents = state[action.address];
      if (!contractEvents)
        return state;
      const idx = contractEvents.findIndex((e) => e.id === action.eventId);
      if (idx < 0)
        return state;
      const newContractState = [
        ...contractEvents.slice(0, idx),
        ...contractEvents.slice(idx + 1, contractEvents.length)
      ];
      return {
        ...state,
        [action.address]: newContractState
      };
    }
  }
}

// src/providers/contractEvents/provider.tsx
var ContractEventsProvider = ({
  children
}) => {
  const [events, dispatch] = import_react19.default.useReducer(
    contractEventReducer,
    DEFAULT_CONTRACT_EVENTS
  );
  const isMounted = useIsMounted();
  const addContractEvent = import_react19.default.useCallback(
    ({ event, address }) => {
      if (isMounted()) {
        dispatch({
          type: "ADD_CONTRACT_EVENT",
          address,
          event: { ...event, id: pseudoRandomId(), createdAt: Date.now() }
        });
      }
    },
    [dispatch]
  );
  const removeContractEvent = import_react19.default.useCallback(
    ({ eventId, address }) => {
      if (isMounted()) {
        dispatch({
          type: "REMOVE_CONTRACT_EVENT",
          address,
          eventId
        });
      }
    },
    [dispatch]
  );
  return /* @__PURE__ */ import_react19.default.createElement(
    ContractEventsContext.Provider,
    {
      value: { addContractEvent, events, removeContractEvent },
      children
    }
  );
};

// src/hooks/useInterval.ts
var import_react20 = require("react");
function useInterval(callback, delay) {
  const savedCallback = (0, import_react20.useRef)(callback);
  (0, import_react20.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]);
  (0, import_react20.useEffect)(() => {
    if (delay === null)
      return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// src/hooks/contracts/useContractEvents.ts
var useContractEvents = (chainContract) => {
  const { events, addContractEvent, removeContractEvent } = (0, import_react21.useContext)(
    ContractEventsContext
  );
  const { blockNumber, header } = useBlockHeader(chainContract?.chainId) || {};
  const C = useConfig();
  const address = chainContract?.contract?.address?.toString() || "";
  const eventsForAddress = chainContract ? events[address] || [] : [];
  (0, import_react21.useEffect)(() => {
    const contract = chainContract?.contract;
    header?.hash && contract && contract.api.at(header?.hash).then((apiAt) => {
      apiAt?.query?.system?.events && apiAt.query.system.events((encodedEvent) => {
        encodedEvent.forEach(({ event }) => {
          if (contract.api.events.contracts?.ContractEmitted && contract.api.events.contracts.ContractEmitted.is(event)) {
            const [contractAddress, contractEvent] = event.data;
            if (address && contractAddress && contractAddress.toString().toLowerCase() === address.toLowerCase()) {
              try {
                const decodedEvent = contract.abi.decodeEvent(
                  contractEvent
                );
                const eventItem = {
                  address,
                  event: {
                    name: decodedEvent.event.identifier,
                    args: decodedEvent.args.map((v) => v.toHuman())
                  }
                };
                addContractEvent(eventItem);
              } catch (e) {
                console.error(e);
              }
            }
          }
        });
      });
    });
  }, [chainContract, blockNumber]);
  useInterval(() => {
    const expiredEvents = getExpiredItem(
      eventsForAddress,
      C.notifications?.expiration || FIVE_SECONDS
    );
    for (const contractEvent of expiredEvents) {
      removeContractEvent({ eventId: contractEvent.id, address });
    }
  }, C.notifications?.checkInterval || HALF_A_SECOND);
  return eventsForAddress;
};

// src/hooks/contracts/useContractTx.ts
var import_react23 = require("react");

// src/hooks/contracts/useDryRun.ts
var import_react22 = require("react");
function useDryRun(contract, message) {
  const { account, extension } = useExtension();
  const [result, setResult] = (0, import_react22.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react22.useState)(false);
  const abiMessage = useAbiMessage(contract, message);
  const send = (0, import_react22.useMemo)(
    () => async (params, options) => {
      const tx = contract?.tx?.[message];
      if (!account || !contract || !extension || !abiMessage || !tx)
        return;
      setIsSubmitting(true);
      try {
        const resp = await call(
          contract,
          abiMessage,
          account.address,
          params,
          options
        );
        if (!resp || !resp.ok)
          return;
        const { gasConsumed, gasRequired, storageDeposit } = resp.value.raw;
        const requiresNoArguments = tx.meta.args.length === 0;
        const { partialFee } = await (requiresNoArguments ? tx(options || {}) : tx(options || {}, params)).paymentInfo(account.address);
        const r = {
          ...resp,
          value: {
            ...resp.value,
            gasRequired,
            gasConsumed,
            storageDeposit,
            partialFee
          }
        };
        setIsSubmitting(false);
        setResult(r);
        return r;
      } catch (e) {
        console.error(e);
        setIsSubmitting(false);
        return;
      }
    },
    [account, extension, contract, abiMessage]
  );
  return {
    send,
    isSubmitting,
    result,
    resolved: Boolean(result && !isSubmitting),
    resetState: () => {
      setIsSubmitting(false);
      setResult(void 0);
    }
  };
}

// src/hooks/contracts/useContractTx.ts
function useContractTx(contract, message) {
  const { account, extension } = useExtension();
  const [status, setStatus] = (0, import_react23.useState)("None");
  const [result, setResult] = (0, import_react23.useState)();
  const abiMessage = useAbiMessage(contract, message);
  const dryRun = useDryRun(contract, message);
  const signAndSend = (0, import_react23.useMemo)(
    () => (params, options, cb) => {
      if (!contract || !account || !extension)
        return;
      dryRun.send(params, options).then((response) => {
        if (!response || !response.ok)
          return;
        setStatus("PendingSignature");
        const { gasRequired } = response.value.raw;
        const contractTx = contract.tx[message];
        if (!contractTx) {
          console.error(`'${message}' not found on contract instance`);
          return;
        }
        contractTx(
          { gasLimit: gasRequired, ...options || {} },
          ...params || []
        ).signAndSend(
          account.address,
          { signer: extension.signer },
          (response2) => {
            setResult(response2);
            setStatus(response2.status.type);
            cb && cb(response2, contract.api);
          }
        ).catch((e) => {
          console.error(e);
          setStatus("None");
        });
      }).catch((e) => {
        console.error(e);
        setStatus("None");
      });
    },
    [account, extension, contract, abiMessage]
  );
  return {
    signAndSend,
    status,
    result,
    resetState: () => {
      setResult(void 0);
      setStatus("None");
    }
  };
}

// src/hooks/contracts/useTxPaymentInfo.ts
var import_react24 = require("react");
function useTxPaymentInfo(contract, message) {
  const [isSubmitting, setIsSubmitting] = (0, import_react24.useState)(false);
  const [result, setResult] = (0, import_react24.useState)();
  const { account } = useExtension();
  const send = (0, import_react24.useCallback)(async (options, params, signerOptions) => {
    const tx = contract?.tx?.[message];
    if (!tx || !account)
      return;
    try {
      setIsSubmitting(true);
      const requiresNoArguments = tx.meta.args.length === 0;
      const paymentInfoResult = await (requiresNoArguments ? tx(options || {}) : tx(options || {}, params)).paymentInfo(account.address, signerOptions);
      setResult(paymentInfoResult);
      setIsSubmitting(false);
      return paymentInfoResult;
    } catch (e) {
      console.error(e);
      setIsSubmitting(false);
      return;
    }
  }, [contract, message, account]);
  return {
    isSubmitting,
    resolved: Boolean(!isSubmitting && result),
    result,
    send
  };
}

// src/hooks/substrate/useBalance.ts
var import_react25 = require("react");
var useBalance = (account, chainId) => {
  const [balance, setBalance] = (0, import_react25.useState)();
  const { blockNumber } = useBlockHeader(chainId) || {};
  const chainConfig = useChain(chainId);
  const chain = useApi(chainConfig?.id);
  (0, import_react25.useEffect)(() => {
    if (!chain?.api || !account || !account.address)
      return;
    chain.api.derive.balances.account(account.address).then(setBalance).catch(console.error);
  }, [blockNumber, account]);
  return balance;
};

// src/hooks/useChains.ts
var useChains = () => useConfig().chains;

// src/hooks/useNotifications.ts
var import_react28 = require("react");

// src/providers/notifications/context.ts
var import_react26 = require("react");

// src/providers/notifications/model.ts
var DEFAULT_NOTIFICATIONS = [];

// src/providers/notifications/context.ts
var NotificationsContext = (0, import_react26.createContext)({
  notifications: DEFAULT_NOTIFICATIONS,
  addNotification: () => null,
  removeNotification: () => null
});

// src/providers/notifications/provider.tsx
var import_react27 = __toESM(require("react"));

// src/providers/notifications/reducer.ts
function notificationReducer(state, action) {
  const chainState = state ?? [];
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.notification];
    case "REMOVE_NOTIFICATION": {
      return chainState.filter((n) => n.id !== action.notificationId);
    }
  }
}

// src/providers/notifications/provider.tsx
var NotificationsProvider = ({
  children
}) => {
  const [notifications, dispatch] = import_react27.default.useReducer(
    notificationReducer,
    DEFAULT_NOTIFICATIONS
  );
  const isMounted = useIsMounted();
  const { account } = useExtension();
  const addNotification = import_react27.default.useCallback(
    ({ notification }) => {
      if (isMounted()) {
        dispatch({
          type: "ADD_NOTIFICATION",
          notification: {
            ...notification,
            id: pseudoRandomId(),
            createdAt: Date.now()
          }
        });
      }
    },
    [dispatch]
  );
  import_react27.default.useEffect(() => {
    if (account) {
      addNotification({
        notification: {
          message: `${account.meta.name || account.address} Connected`,
          type: "WalletConnected"
        }
      });
    }
  }, [account?.address]);
  const removeNotification = import_react27.default.useCallback(
    ({ notificationId }) => {
      if (isMounted()) {
        dispatch({
          type: "REMOVE_NOTIFICATION",
          notificationId
        });
      }
    },
    [dispatch]
  );
  return /* @__PURE__ */ import_react27.default.createElement(
    NotificationsContext.Provider,
    {
      value: { addNotification, notifications, removeNotification },
      children
    }
  );
};

// src/hooks/useNotifications.ts
function useNotifications() {
  const { account } = useExtension();
  const { addNotification, notifications, removeNotification } = (0, import_react28.useContext)(NotificationsContext);
  const config = useConfig();
  const parachainNotifications = (0, import_react28.useMemo)(() => {
    if (!account)
      return [];
    return notifications ?? [];
  }, [notifications, account]);
  useInterval(() => {
    const expiredNotifications = getExpiredItem(
      parachainNotifications,
      config.notifications?.expiration
    );
    for (const notification of expiredNotifications) {
      removeNotification({ notificationId: notification.id });
    }
  }, config.notifications?.checkInterval || HALF_A_SECOND);
  return {
    notifications: parachainNotifications,
    addNotification,
    removeNotification
  };
}

// src/providers/UseInkProvider.tsx
var import_react30 = __toESM(require("react"));

// src/providers/config/provider.tsx
var import_react29 = __toESM(require("react"));
var ConfigProvider = ({
  config,
  children
}) => {
  (0, import_react29.useEffect)(() => {
    if (!config?.chains.length) {
      const error = "Chains not configured in Config Provider";
      console.error(error);
      throw Error(error);
    }
  }, [config?.chains]);
  return /* @__PURE__ */ import_react29.default.createElement(
    ConfigContext.Provider,
    {
      value: { ...DEFAULT_CONFIG, ...config },
      children
    }
  );
};

// src/providers/UseInkProvider.tsx
var UseInkProvider = ({
  children,
  config
}) => /* @__PURE__ */ import_react30.default.createElement(ConfigProvider, { config }, /* @__PURE__ */ import_react30.default.createElement(ExtensionProvider, null, /* @__PURE__ */ import_react30.default.createElement(APIProvider, null, /* @__PURE__ */ import_react30.default.createElement(BlockHeaderProvider, null, /* @__PURE__ */ import_react30.default.createElement(ContractEventsProvider, null, /* @__PURE__ */ import_react30.default.createElement(NotificationsProvider, null, children))))));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APIContext,
  APIProvider,
  CallError,
  UseInkProvider,
  call,
  decodeContractExecResult,
  decodeError,
  getExpiredItem,
  hasAny,
  isBroadcasting,
  isDryRun,
  isErrored,
  isFinalized,
  isInBlock,
  isNone,
  isPendingSignature,
  pseudoRandomId,
  shouldDisable,
  shouldDisableStrict,
  stringNumberToBN,
  toContractAbiMessage,
  toRegistryErrorDecoded,
  useAbiMessage,
  useApi,
  useApis,
  useBalance,
  useBlockHeader,
  useBlockHeaders,
  useCall,
  useCallSubscription,
  useChain,
  useChains,
  useConfig,
  useContract,
  useContractEvents,
  useContractTx,
  useDryRun,
  useExtension,
  useInterval,
  useIsMounted,
  useNotifications,
  useTxPaymentInfo
});
