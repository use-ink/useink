import { useChain, useWallet } from '../';
import { ChainId } from '../../../chains';
import { Hash, SignerOptions, transfer } from '../../../core';
import { useApi } from './useApi.ts';
import { useCallback, useMemo, useState } from 'react';

export type SignAndSendTransfer = (
  to: string,
  amount: number,
  options?: SignerOptions,
) => void;

export interface TransferState {
  signAndSend: SignAndSendTransfer;
  hash: Hash | undefined;
  error: unknown | undefined;
  resetState: () => void;
  isSubmitting: boolean;
}

export const useTransfer = (chainId?: ChainId): TransferState | undefined => {
  const [hash, setHash] = useState<Hash>();
  const [error, setError] = useState<unknown>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { account } = useWallet();
  const chainConfig = useChain(chainId);
  const chain = useApi(chainConfig?.id);

  const resetState = useCallback(() => {
    setHash(undefined);
    setError(undefined);
  }, []);

  const signAndSend: SignAndSendTransfer = useMemo(
    () => (to, amount, options) => {
      if (!chain?.api || !account || !account.address || !account.wallet) {
        return;
      }
      setIsSubmitting(true);
      transfer(chain.api, to, amount, account?.wallet.extension.signer, options)
        .then(setHash)
        .catch(setError)
        .finally(() => setIsSubmitting(false));
    },
    [chain?.api, account?.address],
  );

  return { signAndSend, error, hash, resetState, isSubmitting };
};
