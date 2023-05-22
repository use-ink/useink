import { useContext, useMemo } from 'react';
import { Event, EventsContext } from '../../providers/events/mod.ts';
import { RemoveEventPayload } from '../../providers/events/model.ts';

export interface Events {
  events: Event[];
  removeEvent: (p: RemoveEventPayload) => void;
}

export const useEvents = (
  address: string | undefined,
  filters?: string[],
): Events => {
  const { events, removeEvent } = useContext(EventsContext);

  const contractEvents = useMemo(() => {
    if (!address) return [];

    return events[address]?.filter(({ name }) =>
      filters ? filters.includes(name) : true
    ) ?? [];
  }, [events, address]);

  return { events: contractEvents, removeEvent };
};
