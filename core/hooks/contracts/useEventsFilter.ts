import { useMemo } from 'react';
import { Event } from '../../providers/events/mod.ts';

export const useEventFilter = (
  contractAddress: string,
): Event[] => {
  const { events } = useEvents();

  return useMemo(() => events[contractAddress] || [], [
    events,
    contractAddress,
  ]);
};
