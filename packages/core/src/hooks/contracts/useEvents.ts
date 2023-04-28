import { Bytes } from '@polkadot/types';
import { useContext, useEffect } from 'react';
import { FIVE_SECONDS, HALF_A_SECOND } from '../../constants.ts';
import {
  Event,
  EventsContext,
} from '../../providers/events';
import { getExpiredItem } from '../../utils/getExpiredItem.ts';
import { useBlockHeader } from '../substrate/useBlockHeader.ts';
import { useConfig } from '../useConfig.ts';
import { useInterval } from '../useInterval.ts';
import { ChainContract } from './useContract.ts';

export const useEvents = (
  chainContract?: ChainContract,
): Event[] => {
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
      C.notifications?.expiration || FIVE_SECONDS,
    );
    for (const event of expiredEvents) {
      removeEvent({ eventId: event.id, address });
    }
  }, C.notifications?.checkInterval || HALF_A_SECOND);

  return eventsForAddress;
};
