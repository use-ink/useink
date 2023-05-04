export type EventPayload = {
  createdAt: number;
  name: string;
  args: unknown[];
};

export type AddEventPayload = {
  event: Omit<EventPayload, 'createdAt'>;
  address: string;
};

export type RemoveEventPayload = {
  eventId: string;
  address: string;
};

export type Event = { id: string } & EventPayload;

export type Events = {
  [address: string]: Event[];
};

export const DEFAULT_EVENTS: Events = {};
