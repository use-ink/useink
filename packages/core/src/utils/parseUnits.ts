export const stringNumberToBN = (valWithCommas: string): BigInt =>
  BigInt(valWithCommas.split(',').join(''));
