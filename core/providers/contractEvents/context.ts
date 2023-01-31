import { createContext } from 'react';
import { DEFAULT_CONTRACT_EVENTS, AddContractEventPayload, RemoveContractEventPayload, ContractEvents } from './model.ts';

export const ContractEventsContext = createContext<{
  events: ContractEvents;
  addContractEvent: (payload: AddContractEventPayload) => void;
  removeContractEvent: (payload: RemoveContractEventPayload) => void;
}>({
  events: DEFAULT_CONTRACT_EVENTS,
  addContractEvent: () => null,
  removeContractEvent: () => null,
});
