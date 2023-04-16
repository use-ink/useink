import { ContractPromise } from '@polkadot/api-contract';
import { ContractOptions } from '@polkadot/api-contract/types';
import { useMemo, useState } from 'react';
import { DecodedTxResult } from '../../types/contracts.ts';
import { SignerOptions } from '../../types/mod.ts';
import { call } from '../../utils/mod.ts';
import { useAbiMessage } from './useAbiMessage.ts';
import { useWallet } from '../useWallet.ts';

export type DryRunResult<T> = DecodedTxResult<T>;

export type Send<T> = (
  args?: unknown[],
  o?: ContractOptions,
  signerOptions?: SignerOptions,
) => Promise<DryRunResult<T> | undefined>;

interface DryRun<T> {
  send: Send<T>;
  isSubmitting: boolean;
  result?: DryRunResult<T>;
  resolved: Boolean;
  resetState: () => void;
}

export function useDryRun<T>(
  contract: ContractPromise | undefined,
  message: string,
): DryRun<T> {
  const { account, extension } = useWallet();
  const [result, setResult] = useState<DecodedTxResult<T>>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const abiMessage = useAbiMessage(contract, message);

  const send: Send<T> = useMemo(
    () => async (params, options) => {
      const tx = contract?.tx?.[message];
      if (!account || !contract || !extension || !abiMessage || !tx) return;

      setIsSubmitting(true);

      try {
        const resp = await call<T>(
          contract,
          abiMessage,
          account.address,
          params,
          options,
        );

        if (!resp || !resp.ok) return;

        const { gasConsumed, gasRequired, storageDeposit } = resp.value.raw;

        const requiresNoArguments = tx.meta.args.length === 0;
        const { partialFee } = await (requiresNoArguments
          ? tx(options || {})
          : tx(options || {}, params))
          .paymentInfo(account.address);

        const r = {
          ...resp,
          value: {
            ...resp.value,
            gasRequired,
            gasConsumed,
            storageDeposit,
            partialFee,
          },
        };

        setIsSubmitting(false);
        setResult(r);

        return r;
      } catch (e: unknown) {
        console.error(e);
        setIsSubmitting(false);
        return;
      }
    },
    [account, extension, contract, abiMessage],
  );

  return {
    send,
    isSubmitting,
    result,
    resolved: Boolean(result && !isSubmitting),
    resetState: () => {
      setIsSubmitting(false);
      setResult(undefined);
    },
  };
}
