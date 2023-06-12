import {
  ContractExecResultResult,
  Registry,
  RegistryError,
} from '../types/index';

export const toRegistryErrorDecoded = (
  registry: Registry,
  result: ContractExecResultResult,
): RegistryError | undefined => {
  try {
    return result.isErr && result.asErr.isModule
      ? registry.findMetaError(result.asErr.asModule)
      : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
