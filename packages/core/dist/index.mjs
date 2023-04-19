// src/hooks/contracts/useAbiMessage.ts
import { useMemo } from "react";

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
  const abiMessage = useMemo(() => {
    if (!contract)
      return;
    return toContractAbiMessage(contract, message);
  }, [contract, message]);
  if (!abiMessage || !abiMessage.ok)
    return;
  return abiMessage.value;
}

// src/hooks/contracts/useCall.ts
import { useCallback, useState } from "react";

// src/hooks/useExtension.ts
import { useContext as useContext2 } from "react";

// src/providers/extension/context.ts
import { createContext } from "react";

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
var ExtensionContext = createContext({
  ...EXTENSION_DEFAULTS
});

// src/providers/extension/provider.tsx
import React2 from "react";

// src/providers/config/context.ts
import React from "react";

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
var ConfigContext = React.createContext(DEFAULT_CONFIG);

// src/hooks/useConfig.ts
import { useContext } from "react";
var useConfig = () => useContext(ConfigContext);

// src/providers/extension/provider.tsx
import {
  web3Accounts,
  web3Enable,
  web3FromAddress
} from "@polkadot/extension-dapp";
var getAutoConnectAddress = (key) => localStorage.getItem(key);
var ExtensionProvider = ({ children }) => {
  const C = useConfig();
  const [account, setCallerAccount] = React2.useState();
  const [accounts, setAccounts] = React2.useState();
  const [extension, setExtension] = React2.useState();
  const [error, setError] = React2.useState();
  const originName = C.dappName && C.dappName.trim().length > 0 ? C.dappName : "A dapp built with useink!";
  const enableAutoConnect = React2.useCallback((address) => {
    localStorage.setItem(originName, address);
  }, [originName]);
  const disableAutoConnect = React2.useCallback(() => {
    if (getAutoConnectAddress(originName))
      localStorage.removeItem(originName);
  }, [originName]);
  const disconnect = React2.useCallback(() => {
    disableAutoConnect();
    setAccounts(void 0);
    setCallerAccount(void 0);
    setExtension(void 0);
  }, [originName]);
  const setAccount = React2.useCallback(
    (newAccount) => {
      web3FromAddress(newAccount.address).then((ext) => {
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
  const connect = React2.useCallback(async () => {
    await web3Enable(originName);
    const allAccounts = await web3Accounts();
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
      web3FromAddress(initialAccount.address).then((ext) => {
        setCallerAccount(initialAccount);
        setExtension(ext);
      }).catch((e) => {
        console.error("connection error", e);
      });
    }
  }, []);
  React2.useEffect(() => {
    if (getAutoConnectAddress(originName)) {
      connect();
      return;
    }
    disconnect();
  }, []);
  return /* @__PURE__ */ React2.createElement(
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
var useExtension = () => useContext2(ExtensionContext);

// src/hooks/contracts/useCall.ts
var CallError = /* @__PURE__ */ ((CallError2) => {
  CallError2["ContractUndefined"] = "Contract is undefined";
  CallError2["InvalidAbiMessage"] = "Invalid ABI Message";
  CallError2["NoResponse"] = "No response";
  return CallError2;
})(CallError || {});
function useCall(contract, message) {
  const [result, setResult] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const abiMessage = useAbiMessage(contract, message);
  const { account } = useExtension();
  const send = useCallback(
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
import { useEffect as useEffect2 } from "react";

// src/hooks/substrate/useBlockHeader.ts
import { useContext as useContext3 } from "react";

// src/providers/blockHeader/context.ts
import { createContext as createContext2 } from "react";

// src/providers/blockHeader/model.ts
var BLOCK_HEADER_DEFAULTS = {};

// src/providers/blockHeader/context.ts
var BlockHeaderContext = createContext2({
  ...BLOCK_HEADER_DEFAULTS
});

// src/providers/blockHeader/provider.tsx
import React3, { useEffect, useMemo as useMemo2, useReducer } from "react";

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
  const [chainBlockHeaders, dispatch] = useReducer(
    chainBlockHeaderReducer,
    {}
  );
  const chainIds = useMemo2(
    () => chainApis.apis ? Object.keys(chainApis.apis) : [],
    [chainApis]
  );
  useEffect(() => {
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
  return /* @__PURE__ */ React3.createElement(BlockHeaderContext.Provider, { value: chainBlockHeaders }, children);
};

// src/hooks/useChain.ts
import { useMemo as useMemo3 } from "react";
var useChain = (chainId) => {
  const { chains } = useConfig();
  return useMemo3(() => {
    return chainId ? chains.find((c) => c.id === chainId) : chains[0];
  }, [chains, chainId]);
};

// src/hooks/substrate/useBlockHeader.ts
var useBlockHeader = (chainId) => {
  const chain = useChain(chainId);
  return chain ? useContext3(BlockHeaderContext)[chain.id] : void 0;
};
var useBlockHeaders = () => useContext3(BlockHeaderContext);

// src/hooks/contracts/useCallSubscription.ts
function useCallSubscription(chainContract, message, args = [], options, caller) {
  const call2 = useCall(chainContract?.contract, message);
  const blockNumber = useBlockHeader(chainContract?.chainId)?.blockNumber;
  useEffect2(() => {
    call2.send(args, options, caller);
  }, [blockNumber]);
  return call2;
}

// src/hooks/contracts/useContract.ts
import { Abi, ContractPromise } from "@polkadot/api-contract";
import { useEffect as useEffect4, useMemo as useMemo4, useState as useState2 } from "react";

// src/providers/api/context.ts
import { createContext as createContext3 } from "react";
var APIContext = createContext3({
  apis: {}
});

// src/providers/api/provider.tsx
import React4, { useEffect as useEffect3, useReducer as useReducer2 } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";

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
  const [apis, dispatch] = useReducer2(apiProvidersReducer, {});
  useEffect3(() => {
    chains.forEach((chain) => {
      const provider = new WsProvider(chain.rpcUrls[0]);
      ApiPromise.create({ provider }).then((api) => {
        dispatch({
          type: "ADD_API_PROVIDER",
          chainId: chain.id,
          apiProvider: { api, provider }
        });
      });
    });
  }, [chains]);
  return /* @__PURE__ */ React4.createElement(APIContext.Provider, { value: { apis }, children });
};

// src/hooks/useApi.ts
import { useContext as useContext4 } from "react";
var useApis = () => useContext4(APIContext);
var useApi = (chainId) => chainId ? useApis()?.apis?.[chainId] : void 0;

// src/hooks/contracts/useContract.ts
function useContract(address, metadata, chainId) {
  const [contract, setContract] = useState2();
  const chainConfig = useChain(chainId);
  const { api } = useApi(chainConfig?.id) || {};
  const abi = useMemo4(
    () => api && new Abi(metadata, api.registry.getChainProperties()),
    [api]
  );
  useEffect4(() => {
    try {
      api && abi && setContract(new ContractPromise(api, abi, address));
    } catch (err) {
      console.error("Couldn't create contract instance: ", err);
    }
  }, [abi, address, api]);
  return chainConfig ? { chainId: chainConfig.id, contract } : void 0;
}

// src/hooks/contracts/useContractEvents.ts
import { useContext as useContext5, useEffect as useEffect6 } from "react";

// src/providers/contractEvents/context.ts
import { createContext as createContext4 } from "react";

// src/providers/contractEvents/model.ts
var DEFAULT_CONTRACT_EVENTS = {};

// src/providers/contractEvents/context.ts
var ContractEventsContext = createContext4({
  events: DEFAULT_CONTRACT_EVENTS,
  addContractEvent: () => null,
  removeContractEvent: () => null
});

// src/providers/contractEvents/provider.tsx
import React6 from "react";

// src/hooks/useIsMounted.ts
import React5 from "react";
function useIsMounted() {
  const isMounted = React5.useRef(false);
  React5.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return React5.useCallback(() => isMounted.current, []);
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
  const [events, dispatch] = React6.useReducer(
    contractEventReducer,
    DEFAULT_CONTRACT_EVENTS
  );
  const isMounted = useIsMounted();
  const addContractEvent = React6.useCallback(
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
  const removeContractEvent = React6.useCallback(
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
  return /* @__PURE__ */ React6.createElement(
    ContractEventsContext.Provider,
    {
      value: { addContractEvent, events, removeContractEvent },
      children
    }
  );
};

// src/hooks/useInterval.ts
import { useEffect as useEffect5, useRef } from "react";
function useInterval(callback, delay) {
  const savedCallback = useRef(callback);
  useEffect5(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect5(() => {
    if (delay === null)
      return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// src/hooks/contracts/useContractEvents.ts
var useContractEvents = (chainContract) => {
  const { events, addContractEvent, removeContractEvent } = useContext5(
    ContractEventsContext
  );
  const { blockNumber, header } = useBlockHeader(chainContract?.chainId) || {};
  const C = useConfig();
  const address = chainContract?.contract?.address?.toString() || "";
  const eventsForAddress = chainContract ? events[address] || [] : [];
  useEffect6(() => {
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
import { useMemo as useMemo6, useState as useState4 } from "react";

// src/hooks/contracts/useDryRun.ts
import { useMemo as useMemo5, useState as useState3 } from "react";
function useDryRun(contract, message) {
  const { account, extension } = useExtension();
  const [result, setResult] = useState3();
  const [isSubmitting, setIsSubmitting] = useState3(false);
  const abiMessage = useAbiMessage(contract, message);
  const send = useMemo5(
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
  const [status, setStatus] = useState4("None");
  const [result, setResult] = useState4();
  const abiMessage = useAbiMessage(contract, message);
  const dryRun = useDryRun(contract, message);
  const signAndSend = useMemo6(
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
import { useCallback as useCallback2, useState as useState5 } from "react";
function useTxPaymentInfo(contract, message) {
  const [isSubmitting, setIsSubmitting] = useState5(false);
  const [result, setResult] = useState5();
  const { account } = useExtension();
  const send = useCallback2(async (options, params, signerOptions) => {
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
import { useEffect as useEffect7, useState as useState6 } from "react";
var useBalance = (account, chainId) => {
  const [balance, setBalance] = useState6();
  const { blockNumber } = useBlockHeader(chainId) || {};
  const chainConfig = useChain(chainId);
  const chain = useApi(chainConfig?.id);
  useEffect7(() => {
    if (!chain?.api || !account || !account.address)
      return;
    chain.api.derive.balances.account(account.address).then(setBalance).catch(console.error);
  }, [blockNumber, account]);
  return balance;
};

// src/hooks/useChains.ts
var useChains = () => useConfig().chains;

// src/hooks/useNotifications.ts
import { useContext as useContext6, useMemo as useMemo7 } from "react";

// src/providers/notifications/context.ts
import { createContext as createContext5 } from "react";

// src/providers/notifications/model.ts
var DEFAULT_NOTIFICATIONS = [];

// src/providers/notifications/context.ts
var NotificationsContext = createContext5({
  notifications: DEFAULT_NOTIFICATIONS,
  addNotification: () => null,
  removeNotification: () => null
});

// src/providers/notifications/provider.tsx
import React7 from "react";

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
  const [notifications, dispatch] = React7.useReducer(
    notificationReducer,
    DEFAULT_NOTIFICATIONS
  );
  const isMounted = useIsMounted();
  const { account } = useExtension();
  const addNotification = React7.useCallback(
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
  React7.useEffect(() => {
    if (account) {
      addNotification({
        notification: {
          message: `${account.meta.name || account.address} Connected`,
          type: "WalletConnected"
        }
      });
    }
  }, [account?.address]);
  const removeNotification = React7.useCallback(
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
  return /* @__PURE__ */ React7.createElement(
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
  const { addNotification, notifications, removeNotification } = useContext6(NotificationsContext);
  const config = useConfig();
  const parachainNotifications = useMemo7(() => {
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
import React9 from "react";

// src/providers/config/provider.tsx
import React8, { useEffect as useEffect8 } from "react";
var ConfigProvider = ({
  config,
  children
}) => {
  useEffect8(() => {
    if (!config?.chains.length) {
      const error = "Chains not configured in Config Provider";
      console.error(error);
      throw Error(error);
    }
  }, [config?.chains]);
  return /* @__PURE__ */ React8.createElement(
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
}) => /* @__PURE__ */ React9.createElement(ConfigProvider, { config }, /* @__PURE__ */ React9.createElement(ExtensionProvider, null, /* @__PURE__ */ React9.createElement(APIProvider, null, /* @__PURE__ */ React9.createElement(BlockHeaderProvider, null, /* @__PURE__ */ React9.createElement(ContractEventsProvider, null, /* @__PURE__ */ React9.createElement(NotificationsProvider, null, children))))));
export {
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
};
