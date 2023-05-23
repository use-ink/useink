import { BN } from '../mod.ts';

export const stringNumberToBN = (valWithCommas: string): BN => {
  const v = valWithCommas.split(',').join('');
  return new BN(v);
};
