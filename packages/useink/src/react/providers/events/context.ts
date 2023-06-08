import {
  AddEventPayload,
  DEFAULT_EVENTS,
  Events,
  RemoveEventPayload,
} from './model.ts';
import { createContext } from 'react';
<<<<<<<< HEAD:packages/useink/src/react/providers/events/context.ts
========
import {
  AddEventPayload,
  DEFAULT_EVENTS,
  Events,
  RemoveEventPayload,
} from './model.ts';
>>>>>>>> main:react/providers/events/context.ts

export const EventsContext = createContext<{
  events: Events;
  addEvent: (payload: AddEventPayload) => void;
  removeEvent: (payload: RemoveEventPayload) => void;
}>({
  events: DEFAULT_EVENTS,
  addEvent: () => null,
  removeEvent: () => null,
});
