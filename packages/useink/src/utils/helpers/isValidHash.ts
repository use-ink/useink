export const isValidHash = (
  value: string | undefined,
  length = 64,
): boolean => {
  if (!value) return false;

  return new RegExp(`^0x[0-9a-f]{${length}}$`).test(value);
};
