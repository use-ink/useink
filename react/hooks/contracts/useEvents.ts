import { useContext, useMemo } from 'react';
import { Event, EventsContext } from '../../providers/events/mod.ts';
import { RemoveEventPayload } from '../../providers/events/model.ts';
import { AccountId } from '../../../core/mod.ts';

export interface Events {
  events: Event[];
  removeEvent: (p: RemoveEventPayload) => void;
}

export const useEvents = (
  contractAddress: AccountId | string | undefined,
  filters?: string[],
): Events => {
  const { events, removeEvent } = useContext(EventsContext);

  const contractEvents = useMemo(() => {
    if (!contractAddress) return [];

    return events[contractAddress.toString()]?.filter(({ name }) =>
      filters ? filters.includes(name) : true
    ) ?? [];
  }, [events, contractAddress]);

  return { events: contractEvents, removeEvent };
};
