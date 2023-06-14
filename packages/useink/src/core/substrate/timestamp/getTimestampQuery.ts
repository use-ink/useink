import { ApiBase, QueryableModuleCalls } from '../../types/index';

export const getTimestampQuery = (
  api: ApiBase<'promise'> | undefined,
): QueryableModuleCalls<'promise'> | undefined => api?.query?.timestamp;
