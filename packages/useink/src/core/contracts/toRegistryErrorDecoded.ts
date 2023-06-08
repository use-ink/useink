import {
  ContractExecResultResult,
  Registry,
  RegistryError,
<<<<<<<< HEAD:packages/useink/src/core/contracts/toRegistryErrorDecoded.ts
} from '../types/index';
========
} from '../types/mod.ts';
>>>>>>>> main:core/contracts/toRegistryErrorDecoded.ts

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
