import { Validation } from '../../../utils';
import { Abi } from '../../types';

export interface MetadataOptions {
  requireWasm?: boolean;
}

export interface DeriveMetadataOptions extends MetadataOptions {
  name?: string;
  size?: number;
}

export interface MetadataState extends Validation {
  source?: Record<string, unknown>;
  name: string;
  formattedFileName: string;
  abi?: Abi;
}
