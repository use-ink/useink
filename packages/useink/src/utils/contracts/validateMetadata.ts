import { Abi, MetadataOptions } from '../../core';

export enum MetadataError {
  InvalidFile = 'Invalid file.',
  EmptyWasm = 'Wasm field not found.',
  InvalidWasm = 'Invalid Wasm field.',
}

export interface Validation {
  error?: MetadataError;
}

export const validateMetadata = (
  metadata: Abi | undefined,
  { requireWasm }: MetadataOptions,
): Validation => {
  if (!metadata) return { error: MetadataError.InvalidFile };

  const wasm = metadata.info.source.wasm;
  const isWasmEmpty = wasm.isEmpty;
  const isWasmInvalid = !WebAssembly.validate(wasm);

  if (requireWasm && isWasmEmpty) {
    return { error: MetadataError.EmptyWasm };
  }

  if (requireWasm && isWasmInvalid) {
    return { error: MetadataError.InvalidWasm };
  }

  return {};
};
