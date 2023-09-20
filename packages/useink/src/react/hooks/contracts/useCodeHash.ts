import { isValidHash } from '../../../utils';
import { useCallback, useEffect, useState } from 'react';

export enum CodeHashError {
  InvalidHash = 'Invalid code hash value.',
}

export interface CodeHashState {
  codeHash: string;
  set: (hash: string) => void;
  error?: CodeHashError;
  resetState: () => void;
}

export const useCodeHash = (): CodeHashState => {
  const [codeHash, setCodeHash] = useState('');
  const [error, setError] = useState<CodeHashError>();

  useEffect(() => {
    if (isValidHash(codeHash, 64)) {
      error && setError(undefined);
      return;
    }

    codeHash && setError(CodeHashError.InvalidHash);
  }, [codeHash]);

  const set = useCallback((s: string) => {
    setCodeHash(s || '');
  }, []);

  const resetState = useCallback(() => {
    setCodeHash('');
    setError(undefined);
  }, []);

  return {
    codeHash,
    resetState,
    set,
    error,
  };
};
