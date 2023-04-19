import { createContext } from 'react';
import {
  AddContractEventPayload,
  ContractEvents,
  DEFAULT_CONTRACT_EVENTS,
  RemoveContractEventPayload,
} from './model.ts';

export const ContractEventsContext = createContext<{
  events: ContractEvents;
  addContractEvent: (payload: AddContractEventPayload) => void;
  removeContractEvent: (payload: RemoveContractEventPayload) => void;
}>({
  events: DEFAULT_CONTRACT_EVENTS,
  addContractEvent: () => null,
  removeContractEvent: () => null,
});
