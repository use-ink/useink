import {
  AccountId,
  ContractOptions,
  ContractPromise,
  RuntimeDispatchInfo,
  SignerOptions,
} from '..';

export async function txPaymentInfo(
  contract: ContractPromise | undefined,
  message: string,
  caller: AccountId | string,
  params?: unknown[],
  options?: ContractOptions,
  signerOptions?: Partial<SignerOptions>,
): Promise<RuntimeDispatchInfo | undefined> {
  const tx = contract?.tx?.[message];
  if (!tx || !caller) return;

  try {
    const requiresNoArguments = tx.meta.args.length === 0;
    return await (requiresNoArguments
      ? tx(options || {})
      : tx(options || {}, params)
    ).paymentInfo(caller, signerOptions);
  } catch (e: unknown) {
    console.error(e);
    return;
  }
}
