import { useContext, useMemo } from "react";
import { HALF_A_SECOND } from "../constants.ts";
import { Notification, NotificationsContext } from "../providers/notifications";
import { getExpiredItem } from "../utils";
import { useConfig } from "./useConfig.ts";
import { useExtension } from "./useExtension.ts";
import { useInterval } from "./useInterval.ts";

export function useNotifications() {
  const { account } = useExtension();
  const { addNotification, notifications, removeNotification } =
    useContext(NotificationsContext);
  const config = useConfig();

  const parachainNotifications = useMemo(() => {
    if (!account) return [];
    return notifications ?? [];
  }, [notifications, account]);

  useInterval(() => {
    const expiredNotifications = getExpiredItem<Notification>(
      parachainNotifications,
      config.notifications?.expiration
    );
    for (const notification of expiredNotifications) {
      removeNotification({ notificationId: notification.id });
    }
  }, config.notifications?.checkInterval || HALF_A_SECOND);

  return {
    notifications: parachainNotifications,
    addNotification,
    removeNotification,
  };
}
