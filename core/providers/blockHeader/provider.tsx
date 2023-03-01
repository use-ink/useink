import React from 'react';
import { useApi } from '../../hooks/useApi.ts';
import { BlockHeaderContext } from './context.ts';
import { BlockHeader } from './model.ts';

const toBlockNumber = (valWithComma: string | undefined): number =>
  parseInt(`${valWithComma?.split(',').join('')}`);

export const BlockHeaderProvider: React.FC<React.PropsWithChildren<any>> = (
  { children },
) => {
  const { api } = useApi();
  const [blockHeader, setBlockHeader] = React.useState<BlockHeader>({
    blockNumber: undefined,
    header: undefined,
  });

  React.useEffect(() => {
    // deno-lint-ignore require-await
    async function listenToBlocks() {
      return api?.rpc.chain.subscribeNewHeads((header) => {
        try {
          const blockNumber = toBlockNumber(
            header.number.toHuman()?.toString(),
          );
          blockNumber && setBlockHeader({ blockNumber, header });
        } catch (e) {
          console.error(e);
        }
      });
    }
    let cleanUp: VoidFunction | undefined;

    if (listenToBlocks) {
      listenToBlocks()
        .then((unsub) => (cleanUp = unsub))
        .catch(console.error);
    }

    return () => cleanUp && cleanUp();
  }, [api]);

  return (
    <BlockHeaderContext.Provider value={blockHeader}>
      {children}
    </BlockHeaderContext.Provider>
  );
};
