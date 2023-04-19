import { ChainId } from "useink/chains";
import { IApiProvider } from "..";
import { API, APIContext } from "../providers/api";
import { useContext } from "react";

export const useApis = (): API => useContext<API>(APIContext);

export const useApi = (chainId?: ChainId): IApiProvider | undefined =>
  chainId ? useApis()?.apis?.[chainId] : undefined;
