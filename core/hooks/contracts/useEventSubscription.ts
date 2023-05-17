import { Bytes } from '@polkadot/types';
import { useContext, useEffect } from 'react';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import { Event, EventsContext } from '../../providers/events/mod.ts';
import { getExpiredItem } from '../../utils/getExpiredItem.ts';
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { useConfig } from '../config/useConfig.ts';
import { ChainContract } from './useContract.ts';
import { useInterval } from '../internal/mod.ts';

export const useEventSubscription = (
  chainContract: ChainContract | undefined,
): void => {
  const { events, addEvent, removeEvent } = useContext(
    EventsContext,
  );
  const { blockNumber, header } = useBlockHeader(chainContract?.chainId) || {};
  const C = useConfig();

  const address = chainContract?.contract?.address?.toString() || '';

  const eventsForAddress = chainContract ? events[address] || [] : [];

  useEffect(() => {
    const contract = chainContract?.contract;
    header?.hash &&
      contract &&
      contract.api.at(header?.hash).then((apiAt) => {
        apiAt?.query?.system?.events &&
          apiAt.query.system.events((encodedEvent: any[]) => {
            encodedEvent.forEach(({ event }) => {
              if (
                contract.api.events.contracts?.ContractEmitted &&
                contract.api.events.contracts.ContractEmitted.is(event)
              ) {
                const [contractAddress, contractEvent] = event.data;
                if (
                  address && contractAddress &&
                  contractAddress.toString().toLowerCase() ===
                    address.toLowerCase()
                ) {
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
              }
            });
          });
      });
  }, [chainContract, blockNumber]);

  useInterval(() => {
    const expiredEvents = getExpiredItem<Event>(
      eventsForAddress,
      C.events?.expiration || FIVE_SECONDS,
    );
    for (const event of expiredEvents) {
      removeEvent({ eventId: event.id, address });
    }
  }, C.events?.checkInterval || HALF_A_SECOND);
};
