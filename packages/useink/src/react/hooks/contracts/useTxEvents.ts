import { EventRecord } from '../../../core';
import { isInBlock } from '../../../utils';
import { Tx } from './useTx';
import { useCallback, useEffect, useState } from 'react';

type Eventable = Pick<Tx<unknown>, 'status'> & Pick<Tx<unknown>, 'result'>;

interface TxEvents {
  resetState: () => void;
  events: EventRecord[];
}

export const useTxEvents = (tx: Eventable): TxEvents => {
  const [events, setEvents] = useState<EventRecord[]>([]);

  const resetState = useCallback(() => setEvents([]), []);

  useEffect(() => {
    if (!isInBlock(tx) || !tx.result) return;

    setEvents([...tx.result.events]);
  }, [tx.status]);

  return { events, resetState };
};
