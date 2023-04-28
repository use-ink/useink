import { ChainId } from '../../../chains/mod.ts';
import { SetChainRpc } from '../../providers/config/model.ts';
import { useChain } from './useChain.ts';
import { useConfig } from './useConfig.ts';

export interface RpcList {
  rpcs: string[];
  setChainRpc: SetChainRpc;
}

export const useChainRpcList = (chainId?: ChainId): RpcList => {
  const chain = useChain(chainId);
  const { setChainRpc } = useConfig();

  return ({ rpcs: chain?.rpcs || [], setChainRpc });
};
