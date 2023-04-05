import type {
  ExtrinsicStatus,
  SubmittableResult,
} from "@polkadot/types/interfaces";

type I18n = { [key: string]: string };

const defaultI18n: I18n = {
  None: "None",
  DryRun: "Dry Run",
  PendingSignature: "Pending signature",
  Future: "Future",
  Ready: "Ready",
  Broadcast: "Broadcast",
  InBlock: "In block",
  Retracted: "Retracted",
  FinalityTimeout: "Finality timeout",
  Finalized: "Finalized",
  Usurped: "Usurped",
  Dropped: "Dropped",
  Invalid: "Invalid",
  Valid: "Valid",
  Dispatched: "Dispatched",
  DispatchedByBlock: "Dispatched by block",
  Archived: "Archived",
  Failed: "Failed",
  Aborted: "Aborted",
  TransactionPayment: "Transaction payment",
  FuturePayment: "Future payment",
  FinalizedPayment: "Finalized payment",
};

export const toStatusName = (
  status: ExtrinsicStatus | SubmittableResult | undefined,
  i18n: I18n = defaultI18n
): string => {
  const statusType =
    status?.status?.type ?? (status as ExtrinsicStatus)?.type ?? "None";

  if (statusType === "None" || statusType === "DryRun") {
    return i18n?.[statusType] ?? defaultI18n[statusType];
  }

  if (statusType === "Finalized" || statusType === "Errored") {
    return i18n?.[statusType] ?? defaultI18n[statusType];
  }

  return i18n?.[statusType] ?? statusType;
};
