import { unixMilliToDate } from '../../../utils/helpers/unixMilliToDate';
import { useMemo } from 'react';

export const useUnixMilliToDate = (
  unixInMilliSeconds: number | undefined,
): Date | undefined =>
  useMemo(() => unixMilliToDate(unixInMilliSeconds), [unixInMilliSeconds]);
