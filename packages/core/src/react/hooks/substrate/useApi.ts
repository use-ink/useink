import { ChainId } from "../../../chains/index";
import { IApiProvider } from "../../index";
import { API, APIContext } from "../../providers/api/index";
import { useContext } from "react";

export const useApis = (): API => useContext<API>(APIContext);

export const useApi = (chainId?: ChainId): IApiProvider | undefined =>
  chainId ? useApis()?.apis?.[chainId] : undefined;
