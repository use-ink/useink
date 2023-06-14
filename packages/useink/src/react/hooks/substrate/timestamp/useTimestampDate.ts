import { ChainId } from '../../../../chains';
import { useUnixMilliToDate } from '../../helpers';
import { useTimestampNow } from './useTimestampNow';

export const useTimestampDate = (chainId?: ChainId): Date | undefined => {
  const unix = useTimestampNow(chainId);

  return useUnixMilliToDate(unix);
};
