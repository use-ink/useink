import { ChainId } from '../../../../chains';
import { QueryableModuleCalls, getTimestampQuery } from '../../../../core';
import { useApi } from '../useApi';
import { useEffect, useState } from 'react';

// Get a queryable function that can then be used to call a chain: `await timestampQuery.now()`
export const useTimestampQuery = (
  chainId?: ChainId,
): QueryableModuleCalls<'promise'> | undefined => {
  const chainApi = useApi(chainId);
  const [timestamp, setTimestamp] = useState<QueryableModuleCalls<'promise'>>();

  useEffect(() => {
    const t = getTimestampQuery(chainApi?.api);
    setTimestamp(t);
  }, [chainApi?.api]);

  return timestamp;
};
