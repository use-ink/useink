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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
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
  useAbiMessage: () => useAbiMessage,
  useAllWallets: () => useAllWallets,
  useApi: () => useApi,
  useApis: () => useApis,
  useBalance: () => useBalance,
  useBlockHeader: () => useBlockHeader,
  useBlockHeaders: () => useBlockHeaders,
  useCall: () => useCall,
  useCallSubscription: () => useCallSubscription,
  useChain: () => useChain,
  useChainRpc: () => useChainRpc,
  useChainRpcList: () => useChainRpcList,
  useChains: () => useChains,
  useConfig: () => useConfig,
  useContract: () => useContract,
  useDefaultCaller: () => useDefaultCaller,
  useDryRun: () => useDryRun,
  useEventSubscription: () => useEventSubscription,
  useEvents: () => useEvents,
  useInstalledWallets: () => useInstalledWallets,
  useTx: () => useTx,
  useTxPaymentInfo: () => useTxPaymentInfo,
  useUninstalledWallets: () => useUninstalledWallets,
  useWallet: () => useWallet
});
module.exports = __toCommonJS(src_exports);

// src/react/hooks/config/useChain.ts
var import_react3 = require("react");

// src/react/providers/config/context.ts
var import_react = __toESM(require("react"));

// src/chains/data/testnet-chaindata.ts
var RococoContractsTestnet = {
  id: "rococo-contracts-testnet",
  name: "Contracts",
  account: "*25519",
  rpcs: ["wss://rococo-contracts-rpc.polkadot.io"],
  paraId: 1002,
  relay: { id: "rococo-testnet" }
};

// src/react/constants.ts
var FIVE_SECONDS = 5e3;
var HALF_A_SECOND = 500;

// src/react/providers/config/model.ts
var DEFAULT_CONFIG = {
  dappName: "A dapp built with useInk!",
  chains: [RococoContractsTestnet],
  events: {
    expiration: FIVE_SECONDS,
    checkInterval: HALF_A_SECOND
  },
  setChainRpc: () => null,
  chainRpcs: {}
};

// src/react/providers/config/context.ts
var ConfigContext = import_react.default.createContext(
  DEFAULT_CONFIG
);

// src/react/hooks/config/useConfig.ts
var import_react2 = require("react");
var useConfig = () => (0, import_react2.useContext)(ConfigContext);

// src/react/hooks/config/useChain.ts
var useChain = (chainId) => {
  const { chains } = useConfig();
  return (0, import_react3.useMemo)(() => {
    return chainId ? chains.find((c) => c.id === chainId) : chains[0];
  }, [chains, chainId]);
};

// src/react/hooks/config/useChainRpc.ts
var useChainRpc = (chainId) => {
  const { chainRpcs } = useConfig();
  const chain = useChain(chainId);
  const chainIdOrDefault = chainId || chain?.id;
  return chainIdOrDefault && chainRpcs[chainIdOrDefault];
};

// src/react/hooks/config/useChainRpcList.ts
var useChainRpcList = (chainId) => {
  const chain = useChain(chainId);
  const { setChainRpc } = useConfig();
  return { rpcs: chain?.rpcs || [], setChainRpc };
};

// src/react/hooks/config/useChains.ts
var useChains = () => useConfig().chains;

// src/react/hooks/config/useDefaultCaller.ts
var import_react4 = require("react");
var useDefaultCaller = (chainId) => {
  const { caller } = useConfig();
  const defaultChain = useChain();
  if (!caller)
    return;
  return (0, import_react4.useMemo)(
    () => caller[`${chainId || defaultChain}`] || caller.default,
    [chainId, caller, defaultChain]
  );
};

// src/react/hooks/contracts/useAbiMessage.ts
var import_react5 = require("react");

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  getExpiredItem: () => getExpiredItem,
  hasAny: () => hasAny,
  isBroadcast: () => isBroadcast,
  isDropped: () => isDropped,
  isDryRun: () => isDryRun,
  isErrored: () => isErrored,
  isFinalityTimeout: () => isFinalityTimeout,
  isFinalized: () => isFinalized,
  isFuture: () => isFuture,
  isInBlock: () => isInBlock,
  isInvalid: () => isInvalid,
  isNone: () => isNone,
  isPendingSignature: () => isPendingSignature,
  isReady: () => isReady,
  isRetracted: () => isRetracted,
  isUsurped: () => isUsurped,
  pickCallInfo: () => pickCallInfo,
  pickDecoded: () => pickDecoded,
  pickDecodedError: () => pickDecodedError,
  pickError: () => pickError,
  pickResultErr: () => pickResultErr,
  pickResultOk: () => pickResultOk,
  pickTxInfo: () => pickTxInfo,
  pseudoRandomId: () => pseudoRandomId,
  shouldDisable: () => shouldDisable,
  shouldDisableStrict: () => shouldDisableStrict,
  stringNumberToBN: () => stringNumberToBN
});
__reExport(utils_exports, require("@polkadot/util"));

// src/utils/contracts/txUtils.ts
var isNone = (tx) => tx.status === "None";
var isDryRun = (tx) => tx.status === "DryRun";
var isPendingSignature = (tx) => tx.status === "PendingSignature";
var isErrored = (tx) => tx.status === "Errored";
var isFuture = (tx) => tx.status === "Future";
var isReady = (tx) => tx.status === "Ready";
var isBroadcast = (tx) => tx.status === "Broadcast";
var isRetracted = (tx) => tx.status === "Retracted";
var isFinalityTimeout = (tx) => tx.status === "FinalityTimeout";
var isInBlock = (tx) => tx.status === "InBlock";
var isFinalized = (tx) => tx.status === "Finalized";
var isUsurped = (tx) => tx.status === "Usurped";
var isDropped = (tx) => tx.status === "Dropped";
var isInvalid = (tx) => tx.status === "Invalid";
var hasAny = (tx, ...statuses) => statuses.includes(tx.status);
var shouldDisable = (tx) => hasAny(tx, "DryRun", "PendingSignature", "Broadcast");
var shouldDisableStrict = (tx) => shouldDisable(tx) || isInBlock(tx);

// src/utils/helpers/getExpiredItem.ts
var FIVE_SECONDS2 = 5e3;
function getExpiredItem(items, expirationPeriod) {
  if (expirationPeriod === 0)
    return [];
  const timeFromCreation = (creationTime) => Date.now() - creationTime;
  return items.filter(
    (item) => timeFromCreation(item.createdAt) >= (expirationPeriod || FIVE_SECONDS2)
  );
}

// src/utils/helpers/parseUnits.ts
var stringNumberToBN = (valWithCommas) => {
  const v = valWithCommas.split(",").join("");
  return new utils_exports.BN(v);
};

// src/utils/helpers/pseudoRandomId.ts
var pseudoRandomId = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce(
  (t2, e) => t2 += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_",
  ""
);

// src/utils/pick/pickCallInfo.ts
function pickCallInfo(decoded) {
  if (!decoded?.ok)
    return;
  const { gasRequired, gasConsumed, storageDeposit } = decoded.value;
  return { gasRequired, gasConsumed, storageDeposit };
}

// src/utils/pick/pickDecoded.ts
function pickDecoded(decoded) {
  return decoded?.ok ? decoded.value.decoded : void 0;
}

// src/utils/pick/pickDecodedError.ts
function pickDecodedError(call2, contract, moduleMessages, defaultMessage) {
  const { result } = call2 || {};
  if (!result || result?.ok)
    return;
  return decodeError(result.error, contract, moduleMessages, defaultMessage);
}

// src/utils/pick/pickError.ts
function pickError(decoded) {
  return decoded?.ok ? void 0 : decoded?.error;
}

// src/utils/pick/pickResultErr.ts
function pickResultErr(decoded) {
  return decoded?.ok ? decoded.value.decoded?.Err : void 0;
}

// src/utils/pick/pickResultOk.ts
function pickResultOk(decoded) {
  return decoded?.ok ? decoded.value.decoded?.Ok : void 0;
}

// src/utils/pick/pickTxInfo.ts
function pickTxInfo(result) {
  if (!result?.ok)
    return;
  const { gasRequired, gasConsumed, storageDeposit, partialFee } = result.value;
  return { gasRequired, gasConsumed, storageDeposit, partialFee };
}

// src/core/contracts/decodeCallResult.ts
function decodeCallResult(result, message, registry) {
  if (result.isErr || !message.returnType) {
    return { ok: false, error: result.asErr };
  }
  const raw = registry.createTypeUnsafe(
    message.returnType.lookupName || message.returnType.type,
    [result.asOk.data.toU8a(true)],
    { isPedantic: true }
  );
  return { ok: true, value: raw.toHuman().Ok };
}

// src/core/contracts/call.ts
async function call(contract, abiMessage, caller, args = [], options) {
  const { value, gasLimit, storageDepositLimit } = options || {};
  const apiCaller = contract.api.call.contractsApi;
  if (!apiCaller?.call)
    return;
  const raw = await apiCaller.call(
    caller,
    contract.address,
    value ?? new utils_exports.BN(0),
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.toU8a(args)
  );
  if (!raw)
    return;
  const decoded = decodeCallResult(
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

// src/core/contracts/getRegistryError.ts
var getRegistryError = (error, { contract: { api } }) => {
  if (!error?.isModule)
    return;
  return api?.registry.findMetaError(error.asModule);
};

// src/core/contracts/decodeError.ts
var formatErrorMessage = (registryError) => `${registryError.section}.${registryError.method}: ${registryError.docs}`;
var decodeError = (dispatchError, chainContract, moduleMessages, defaultMessage) => {
  if (!chainContract)
    return void 0;
  const registryError = getRegistryError(dispatchError, chainContract);
  if (!registryError)
    return void 0;
  return moduleMessages?.[registryError.method] || defaultMessage || formatErrorMessage(registryError);
};

// src/core/contracts/toContractAbiMessage.ts
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

// src/core/substrate/balances/getBalance.ts
var getBalance = async (api, account) => {
  if (!api || !account?.address)
    return;
  return await api.derive.balances.account(account.address);
};

// src/core/types/contracts.ts
var import_api_contract = require("@polkadot/api-contract");

// src/core/types/substrate.ts
var import_api = require("@polkadot/api");

// src/core/types/talisman-connect-wallets.ts
var import_connect_wallets = require("@talismn/connect-wallets");

// src/react/hooks/contracts/useAbiMessage.ts
function useAbiMessage(contract, message) {
  const abiMessage = (0, import_react5.useMemo)(() => {
    if (!contract)
      return;
    return toContractAbiMessage(contract, message);
  }, [contract, message]);
  if (!abiMessage || !abiMessage.ok)
    return;
  return abiMessage.value;
}

// src/react/hooks/contracts/useCall.ts
var import_react9 = require("react");

// src/react/hooks/wallets/useWallet.ts
var import_react8 = require("react");

// src/react/providers/wallet/context.ts
var import_react6 = require("react");

// src/react/providers/wallet/model.ts
var WALLET_DEFAULTS = {
  connect: () => void 0,
  disconnect: () => void 0,
  account: void 0,
  accounts: void 0,
  setAccount: () => void 0,
  isConnected: false,
  getWallets: import_connect_wallets.getWallets,
  getWalletBySource: import_connect_wallets.getWalletBySource
};

// src/react/providers/wallet/context.ts
var WalletContext = (0, import_react6.createContext)({
  ...WALLET_DEFAULTS
});

// src/react/providers/wallet/provider.tsx
var import_react7 = __toESM(require("react"));
function getAutoConnectWalletInfo(key) {
  const item = typeof window !== "undefined" && window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
var WalletProvider = ({
  children
}) => {
  const C = useConfig();
  const [account, setWalletAccount] = (0, import_react7.useState)();
  const [accounts, setAccounts] = (0, import_react7.useState)();
  const [walletError, setWalletError] = (0, import_react7.useState)();
  const dappName = (0, import_react7.useMemo)(
    () => C.dappName && C.dappName.trim().length > 0 ? C.dappName : "A Dapp built in useink",
    [C.dappName]
  );
  const [activeWallet, setActiveWallet] = (0, import_react7.useState)(
    getAutoConnectWalletInfo(dappName)?.wallet
  );
  const enableAutoConnect = import_react7.default.useCallback(
    (a) => {
      localStorage.setItem(dappName, JSON.stringify(a));
    },
    [dappName]
  );
  const disableAutoConnect = import_react7.default.useCallback(() => {
    if (getAutoConnectWalletInfo(dappName))
      localStorage.removeItem(dappName);
  }, [dappName]);
  const disconnect = (0, import_react7.useCallback)(() => {
    disableAutoConnect();
    setAccounts(void 0);
    setWalletAccount(void 0);
    setActiveWallet(void 0);
    setWalletError(void 0);
  }, [dappName]);
  const setAccount = (0, import_react7.useCallback)(
    (newAccount) => {
      const accountDisabled = !accounts?.find(
        (a) => a.address === newAccount.address
      );
      if (accountDisabled) {
        setWalletError("AccountNotEnabled" /* AccountDisabled */);
        return;
      }
      walletError !== void 0 && setWalletError(void 0);
      setWalletAccount(newAccount);
      if (!C.wallet?.skipAutoConnect) {
        enableAutoConnect({
          address: newAccount.address,
          wallet: newAccount.source
        });
      }
    },
    [accounts, C.wallet?.skipAutoConnect]
  );
  const connectWallet = (0, import_react7.useCallback)(
    async (walletName) => {
      walletError && setWalletError(void 0);
      const w = (0, import_connect_wallets.getWalletBySource)(walletName);
      if (!w) {
        setWalletError("WalletNotInstalled" /* WalletNotInstalled */);
        setActiveWallet(void 0);
        return;
      }
      try {
        await w.enable(dappName);
      } catch (e) {
        setWalletError("EnableFailed" /* EnableFailed */);
        setActiveWallet(void 0);
        return;
      }
      const unsub = await w.subscribeAccounts((accts) => {
        setAccounts(accts);
        const firstAccount = accts?.[0];
        const noAccountsEnabled = !accts || !firstAccount;
        if (noAccountsEnabled) {
          setWalletError("NoAccountsEnabled" /* NoAccountsEnabled */);
          setWalletAccount(void 0);
          disableAutoConnect();
          return;
        }
        const activeAccountNoLongerConnected = account && !accts?.find((a) => a.address === account?.address);
        if (activeAccountNoLongerConnected) {
          setWalletAccount(firstAccount);
          if (!C.wallet?.skipAutoConnect) {
            enableAutoConnect({
              address: firstAccount.address,
              wallet: firstAccount.source
            });
          }
          return;
        }
        const autoConnect = getAutoConnectWalletInfo(dappName);
        const autoConnectAccount = autoConnect && accts.find((a) => a.address === autoConnect.address);
        const initialAccount = autoConnectAccount || firstAccount;
        setWalletAccount(initialAccount);
        if (!C.wallet?.skipAutoConnect) {
          enableAutoConnect({
            address: initialAccount.address,
            wallet: initialAccount.source
          });
        }
      });
      return unsub;
    },
    []
  );
  const connect = (0, import_react7.useCallback)((walletName) => {
    setActiveWallet(walletName);
  }, []);
  (0, import_react7.useEffect)(() => {
    if (!activeWallet)
      return;
    let unsubFunc;
    connectWallet(activeWallet).then((unsub) => unsubFunc = unsub);
    return () => unsubFunc?.();
  }, [activeWallet]);
  return /* @__PURE__ */ import_react7.default.createElement(
    WalletContext.Provider,
    {
      value: {
        account,
        isConnected: Boolean(account),
        accounts,
        connect,
        disconnect,
        walletError,
        setAccount,
        getWallets: import_connect_wallets.getWallets,
        getWalletBySource: import_connect_wallets.getWalletBySource
      }
    },
    children
  );
};

// src/react/hooks/wallets/useWallet.ts
var useWallet = () => (0, import_react8.useContext)(WalletContext);

// src/react/hooks/contracts/useCall.ts
var CallError = /* @__PURE__ */ ((CallError2) => {
  CallError2["ContractUndefined"] = "Contract is undefined";
  CallError2["InvalidAbiMessage"] = "Invalid ABI Message";
  CallError2["NoResponse"] = "No response";
  return CallError2;
})(CallError || {});
function useCall(chainContract, message) {
  const [result, setResult] = (0, import_react9.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react9.useState)(false);
  const abiMessage = useAbiMessage(chainContract?.contract, message);
  const { account } = useWallet();
  const defaultCaller = useDefaultCaller(chainContract?.chainId);
  const send = (0, import_react9.useCallback)(
    async (args, options) => {
      const caller = account?.address || options?.defaultCaller ? defaultCaller : void 0;
      if (!abiMessage || !chainContract?.contract || !caller)
        return;
      try {
        setIsSubmitting(true);
        const callResult = await call(
          chainContract.contract,
          abiMessage,
          caller,
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

// src/react/hooks/contracts/useCallSubscription.ts
var import_react13 = require("react");

// src/react/hooks/substrate/useBlockHeader.ts
var import_react12 = require("react");

// src/react/providers/blockHeader/context.ts
var import_react10 = require("react");

// src/react/providers/blockHeader/model.ts
var BLOCK_HEADER_DEFAULTS = {};

// src/react/providers/blockHeader/context.ts
var BlockHeaderContext = (0, import_react10.createContext)({
  ...BLOCK_HEADER_DEFAULTS
});

// src/react/providers/blockHeader/provider.tsx
var import_react11 = __toESM(require("react"));

// src/react/providers/blockHeader/reducer.ts
function chainBlockHeaderReducer(state, action) {
  switch (action.type) {
    case "ADD_CHAIN_BLOCK_HEADER":
      return {
        ...state,
        [action.chainId]: action.blockHeader
      };
  }
}

// src/react/providers/blockHeader/provider.tsx
var toBlockNumber = (valWithComma) => parseInt(`${valWithComma?.split(",").join("")}`);
var BlockHeaderProvider = ({
  children
}) => {
  const chainApis = useApis();
  const [chainBlockHeaders, dispatch] = (0, import_react11.useReducer)(
    chainBlockHeaderReducer,
    {}
  );
  const chainIds = (0, import_react11.useMemo)(
    () => chainApis.apis ? Object.keys(chainApis.apis) : [],
    [chainApis]
  );
  (0, import_react11.useEffect)(() => {
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
  return /* @__PURE__ */ import_react11.default.createElement(BlockHeaderContext.Provider, { value: chainBlockHeaders }, children);
};

// src/react/hooks/substrate/useBlockHeader.ts
var useBlockHeader = (chainId) => {
  const chain = useChain(chainId);
  return chain ? (0, import_react12.useContext)(BlockHeaderContext)[chain.id] : void 0;
};
var useBlockHeaders = () => (0, import_react12.useContext)(BlockHeaderContext);

// src/react/hooks/contracts/useCallSubscription.ts
function useCallSubscription(chainContract, message, args = [], options) {
  const call2 = useCall(chainContract, message);
  const blockNumber = useBlockHeader(chainContract?.chainId)?.blockNumber;
  (0, import_react13.useEffect)(() => {
    call2.send(args, options);
  }, [blockNumber]);
  return call2;
}

// src/react/hooks/contracts/useContract.ts
var import_react17 = require("react");

// src/react/providers/api/context.ts
var import_react14 = require("react");
var APIContext = (0, import_react14.createContext)({
  apis: {}
});

// src/react/providers/api/provider.tsx
var import_react15 = __toESM(require("react"));

// src/react/providers/api/reducer.ts
function apiProvidersReducer(state, action) {
  switch (action.type) {
    case "ADD_API_PROVIDER":
      return {
        ...state,
        [action.chainId]: action.apiProvider
      };
  }
}

// src/react/providers/api/provider.tsx
var APIProvider = ({
  children
}) => {
  const chains = useChains();
  const { chainRpcs } = useConfig();
  const [apis, dispatch] = (0, import_react15.useReducer)(apiProvidersReducer, {});
  (0, import_react15.useEffect)(() => {
    chains.forEach((chain) => {
      const provider = new import_api.WsProvider(chainRpcs[chain.id] || chain.rpcs[0]);
      import_api.ApiPromise.create({ provider }).then((api) => {
        dispatch({
          type: "ADD_API_PROVIDER",
          chainId: chain.id,
          apiProvider: { api, provider }
        });
      });
    });
  }, [chains, chainRpcs]);
  return /* @__PURE__ */ import_react15.default.createElement(APIContext.Provider, { value: { apis }, children });
};

// src/react/hooks/substrate/useApi.ts
var import_react16 = require("react");
var useApis = () => (0, import_react16.useContext)(APIContext);
var useApi = (chainId) => chainId ? useApis()?.apis?.[chainId] : void 0;

// src/react/hooks/contracts/useContract.ts
function useContract(address, metadata, chainId) {
  const [contract, setContract] = (0, import_react17.useState)();
  const chainConfig = useChain(chainId);
  const { api } = useApi(chainConfig?.id) || {};
  const abi = (0, import_react17.useMemo)(
    () => api && new import_api_contract.Abi(metadata, api.registry.getChainProperties()),
    [api]
  );
  (0, import_react17.useEffect)(() => {
    try {
      api && abi && setContract(new import_api_contract.ContractPromise(api, abi, address));
    } catch (err) {
      console.error("Couldn't create contract instance: ", err);
    }
  }, [abi, address, api]);
  return chainConfig && contract ? { chainId: chainConfig.id, contract } : void 0;
}

// src/react/hooks/contracts/useDryRun.ts
var import_react18 = require("react");
function useDryRun(chainContract, message) {
  const { account } = useWallet();
  const defaultCaller = useDefaultCaller(chainContract?.chainId);
  const [result, setResult] = (0, import_react18.useState)();
  const [isSubmitting, setIsSubmitting] = (0, import_react18.useState)(false);
  const abiMessage = useAbiMessage(chainContract?.contract, message);
  const send = (0, import_react18.useMemo)(
    () => async (params, options) => {
      const tx = chainContract?.contract?.tx?.[message];
      const caller = account?.address ? account.address : options?.defaultCaller ? defaultCaller : void 0;
      if (!caller || !chainContract?.contract || !abiMessage || !tx) {
        return;
      }
      setIsSubmitting(true);
      try {
        const resp = await call(
          chainContract.contract,
          abiMessage,
          caller,
          params,
          options
        );
        if (!resp || !resp.ok)
          return;
        const { gasConsumed, gasRequired, storageDeposit } = resp.value.raw;
        const requiresNoArguments = tx.meta.args.length === 0;
        const { partialFee } = await (requiresNoArguments ? tx(options || {}) : tx(options || {}, ...params || [])).paymentInfo(caller);
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
    [account, chainContract?.contract, abiMessage]
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

// src/react/hooks/contracts/useEventSubscription.ts
var import_react23 = require("react");

// src/react/providers/events/context.ts
var import_react19 = require("react");

// src/react/providers/events/model.ts
var DEFAULT_EVENTS = {};

// src/react/providers/events/context.ts
var EventsContext = (0, import_react19.createContext)({
  events: DEFAULT_EVENTS,
  addEvent: () => null,
  removeEvent: () => null
});

// src/react/providers/events/provider.tsx
var import_react21 = __toESM(require("react"));

// src/react/providers/events/reducer.ts
function eventsReducer(state, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        [action.address]: [...state[action.address] || [], action.event]
      };
    case "REMOVE_EVENT": {
      const events = state[action.address];
      if (!events)
        return state;
      const idx = events.findIndex((e) => e.id === action.eventId);
      if (idx < 0)
        return state;
      const newContractState = [
        ...events.slice(0, idx),
        ...events.slice(idx + 1, events.length)
      ];
      return {
        ...state,
        [action.address]: newContractState
      };
    }
  }
}

// src/react/hooks/internal/useIsMounted.ts
var import_react20 = __toESM(require("react"));
function useIsMounted() {
  const isMounted = import_react20.default.useRef(false);
  import_react20.default.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return import_react20.default.useCallback(() => isMounted.current, []);
}

// src/react/providers/events/provider.tsx
var EventsProvider = ({
  children
}) => {
  const [events, dispatch] = import_react21.default.useReducer(eventsReducer, DEFAULT_EVENTS);
  const isMounted = useIsMounted();
  const addEvent = import_react21.default.useCallback(
    ({ event, address }) => {
      if (isMounted()) {
        dispatch({
          type: "ADD_EVENT",
          address,
          event: { ...event, id: pseudoRandomId(), createdAt: Date.now() }
        });
      }
    },
    [dispatch]
  );
  const removeEvent = import_react21.default.useCallback(
    ({ eventId, address }) => {
      if (isMounted()) {
        dispatch({
          type: "REMOVE_EVENT",
          address,
          eventId
        });
      }
    },
    [dispatch]
  );
  return /* @__PURE__ */ import_react21.default.createElement(
    EventsContext.Provider,
    {
      value: { addEvent, events, removeEvent },
      children
    }
  );
};

// src/react/hooks/internal/useInterval.ts
var import_react22 = require("react");
function useInterval(callback, delay) {
  const savedCallback = (0, import_react22.useRef)(callback);
  (0, import_react22.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]);
  (0, import_react22.useEffect)(() => {
    if (delay === null)
      return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// src/react/hooks/contracts/useEventSubscription.ts
var useEventSubscription = (chainContract) => {
  const { events, addEvent, removeEvent } = (0, import_react23.useContext)(EventsContext);
  const { blockNumber, header } = useBlockHeader(chainContract?.chainId) || {};
  const C = useConfig();
  const address = chainContract?.contract?.address?.toString() || "";
  const contractEvents = events?.[address] || [];
  (0, import_react23.useEffect)(() => {
    const contract = chainContract?.contract;
    if (!header?.hash || !contract)
      return;
    contract.api.at(header?.hash).then((apiAt) => {
      apiAt?.query?.system?.events && apiAt.query.system.events((encodedEvent) => {
        encodedEvent.forEach(({ event }) => {
          if (contract.api.events.contracts?.ContractEmitted && contract.api.events.contracts.ContractEmitted.is(event)) {
            const [contractAddress, contractEvent] = event.data;
            if (!address || !contractAddress || !contractEvent || contractAddress.toString().toLowerCase() !== address.toLowerCase())
              return;
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
              addEvent(eventItem);
            } catch (e) {
              console.error(e);
            }
          }
        });
      });
    });
  }, [chainContract?.contract, blockNumber]);
  useInterval(() => {
    if (C.events?.expiration === 0)
      return;
    const expiredEvents = getExpiredItem(
      contractEvents,
      C.events?.expiration || FIVE_SECONDS
    );
    for (const event of expiredEvents) {
      removeEvent({ eventId: event.id, address });
    }
  }, C.events?.checkInterval || HALF_A_SECOND);
};

// src/react/hooks/contracts/useEvents.ts
var import_react24 = require("react");
var useEvents = (contractAddress, filters) => {
  const { events, removeEvent } = (0, import_react24.useContext)(EventsContext);
  const contractEvents = (0, import_react24.useMemo)(() => {
    if (!contractAddress)
      return [];
    return events[contractAddress.toString()]?.filter(
      ({ name }) => filters ? filters.includes(name) : true
    ) ?? [];
  }, [events, contractAddress]);
  return { events: contractEvents, removeEvent };
};

// src/react/hooks/contracts/useTx.ts
var import_react25 = require("react");
function useTx(chainContract, message) {
  const { account } = useWallet();
  const [status, setStatus] = (0, import_react25.useState)("None");
  const [result, setResult] = (0, import_react25.useState)();
  const dryRun = useDryRun(chainContract, message);
  const signAndSend = (0, import_react25.useMemo)(
    () => (params, options, cb) => {
      if (!chainContract?.contract || !account || !account.wallet?.extension) {
        return;
      }
      dryRun.send(params, options).then((response) => {
        if (!response || !response.ok)
          return;
        setStatus("PendingSignature");
        const { gasRequired } = response.value.raw;
        const tx = chainContract?.contract.tx[message];
        if (!tx) {
          cb?.(
            void 0,
            chainContract.contract.api,
            `'${message}' not found on contract instance`
          );
          return;
        }
        tx({ gasLimit: gasRequired, ...options || {} }, ...params || []).signAndSend(
          account.address,
          { signer: account.wallet?.extension?.signer },
          (response2) => {
            setResult(response2);
            setStatus(response2.status.type);
            cb && cb(response2, chainContract?.contract.api);
          }
        ).catch((e) => {
          cb?.(void 0, chainContract.contract.api, e);
          setStatus("None");
        });
      }).catch((e) => {
        cb?.(void 0, chainContract.contract.api, e);
        setStatus("None");
      });
    },
    [account, account?.wallet?.extension?.signer, chainContract?.contract]
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

// src/react/hooks/contracts/useTxPaymentInfo.ts
var import_react26 = require("react");
function useTxPaymentInfo(chainContract, message) {
  const [isSubmitting, setIsSubmitting] = (0, import_react26.useState)(false);
  const [result, setResult] = (0, import_react26.useState)();
  const { account } = useWallet();
  const defaultCaller = useDefaultCaller();
  const send = (0, import_react26.useCallback)(
    async (params, options, signerOptions) => {
      const tx = chainContract?.contract?.tx?.[message];
      const caller = account?.address || options?.defaultCaller ? defaultCaller : void 0;
      if (!tx || !caller)
        return;
      try {
        setIsSubmitting(true);
        const requiresNoArguments = tx.meta.args.length === 0;
        const paymentInfoResult = await (requiresNoArguments ? tx(options || {}) : tx(options || {}, params)).paymentInfo(caller, signerOptions);
        setResult(paymentInfoResult);
        setIsSubmitting(false);
        return paymentInfoResult;
      } catch (e) {
        console.error(e);
        setIsSubmitting(false);
        return;
      }
    },
    [chainContract?.contract, message, account, defaultCaller]
  );
  return {
    isSubmitting,
    resolved: Boolean(!isSubmitting && result),
    result,
    send
  };
}

// src/react/hooks/substrate/useBalance.ts
var import_react27 = require("react");
var useBalance = (account, chainId) => {
  const [balance, setBalance] = (0, import_react27.useState)();
  const { blockNumber } = useBlockHeader(chainId) || {};
  const chainConfig = useChain(chainId);
  const chain = useApi(chainConfig?.id);
  (0, import_react27.useEffect)(() => {
    if (!chain?.api || !account || !account.address)
      return;
    getBalance(chain.api, account).then(setBalance).catch(console.error);
  }, [blockNumber, account]);
  return balance;
};

// src/react/hooks/wallets/useAllWallets.ts
var import_react28 = require("react");
var useAllWallets = () => {
  const { getWallets: getWallets2 } = useWallet();
  return (0, import_react28.useMemo)(() => getWallets2(), []);
};

// src/react/hooks/wallets/useInstalledWallets.ts
var import_react29 = require("react");
var useInstalledWallets = () => {
  const { getWallets: getWallets2 } = useWallet();
  return (0, import_react29.useMemo)(() => getWallets2().filter((w) => w.installed), []);
};

// src/react/hooks/wallets/useUninstalledWallets.ts
var import_react30 = require("react");
var useUninstalledWallets = () => {
  const { getWallets: getWallets2 } = useWallet();
  return (0, import_react30.useMemo)(() => getWallets2().filter((w) => !w.installed), []);
};

// src/react/providers/UseInkProvider.tsx
var import_react32 = __toESM(require("react"));

// src/react/providers/config/provider.tsx
var import_react31 = __toESM(require("react"));
var toInitialRpcs = (c, rpcs) => c.reduce(
  (acc, ch) => ({ ...acc, [ch.id]: ch.rpcs?.[0] || "" }),
  {}
);
var ConfigProvider = ({
  config,
  children
}) => {
  const defaultChainId = (0, import_react31.useMemo)(() => config.chains[0].id, [config.chains[0]]);
  const [chainRpcs, setChainRpcs] = (0, import_react31.useState)(
    toInitialRpcs(config.chains, {})
  );
  const setChainRpc = (0, import_react31.useCallback)((rpc, cid) => {
    const chainIdOrDefault = cid || defaultChainId;
    chainIdOrDefault && setChainRpcs({ ...chainRpcs, [chainIdOrDefault]: rpc });
  }, []);
  (0, import_react31.useEffect)(() => {
    setChainRpcs(toInitialRpcs(config.chains, chainRpcs));
    if (!config.chains.length) {
      const error = "Chains not configured in Config Provider";
      console.error(error);
      throw Error(error);
    }
  }, [config.chains]);
  return /* @__PURE__ */ import_react31.default.createElement(
    ConfigContext.Provider,
    {
      value: {
        ...DEFAULT_CONFIG,
        ...config,
        setChainRpc,
        chainRpcs
      },
      children
    }
  );
};

// src/react/providers/UseInkProvider.tsx
var UseInkProvider = ({
  children,
  config
}) => /* @__PURE__ */ import_react32.default.createElement(ConfigProvider, { config }, /* @__PURE__ */ import_react32.default.createElement(WalletProvider, null, /* @__PURE__ */ import_react32.default.createElement(APIProvider, null, /* @__PURE__ */ import_react32.default.createElement(BlockHeaderProvider, null, /* @__PURE__ */ import_react32.default.createElement(EventsProvider, null, children)))));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APIContext,
  APIProvider,
  CallError,
  UseInkProvider,
  useAbiMessage,
  useAllWallets,
  useApi,
  useApis,
  useBalance,
  useBlockHeader,
  useBlockHeaders,
  useCall,
  useCallSubscription,
  useChain,
  useChainRpc,
  useChainRpcList,
  useChains,
  useConfig,
  useContract,
  useDefaultCaller,
  useDryRun,
  useEventSubscription,
  useEvents,
  useInstalledWallets,
  useTx,
  useTxPaymentInfo,
  useUninstalledWallets,
  useWallet
});
