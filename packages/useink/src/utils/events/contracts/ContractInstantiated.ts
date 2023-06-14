import { EventRecord } from '../../../core';
import { formatEventName } from '../formatEventName';
import { IEvent } from '../types';

export interface ContractInstantiated extends IEvent {
  deployer: string;
  contractAddress: string;
}

export const isContractInstantiatedEvent = ({ event }: EventRecord): boolean =>
  event.section === 'contracts' && event.method === 'Instantiated';

export const asContractInstantiatedEvent = (
  eventRecord: EventRecord,
): ContractInstantiated | undefined => {
  if (!isContractInstantiatedEvent(eventRecord)) return;

  const deployer = eventRecord.event.data[0]?.toString();
  const contractAddress = eventRecord.event.data[1]?.toString();
  if (!deployer || !contractAddress) return;

  return { deployer, contractAddress, name: formatEventName(eventRecord) };
};
