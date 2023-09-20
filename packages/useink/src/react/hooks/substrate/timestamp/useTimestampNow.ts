import { ChainId } from '../../../../chains';
import { getTimestampUnix } from '../../../../core';
import { useApi } from '../useApi';
import { useBlockHeader } from '../useBlockHeader';
import { useEffect, useState } from 'react';

// Get the current timestamp in milliseconds
export const useTimestampNow = (chainId?: ChainId): number | undefined => {
  const [now, setNow] = useState<number>();
  const b = useBlockHeader(chainId);
  const chainApi = useApi(chainId);

  useEffect(() => {
    getTimestampUnix(chainApi?.api).then(setNow).catch();
  }, [b?.blockNumber]);

  return now;
};
