import { ApiBase } from '../../types/index';
import { getTimestampQuery } from './getTimestampQuery.ts';

export const getTimestampUnix = async (
  api: ApiBase<'promise'> | undefined,
): Promise<number | undefined> => {
  const query = getTimestampQuery(api);
  if (!query?.now) return;

  const t = await query.now();
  const stringWithoutCommas = t.toHuman()?.toString().split(',').join('');

  return stringWithoutCommas ? parseInt(stringWithoutCommas) : undefined;
};
