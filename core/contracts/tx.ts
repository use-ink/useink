import {
  ApiBase,
  ContractOptions,
  ContractPromise,
  ContractSubmittableResult,
} from '../types/mod.ts';
import { call } from './call.ts';

export type ContractSubmittableResultCallback = (
  result: ContractSubmittableResult,
  api?: ApiBase<'promise'>,
) => void;

export type SignAndSend = (
  args?: unknown[],
  o?: ContractOptions,
  cb?: ContractSubmittableResultCallback,
) => void;

export function tx<T>(
  contract: ContractPromise | undefined,
  message: string,
  extension: Extension | undefined,
): SignAndSend {
  //   const dryRun = useDryRun(contract, message);
  return (): SignAndSend => (params, options, cb) => {
    if (!contract || !extension) return;

    call(contract, message).send(params, options).then((response) => {
      if (!response || !response.ok) return;
      setStatus('PendingSignature');

      const { gasRequired } = response.value.raw;
      const tx = contract.tx[message];

      if (!tx) {
        console.error(`'${message}' not found on contract instance`);
        return;
      }

      tx(
        { gasLimit: gasRequired, ...(options || {}) },
        ...(params || []),
      )
        .signAndSend(
          account.address,
          { signer: extension?.signer },
          (response: ContractSubmittableResult) => {
            // setResult(response);
            // setStatus(response.status.type);
            cb && cb(response, contract.api);
          },
        )
        .catch((e: unknown) => {
          console.error(e);
          //   setStatus('None');
        });
    })
      .catch((e: unknown) => {
        console.error(e);
        // setStatus('None');
      });
  };
}
