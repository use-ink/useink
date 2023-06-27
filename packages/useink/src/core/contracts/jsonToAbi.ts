import { formatFileName, validateMetadata } from '../../utils';
import { Abi, ApiBase } from '../types';
import { DeriveMetadataOptions, MetadataState } from './types';

export const DEFAULT: MetadataState = {
  name: '',
  formattedFileName: '',
};

export const jsonToAbi = (
  options: DeriveMetadataOptions,
  source?: Record<string, unknown>,
  api?: ApiBase<'promise'> | null,
): MetadataState => {
  if (!source) return DEFAULT;
  let abi: Abi | undefined = undefined;

  try {
    abi = new Abi(source, api?.registry.getChainProperties());
    const name = options.name || abi.info.contract.name.toString();
    const { size } = options;

    return {
      source,
      name,
      abi,
      formattedFileName: formatFileName({ size, name }),
      ...validateMetadata(abi, options),
    };
  } catch (e) {
    console.error(e);

    return {
      source,
      name: '',
      formattedFileName: '',
      abi,
      ...validateMetadata(abi, options),
    };
  }
};
