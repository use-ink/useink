import { ApiPromise, QueryableModuleCalls } from '../../types/mod.ts';

export const getTimestamp = (
  api: ApiPromise | undefined,
): QueryableModuleCalls<'promise'> | undefined => api?.query?.timestamp;
