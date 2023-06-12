import { AddressOrPair, ApiPromise, Hash, SignerOptions } from '../../types';

export const transfer = async (
  api: ApiPromise | undefined,
  to: string | undefined,
  amount: number,
  signer: AddressOrPair,
  options?: SignerOptions,
): Promise<Hash | undefined> => {
  if (!api?.tx?.balances?.transfer || !to) return;
  const transfer = api.tx.balances.transfer(to, amount);

  return await transfer.signAndSend(signer, options);
};
