// @public
export type ContractEventPayload = {
  createdAt: number;
  name: string;
  args: unknown[];
};

// @internal
export type AddContractEventPayload = {
  event: Omit<ContractEventPayload, 'createdAt'>;
  address: string;
};

// @internal
export type RemoveContractEventPayload = {
  eventId: string;
  address: string;
};

// @public
export type ContractEvent = { id: string } & ContractEventPayload;

// @public
export type ContractEvents = {
  [address: string]: ContractEvent[];
};

export const DEFAULT_CONTRACT_EVENTS: ContractEvents = {};
