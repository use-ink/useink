import { Event, Events } from './model.ts';

interface AddEvent {
  type: 'ADD_EVENT';
  event: Event;
  address: string;
}

interface RemoveEvent {
  type: 'REMOVE_EVENT';
  eventId: string;
  address: string;
}

type Action = AddEvent | RemoveEvent;

export function eventsReducer(state: Events, action: Action): Events {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        [action.address]: [...(state[action.address] || []), action.event],
      };
    case 'REMOVE_EVENT': {
      const events = state[action.address];
      if (!events) return state;

      const idx = events.findIndex((e) => e.id === action.eventId);
      if (idx < 0) return state;

      const newContractState: Event[] = [
        ...events.slice(0, idx),
        ...events.slice(idx + 1, events.length),
      ];

      return {
        ...state,
        [action.address]: newContractState,
      };
    }
  }
}
