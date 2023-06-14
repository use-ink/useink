import { EventRecord } from '../../core';

export const formatEventName = ({ event }: EventRecord): string =>
  `${event.section}:${event.method}`;
