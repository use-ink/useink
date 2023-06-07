import { ApiBase, Balance } from '../../core/mod.ts';
import { BN } from '../mod.ts';

export const bnToBalance = (
  api: Pick<ApiBase<'promise'>, 'createType'> | undefined,
  bn: BN | undefined,
): Balance | undefined => api?.createType('Balance', bn);
