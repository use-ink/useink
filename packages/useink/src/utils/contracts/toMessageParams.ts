import { AbiParam, ApiBase } from '../../core';

export const toMessageParams = (
  api: ApiBase<'promise'>,
  abiParams: AbiParam[],
  userParams?: Record<string, unknown> | null,
): unknown[] => {
  return abiParams.map(({ name, type: { type } }) => {
    const value = userParams ? userParams[name] : null;

    if (type === 'Balance') return api.registry.createType('Balance', value);

    return value || null;
  });
};
