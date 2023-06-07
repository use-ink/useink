const FIVE_SECONDS = 5_000;

export type CreatedItem = { createdAt: number };

export function getExpiredItem<T>(
  items: CreatedItem[],
  expirationPeriod?: number,
): T[] {
  if (expirationPeriod === 0) return [];

  const timeFromCreation = (creationTime: number) => Date.now() - creationTime;

  return items.filter(
    (item) =>
      timeFromCreation(item.createdAt) >= (expirationPeriod || FIVE_SECONDS),
  ) as T[];
}
