import { pseudoRandomU8a } from './pseudoRandomU8a';

export const encodeSalt = (
  salt: Uint8Array | string = pseudoRandomU8a(32),
): Uint8Array => {
  const encoder = new TextEncoder();

  return typeof salt === 'string' ? encoder.encode(salt) : salt;
};
