import {
  ApiBase,
  DispatchError,
  DispatchInfo,
  EventRecord,
  decodeError,
} from '../../../core';
import { formatEventName } from '../formatEventName';

export type ExtrinsicFailedEvent = EventRecord & {
  name: string;
  event: {
    data: {
      dispatchError: DispatchError;
      dispatchInfo: DispatchInfo;
    };
  };
};

export const isExtrinsicFailedEvent = ({ event }: EventRecord): boolean =>
  event.section === 'system' && event.method === 'ExtrinsicFailed';

export const asExtrinsicFailedEvent = (
  event: EventRecord,
): ExtrinsicFailedEvent | undefined => {
  if (!isExtrinsicFailedEvent(event)) return;

  return { ...event, name: formatEventName(event) } as ExtrinsicFailedEvent;
};

export const formatExtrinsicFailed = (
  event: EventRecord,
  api: ApiBase<'promise'> | undefined,
): string | undefined => {
  if (!api) return;

  const ev = asExtrinsicFailedEvent(event);
  if (!ev) return;

  return decodeError(ev.event?.data?.dispatchError, { contract: { api } });
};
