import { useContext, useMemo } from 'react';
import { Event, EventsContext } from '../../providers/events/mod.ts';
import { RemoveEventPayload } from '../../providers/events/model.ts';
import { AccountId } from '../../../core/mod.ts';

export interface Events {
  events: Event[];
  removeEvent: (p: RemoveEventPayload) => void;
}

export const useEvents = (
  account: AccountId | undefined,
  filters?: string[],
): Events => {
  const { events, removeEvent } = useContext(EventsContext);

  const contractEvents = useMemo(() => {
    if (!account) return [];

    return events[account.toString()]?.filter(({ name }) =>
      filters ? filters.includes(name) : true
    ) ?? [];
  }, [events, account]);

  return { events: contractEvents, removeEvent };
};
