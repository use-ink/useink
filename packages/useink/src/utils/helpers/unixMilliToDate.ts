export const unixMilliToDate = (
  unixInMilliSeconds: number | undefined,
): Date | undefined =>
  unixInMilliSeconds ? new Date(unixInMilliSeconds) : undefined;
