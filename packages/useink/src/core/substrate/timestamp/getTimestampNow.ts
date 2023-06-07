import { ApiPromise, Codec } from '../../types/index';
import { getTimestamp } from './getTimestamp.ts';

export const getTimestampNow = async (
  api: ApiPromise | undefined,
): Promise<Codec | undefined> => {
  const timestamp = getTimestamp(api);
  if (!timestamp?.now) return;

  return await timestamp.now();
};
