import { isValidHash, pseudoRandomHex } from '../../../utils';
import { useCallback, useEffect, useState } from 'react';

export enum SalterError {
  InvalidHash = 'Invalid salt hash value.',
}

export interface SalterState {
  salt: string;
  regenerate: () => void;
  set: (salt: string) => void;
  error?: SalterError;
  resetState: () => void;
}

export const useSalter = (): SalterState => {
  const [salt, setSalt] = useState(pseudoRandomHex());
  const [error, setError] = useState<SalterError>();

  useEffect(() => {
    if (isValidHash(salt)) {
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
    set,
    error,
  };
};
