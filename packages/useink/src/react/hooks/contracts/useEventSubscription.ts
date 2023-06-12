import { Bytes } from '../../../core/index';
import { getExpiredItem } from '../../../utils/index';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import { Event, EventsContext } from '../../providers/events/index';
import { useConfig } from '../config/useConfig.ts';
import { useInterval } from '../internal/useInterval.ts';
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { ChainContract } from './types.ts';
import { IEventLike } from '@polkadot/types/types/events';
import { useContext, useEffect } from 'react';

export const useEventSubscription = (
  chainContract: ChainContract | undefined,
): void => {
  const { events, addEvent, removeEvent } = useContext(EventsContext);
  const { blockNumber, header } = useBlockHeader(chainContract?.chainId) || {};
  const C = useConfig();

  const address = chainContract?.contract?.address?.toString() || '';
  const contractEvents = events?.[address] || [];

  useEffect(() => {
    const contract = chainContract?.contract;
    if (!header?.hash || !contract) return;

    contract.api.at(header?.hash).then((apiAt) => {
      apiAt.query.system?.events?.((encodedEvent: { event: IEventLike }[]) => {
        encodedEvent.forEach(({ event }) => {
          if (contract.api.events.contracts?.ContractEmitted?.is(event)) {
            const [contractAddress, contractEvent] = event.data;
            if (
              !address ||
              !contractAddress ||
              !contractEvent ||
              contractAddress.toString().toLowerCase() !== address.toLowerCase()
            )
              return;

            try {
              const decodedEvent = contract.abi.decodeEvent(
                contractEvent as Bytes,
              );

              const eventItem = {
                address,
                event: {
                  name: decodedEvent.event.identifier,
                  args: decodedEvent.args.map((v) => v.toHuman()),
                },
              };

              addEvent(eventItem);
            } catch (e) {
              console.error(e);
            }
          }
        });
      });
    });
  }, [chainContract?.contract, blockNumber]);

  useInterval(() => {
    if (C.events?.expiration === 0) return;

    const expiredEvents = getExpiredItem<Event>(
      contractEvents,
      C.events?.expiration || FIVE_SECONDS,
    );

    for (const event of expiredEvents) {
      removeEvent({ eventId: event.id, address });
    }
  }, C.events?.checkInterval || HALF_A_SECOND);
};
