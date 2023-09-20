import { useCallback, useState } from 'react';
import { SignatureResult } from '../../../core/index.ts';
import { useWallet } from '../wallets/useWallet.ts';

export type Sign = (data?: string) => void;

export enum SignerError {
  AccountNotConnected = 'No accounts are connected.',
  SignatureRejected = 'Signature rejected.',
  SignatureFailed = 'Signature failed.',
}

export interface MessageSigner {
  sign: Sign;
  signature: string | undefined;
  resetState: () => void;
  error: SignerError | undefined;
}

export function useMessageSigner(): MessageSigner {
  const { account } = useWallet();
  const [signature, setSignature] = useState<SignatureResult>();
  const [error, setError] = useState<SignerError>();

  const sign: Sign = useCallback(
    async (data = '') => {
      if (!account || !account.signer?.signRaw) {
        setError(SignerError.AccountNotConnected);
        return;
      }

      setError(undefined);

      account.signer
        ?.signRaw?.({
          address: account.address,
          data,
          type: 'bytes',
        })
        .then(({ signature }) => setSignature(signature))
        .catch((e) => {
          if (e.toString() === 'Error: Cancelled') {
            setError(SignerError.SignatureRejected);
            return;
          }

          setError(SignerError.SignatureFailed);
        });
    },
    [account, account?.wallet?.extension?.signer],
  );

  const resetState = useCallback(() => {
    setSignature(undefined);
    setError(undefined);
  }, []);

  return {
    sign,
    signature,
    resetState,
    error,
  };
}
