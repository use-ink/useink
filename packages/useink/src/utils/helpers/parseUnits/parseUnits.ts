import { BN } from '../..';
import { IRegistryInfo, chainTokenSymbol } from '../../../core';

// convert string with commas to a BN e.g. 1,000,000  to new BN('1_000_000')
export const stringNumberToBN = (valWithCommas: string): BN => {
  const v = valWithCommas.split(',').join('');
  return new BN(v);
};

// convert decimal to planck unit e.g. 1.0000  to 1000000000000
export const planckToDecimal = (
  amount: undefined | string | number | number[] | BN | Uint8Array | Buffer,
  api: IRegistryInfo | undefined,
): number | undefined => {
  const decimals = api?.registry.chainDecimals[0];
  if (!decimals || !amount) return;
  if (decimals === undefined || amount === undefined) return;

  const base = new BN(10).pow(new BN(decimals));
  const { div, mod } = new BN(amount).divmod(base);

  return parseFloat(
    `${div.toString()}.${mod.toString().padStart(decimals, '0')}`,
  );
};

interface PlanckToDecimalOptions {
  decimals: number;
}

// convert planck unit to decimal with token name (ROC,DOT,KSM)  e.g. 100000000000 to 1.0000 ROC
export const planckToDecimalFormatted = (
  amount: undefined | string | number | number[] | BN | Uint8Array | Buffer,
  api: IRegistryInfo | undefined,
  options?: PlanckToDecimalOptions,
): string | undefined => {
  const decimalAmount = planckToDecimal(amount, api);
  if (decimalAmount === undefined || !api) return;

  const formattedVal =
    options?.decimals === undefined
      ? decimalAmount.toString()
      : decimalAmount.toFixed(options?.decimals).toString();

  return `${formattedVal} ${chainTokenSymbol(api)}`;
};

// convert decimal to planck unit e.g. 1.0000  to 1000000000000
export const decimalToPlanck = (
  amount: number,
  api: IRegistryInfo | undefined,
): BigInt | undefined => {
  const decimals = api?.registry.chainDecimals[0];
  if (!decimals) return;

  const convertedValue = BigInt(amount * 10 ** decimals);

  return convertedValue;
};
