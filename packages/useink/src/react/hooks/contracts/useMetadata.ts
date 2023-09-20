import { ChainId } from '../../../chains';
import {
  DEFAULT,
  MetadataOptions,
  MetadataState,
  jsonToAbi,
} from '../../../core';
import { MetadataError, toBasicMetadata } from '../../../utils';
import { useApi } from '../substrate/useApi';
import { useEffect, useState } from 'react';

export interface BasicMetadataFile {
  data: Uint8Array;
  name: string;
  size: number;
}

export interface UseMetadata extends MetadataState {
  set: (_: File) => void;
  clear: () => void;
}

const utf8decoder = new TextDecoder();

const formatName = (n: string): string =>
  n.replace('.contract', '').replace('.json', '').split('_').join(' ');

export function useMetadata(
  options: MetadataOptions = { requireWasm: true },
  initialValue?: Record<string, unknown>,
  chainId?: ChainId,
): UseMetadata {
  const chainApi = useApi(chainId);
  const { requireWasm } = options;
  const [state, setState] = useState<MetadataState>(() =>
    jsonToAbi({ ...options }, initialValue, chainApi?.api),
  );

  function set(file: File): void {
    toBasicMetadata(file)
      .then((basicFile) => {
        const json = JSON.parse(utf8decoder.decode(basicFile.data)) as Record<
          string,
          unknown
        >;

        const newState = jsonToAbi(
          {
            requireWasm: requireWasm,
            name: formatName(basicFile.name),
            size: basicFile.size,
          },
          json,
          chainApi?.api,
        );

        if (newState.error) {
          setState({
            ...DEFAULT,
            error: newState.error,
          });

          return;
        }

        setState(newState);
      })
      .catch((_) => {
        setState({
          ...DEFAULT,
          error: MetadataError.InvalidFile,
        });
      });
  }

  function clear(): void {
    setState(DEFAULT);
  }

  useEffect((): void => {
    setState(
      jsonToAbi({ requireWasm: requireWasm }, initialValue, chainApi?.api),
    );
  }, [chainApi?.api, initialValue, requireWasm]);

  return {
    ...state,
    set,
    clear,
  };
}
