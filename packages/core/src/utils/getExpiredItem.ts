import { FIVE_SECONDS } from "../constants.ts";

export type CreatedItem = { createdAt: number };

const timeFromCreation = (creationTime: CreatedItem["createdAt"]) =>
  Date.now() - creationTime;

export function getExpiredItem<T extends CreatedItem>(
  items: T[],
  expirationPeriod = FIVE_SECONDS
): T[] {
  if (expirationPeriod === 0) return [];

  return items.filter(
    (item) => timeFromCreation(item.createdAt) >= expirationPeriod
  ) as T[];
}
