export const pseudoRandomU8a = (t = 21) =>
  crypto.getRandomValues(new Uint8Array(t));
