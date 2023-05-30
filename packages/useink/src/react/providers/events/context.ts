import { createContext } from 'react';
import {
  AddEventPayload,
  DEFAULT_EVENTS,
  Events,
  RemoveEventPayload,
} from './model.ts';

export const EventsContext = createContext<{
  events: Events;
  addEvent: (payload: AddEventPayload) => void;
  removeEvent: (payload: RemoveEventPayload) => void;
}>({
  events: DEFAULT_EVENTS,
  addEvent: () => null,
  removeEvent: () => null,
});
