import { isValidHash, pseudoRandomHex } from '../../../utils';
import { useCallback, useState } from 'react';

export enum SalterError {
  InvalidHash = 'Invalid salt hash value.',
}

export interface SalterOptions {
  randomize: boolean;
  initialValue: string;
  length: number;
}

export interface SalterState {
  salt: string;
  regenerate: () => void;
  set: (salt: string) => void;
  error?: SalterError;
  resetState: () => void;
  validate: () => void;
}

export const useSalter = (options?: Partial<SalterOptions>): SalterState => {
  const { randomize = true, initialValue, length = 64 } = options || {};

  const initial =
    initialValue !== undefined
      ? initialValue
      : randomize
      ? pseudoRandomHex(length)
      : '';

  const [salt, setSalt] = useState(initial);
  const [error, setError] = useState<SalterError>();

  const validate = useCallback(() => {
    if (isValidHash(salt, length)) {
      error && setError(undefined);
      return;
    }

    setError(SalterError.InvalidHash);
  }, [salt]);

  const regenerate = useCallback(() => {
    const s = pseudoRandomHex();
    setSalt(s);
  }, []);

  const set = useCallback((s: string) => {
    setSalt(s);
  }, []);

  const resetState = useCallback(() => {
    setSalt('');
    setError(undefined);
  }, []);

  return {
    salt,
    resetState,
    regenerate,
    validate,
    set,
    error,
  };
};
