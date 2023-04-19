import { AlephZero, AlephZeroTestnet } from './AlephZero.ts';
import { Astar, Shibuya, Shiden } from './Astar.ts';
import { ContractsRococo } from './ContractsRococo.ts';
import { Development } from './Development.ts';
import { Khala, Phala, PhalaTestnet } from './Phala.ts';
import { Rococo } from './Rococo.ts';

export type { ChainId, IChain } from './types.ts';

export const Chains = {
  AlephZero,
  AlephZeroTestnet,
  Astar,
  ContractsRococo,
  Development,
  Khala,
  Phala,
  PhalaTestnet,
  Rococo,
  Shibuya,
  Shiden,
};

export {
  AlephZero,
  AlephZeroTestnet,
  Astar,
  ContractsRococo,
  Development,
  Khala,
  Phala,
  PhalaTestnet,
  Rococo,
  Shibuya,
  Shiden,
};

export const AllChains = Object.values(Chains);
