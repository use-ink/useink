import { ApiPromise, QueryableModuleCalls } from "../../types/index";

export const getTimestamp = (
  api: ApiPromise | undefined
): QueryableModuleCalls<"promise"> | undefined => api?.query?.timestamp;
