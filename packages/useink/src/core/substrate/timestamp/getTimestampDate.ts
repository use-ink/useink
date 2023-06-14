import { unixMilliToDate } from '../../../utils';
import { ApiBase } from '../../types/index';
import { getTimestampUnix } from './getTimestampNow.ts';

export const getTimestampDate = async (
  api: ApiBase<'promise'> | undefined,
): Promise<Date | undefined> => {
  const now = await getTimestampUnix(api);
  if (!now) return;

  return unixMilliToDate(now);
};
