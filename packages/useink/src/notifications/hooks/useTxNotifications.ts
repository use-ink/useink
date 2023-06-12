import { ChainId } from '../../chains/types.ts';
import { Tx } from '../../index';
import { useNotifications } from './useNotifications.ts';
import { useEffect } from 'react';

export function useTxNotifications<T>(tx: Tx<T>, chain?: ChainId): void {
  const { addNotification } = useNotifications();

  useEffect(() => {
    // TODO: Add a way for user's to easily customize defaults
    if (['Ready', 'None'].includes(tx.status)) return;

    addNotification({
      type: tx.status,
      message: tx.status,
      result: tx.result,
      chain,
    });
  }, [tx.status]);
}
