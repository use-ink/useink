import { useMemo } from 'react';
import { unixMilliToDate } from '../../../utils/helpers/unixMilliToDate';

export const useUnixMilliToDate = (
  unixInMilliSeconds: number | undefined,
): Date | undefined =>
  useMemo(() => unixMilliToDate(unixInMilliSeconds), [unixInMilliSeconds]);
