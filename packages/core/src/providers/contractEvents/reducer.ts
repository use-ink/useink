import { ContractEvent, ContractEvents } from './model.ts';

interface AddContractEvent {
  type: 'ADD_CONTRACT_EVENT';
  event: ContractEvent;
  address: string;
}

interface RemoveContractEvent {
  type: 'REMOVE_CONTRACT_EVENT';
  eventId: string;
  address: string;
}

type Action = AddContractEvent | RemoveContractEvent;

export function contractEventReducer(
  state: ContractEvents,
  action: Action,
): ContractEvents {
  switch (action.type) {
    case 'ADD_CONTRACT_EVENT':
      return {
        ...state,
        [action.address]: [...(state[action.address] || []), action.event],
      };
    case 'REMOVE_CONTRACT_EVENT': {
      const contractEvents = state[action.address];
      if (!contractEvents) return state;

      const idx = contractEvents.findIndex((e) => e.id === action.eventId);
      if (idx < 0) return state;

      const newContractState: ContractEvent[] = [
        ...contractEvents.slice(0, idx),
        ...contractEvents.slice(idx + 1, contractEvents.length),
      ];

      return {
        ...state,
        [action.address]: newContractState,
      };
    }
  }
}
