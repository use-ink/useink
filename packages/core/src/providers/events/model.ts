// @public
export type EventPayload = {
  createdAt: number;
  name: string;
  args: unknown[];
};

// @internal
export type AddEventPayload = {
  event: Omit<EventPayload, 'createdAt'>;
  address: string;
};

// @internal
export type RemoveEventPayload = {
  eventId: string;
  address: string;
};

// @public
export type Event = { id: string } & EventPayload;

// @public
export type Events = {
  [address: string]: Event[];
};

export const DEFAULT_EVENTS: Events = {};
