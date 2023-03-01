import React from 'react';
import { ContractEventsContext } from './context.ts';
import {
  AddContractEventPayload,
  DEFAULT_CONTRACT_EVENTS,
  RemoveContractEventPayload,
} from './model.ts';
import { useIsMounted } from '../../hooks/useIsMounted.ts';
import { nanoid } from 'nanoid';
import { contractEventReducer } from './reducer.ts';

// @internal
export const ContractEventsProvider: React.FC<React.PropsWithChildren<any>> = (
  { children },
) => {
  const [events, dispatch] = React.useReducer(
    contractEventReducer,
    DEFAULT_CONTRACT_EVENTS,
  );
  const isMounted = useIsMounted();

  const addContractEvent = React.useCallback(
    ({ event, address }: AddContractEventPayload) => {
      if (isMounted()) {
        dispatch({
          type: 'ADD_CONTRACT_EVENT',
          address,
          event: { ...event, id: nanoid(), createdAt: Date.now() },
        });
      }
    },
    [dispatch],
  );

  const removeContractEvent = React.useCallback(
    ({ eventId, address }: RemoveContractEventPayload) => {
      if (isMounted()) {
        dispatch({
          type: 'REMOVE_CONTRACT_EVENT',
          address,
          eventId,
        });
      }
    },
    [dispatch],
  );

  return (
    <ContractEventsContext.Provider
      value={{ addContractEvent, events, removeContractEvent }}
      children={children}
    />
  );
};
