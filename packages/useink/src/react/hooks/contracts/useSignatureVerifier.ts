import { signatureVerify } from '../../../utils';
import { useCallback, useState } from 'react';

type VerificationParams = Parameters<typeof signatureVerify>;

export type Verify = (
  data: VerificationParams[0],
  signature: VerificationParams[1],
  addressOrPublicKey: VerificationParams[2],
) => void;

export enum VerificationState {
  Unchecked = 'Unchecked',
  Valid = 'Valid signature',
  Invalid = 'Invalid signature',
}

export interface SignatureVerifier {
  verify: Verify;
  result: VerificationState;
  resetState: () => void;
}

export function useSignatureVerifier(): SignatureVerifier {
  const [result, setVerificationResult] = useState(VerificationState.Unchecked);

  const verify: Verify = useCallback<Verify>(
    (data, signature, addressOrPublicKey) => {
      const { isValid } = signatureVerify(data, signature, addressOrPublicKey);

      if (isValid) {
        setVerificationResult(VerificationState.Valid);
        return;
      }

      setVerificationResult(VerificationState.Invalid);
    },
    [],
  );

  const resetState = useCallback(() => {
    setVerificationResult(VerificationState.Unchecked);
  }, []);

  return {
    verify,
    result,
    resetState,
  };
}
