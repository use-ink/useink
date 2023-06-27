export const pseudoRandomHex = (size = 64): string =>
  `0x${[...Array<string>(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('')}`;
