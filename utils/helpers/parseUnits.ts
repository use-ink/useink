import BN from 'bn.js';

export const stringNumberToBN = (valWithCommas: string): typeof BN =>
  new BN(valWithCommas.split(',').join(''));
