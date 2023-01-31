import BN from 'bn.js';
import { Registry, WeightV2 } from '../../types/mod.ts';

export const toWeightV2 = (
  registry: Registry,
  refTime: typeof BN,
  proofSize: typeof BN,
): WeightV2 => registry.createType('WeightV2', { refTime, proofSize });
