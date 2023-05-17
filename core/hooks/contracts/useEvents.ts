import { useContext, useMemo } from 'react';
import { Event, EventsContext } from '../../providers/events/mod.ts';

export const useEvents = (
  address: string | undefined,
  filters?: string[],
): Event[] => {
  const { events } = useContext(EventsContext);

  return useMemo(() => {
    if (!address) return [];

    return events[address]?.filter(({ name }) =>
      filters ? filters.includes(name) : true
    ) ?? [];
  }, [events, address]);
};
