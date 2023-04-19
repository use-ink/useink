export const stringNumberToBN = (valWithCommas: string): BigInt => {
  return BigInt(valWithCommas.split(",").join(""));
};
