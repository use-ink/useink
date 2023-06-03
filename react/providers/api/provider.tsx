import React, { useEffect, useReducer } from "react";
import { useChains } from "../../hooks/mod.ts";
import { APIContext } from "./context.ts";
import { apiProvidersReducer } from "./reducer.ts";
import { useConfig } from "../../mod.ts";
import { Sc, ScProvider } from "../../../core/mod.js";
import { ApiPromise, WsProvider } from "../../../core/mod.ts";

export const APIProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const chains = useChains();
  const { chainRpcs, api } = useConfig();
  const [apis, dispatch] = useReducer(apiProvidersReducer, {});

  useEffect(() => {
    chains.forEach((chain) => {
      const provider = new WsProvider(chainRpcs[chain.id] || chain.rpcs[0]);

      ApiPromise.create({ provider }).then((api) => {
        dispatch({
          type: "ADD_API_PROVIDER",
          chainId: chain.id,
          apiProvider: { api, provider },
        });
      });
    });
  }, [chains, chainRpcs]);

  useEffect(() => {
    if (api?.default === "light-client") {
      const provider = new ScProvider(Sc, "all");

      provider.connect();
    }
  }, [api]);

  return <APIContext.Provider value={{ apis }} children={children} />;
};
