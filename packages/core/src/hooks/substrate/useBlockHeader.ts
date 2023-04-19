import { useContext } from "react";
import { BlockHeaderContext } from "../../providers/blockHeader";
import { ChainId } from "useink/chains";
import { BlockHeader } from ".";
import { useChain } from "../useChain.ts";

export type { BlockHeader } from "../../providers/blockHeader";

export const useBlockHeader = (chainId?: ChainId): BlockHeader | undefined => {
  const chain = useChain(chainId);
  return chain ? useContext(BlockHeaderContext)[chain.id] : undefined;
};

export const useBlockHeaders = () => useContext(BlockHeaderContext);
