import { BN } from '..';
import { ApiBase, Balance } from '../../core';

export const bnToBalance = (
  api: Pick<ApiBase<'promise'>, 'createType'> | undefined,
  bn: BN | undefined,
): Balance | undefined => api?.createType('Balance', bn);
