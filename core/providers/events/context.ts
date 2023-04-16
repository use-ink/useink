import { createContext } from 'react';
import { DEFAULT_EVENTS, AddEventPayload, RemoveEventPayload, Events } from './model.ts';

export const EventsContext = createContext<{
  events: Events;
  addEvent: (payload: AddEventPayload) => void;
  removeEvent: (payload: RemoveEventPayload) => void;
}>({
  events: DEFAULT_EVENTS,
  addEvent: () => null,
  removeEvent: () => null,
});
