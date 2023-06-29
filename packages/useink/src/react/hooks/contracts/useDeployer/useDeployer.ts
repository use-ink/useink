import { ChainId } from '../../../../chains/index.ts';
import {
  BlueprintPromise,
  CodePromise,
  CodeSubmittableResult,
  ContractInstantiateResult,
  StorageDeposit,
  TransactionStatus,
  WeightV2,
  decodeError,
  toDeployOptions,
} from '../../../../core/index.ts';
import {
  BN_ZERO,
  NOOP,
  encodeSalt,
  formatExtrinsicFailed,
  isContractInstantiatedEvent,
  isTxCancelledError,
  isValidHash,
  toMessageParams,
} from '../../../../utils/index.ts';
import { useChain } from '../../config/useChain.ts';
import { useConfig } from '../../config/useConfig.ts';
import { useApi } from '../../substrate/useApi.ts';
import { useWallet } from '../../wallets/useWallet.ts';
import { useTxEvents } from '../useTxEvents.ts';
import { Deploy, DeploySignAndSend, DeployTx, DeployerError } from './types.ts';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function useDeployer<T>(chainId?: ChainId): Deploy<T> {
  const { account } = useWallet();
  const chainApi = useApi(chainId);
  const chain = useChain(chainId);
  const C = useConfig();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [willBeSuccessful, setWillBeSuccessful] = useState(false);
  const [status, setStatus] = useState<TransactionStatus>('None');
  const [result, setResult] = useState<CodeSubmittableResult<'promise'>>();
  const [contractAddress, setContractAddress] = useState<string>();
  const [error, setError] = useState<string>();
  const [gasConsumed, setGasConsumed] = useState<WeightV2>();
  const [gasRequired, setGasRequired] = useState<WeightV2>();
  const [storageDeposit, setStorageDeposit] = useState<StorageDeposit>();
  const txEvents = useTxEvents({ status, result });

  useEffect(() => {
    txEvents.events.forEach((event) => {
      const failure = formatExtrinsicFailed(event, chainApi?.api);
      failure && setError(failure);
    });
  }, [txEvents]);

  const wasDeployed = useMemo(
    () => Boolean(txEvents.events.find(isContractInstantiatedEvent)),
    [txEvents.events],
  );

  const resetState = useCallback(() => {
    setResult(undefined);
    setError(undefined);
    setContractAddress(undefined);
    setStatus('None');
    setIsSubmitting(false);
    setGasConsumed(undefined);
    setGasRequired(undefined);
    setStorageDeposit(undefined);
    txEvents.resetState();
  }, []);

  const dryRun: DeploySignAndSend<Promise<DeployTx | undefined>> = useMemo(
    () =>
      async (abi, constructorName, constructorParams, options, cb = NOOP) => {
        if (!chainApi?.api) {
          setError(DeployerError.ApiInstanceNotFound);
          return;
        }

        setError(undefined);

        const constructorMessage = constructorName
          ? abi.constructors.find(({ method }) => method === constructorName)
          : abi.constructors?.[0];

        if (!constructorMessage) {
          setError(DeployerError.ConstructorNotFound);
          return;
        }

        const { codeHash } = toDeployOptions(options);
        const wasm = abi.info.source.wasm;
        const hasCodeHashOrWasm = codeHash !== undefined || !!wasm;

        if (!hasCodeHashOrWasm) {
          setError(DeployerError.NoCodeHashOrWasm);
          return;
        }

        if (codeHash !== undefined && !isValidHash(codeHash, 64)) {
          setError(DeployerError.InvalidCodeHash);
          return;
        }

        const code = codeHash
          ? new BlueprintPromise(chainApi.api, abi, codeHash)
          : new CodePromise(chainApi.api, abi, wasm.toU8a());

        const abiParams = constructorMessage.args;
        if (!chainApi?.api?.call?.contractsApi?.instantiate) {
          setError(DeployerError.InstantiateNotSupportedForApi);
          return;
        }

        const messageParams = constructorMessage.toU8a(
          toMessageParams(chainApi.api, abiParams, constructorParams || {}),
        );

        const caller =
          account?.address ||
          (chain?.id ? C?.caller?.[chain?.id] : C.caller?.default);

        const gasLimitMax = null;
        const storageDepositMax = null;

        const payableValue = chainApi.api.registry.createType(
          'Balance',
          toDeployOptions(options).value,
        );

        const params = [
          caller,
          payableValue,
          gasLimitMax,
          storageDepositMax,
          codeHash ? { Existing: codeHash } : { Upload: abi.info.source.wasm },
          messageParams,
          options?.salt ? encodeSalt(options?.salt) : '',
        ];

        setIsSubmitting(true);

        let res: ContractInstantiateResult;
        try {
          res = await chainApi.api.call.contractsApi.instantiate(...params);
          setIsSubmitting(false);
        } catch (e: unknown) {
          setError(e?.toString());
          setIsSubmitting(false);
          return;
        }

        setWillBeSuccessful(res.result.isOk);

        if (res.result.isOk) {
          setContractAddress(res.result.asOk.accountId.toString());
        } else {
          setError(
            decodeError(res.result.asErr, { contract: { api: chainApi.api } }),
          );
          return;
        }

        setGasConsumed(res.gasConsumed);
        setGasRequired(res.gasRequired);
        setStorageDeposit(res.storageDeposit);

        let tx;
        try {
          const method = code.tx[constructorMessage.method];
          const methodOptions = {
            gasLimit: res.gasRequired,
            storageDepositLimit: res.storageDeposit.asCharge || null,
            ...toDeployOptions(options),
          };
          tx =
            constructorMessage.args.length > 0
              ? method?.(methodOptions, ...messageParams)
              : method?.(methodOptions);
        } catch (e: unknown) {
          setError(e?.toString());
          return;
        }

        if (!tx) {
          cb?.(undefined, chainApi.api, DeployerError.CouldNotCreateTx);
          setError(DeployerError.CouldNotCreateTx);
          return;
        }

        return tx;
      },
    [account, chainApi?.api],
  );

  const signAndSend: DeploySignAndSend<Promise<void>> = useMemo(
    () =>
      async (
        abi,
        constructorName,
        constructorArgs = {},
        options = { value: BN_ZERO },
        cb = NOOP,
      ) => {
        if (!account || !account?.wallet?.extension.signer) {
          setError(DeployerError.WalletNotConnected);
          return;
        }

        if (!chainApi?.api) {
          setError(DeployerError.ApiInstanceNotFound);
          return;
        }

        txEvents.resetState();

        dryRun(abi, constructorName, constructorArgs, options, cb).then(
          (tx) => {
            tx && setStatus('PendingSignature');
            tx?.signAndSend(
              account?.address,
              { signer: account?.wallet?.extension.signer },
              (response: CodeSubmittableResult<'promise'>) => {
                if (response.status.isInBlock) {
                  setContractAddress(response?.contract?.address.toString());
                }

                if (response.isError) {
                  const err = decodeError(response.dispatchError, {
                    contract: { api: chainApi.api },
                  });

                  setError(err);
                }

                setStatus(response.status.type);
                setResult(response);
                cb?.(response, chainApi.api);
              },
            )
              .catch((e: unknown) => {
                cb?.(undefined, chainApi.api, e);
                setStatus('None');

                if (isTxCancelledError(e)) {
                  setError(DeployerError.TransactionCancelled);
                  return;
                }

                setError(DeployerError.TransactionFailed);
              })
              .finally(() => {
                setIsSubmitting(false);
              });
          },
        );
      },
    [account, account?.wallet?.extension?.signer, chainApi?.api],
  );

  return {
    dryRun,
    signAndSend,
    contractAddress,
    status,
    result,
    isSubmitting,
    error,
    resetState,
    willBeSuccessful,
    wasDeployed,
    storageDeposit,
    gasConsumed,
    gasRequired,
    events: txEvents.events,
  };
}
