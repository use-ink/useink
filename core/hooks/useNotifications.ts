import { useContext, useMemo } from 'react';
import { HALF_A_SECOND } from '../constants.ts';
import {
  Notification,
  NotificationsContext,
} from '../providers/notifications/mod.ts';
import { getExpiredItem } from '../utils/mod.ts';
import { useConfig } from './config/useConfig.ts';
import { useWallet } from './useWallet.ts';
import { useInterval } from './useInterval.ts';

export function useNotifications() {
  const { account } = useWallet();
  const { addNotification, notifications, removeNotification } = useContext(
    NotificationsContext,
  );
  const config = useConfig();

  const parachainNotifications = useMemo(() => {
    if (!account) return [];
    return notifications ?? [];
  }, [notifications, account]);

  useInterval(() => {
    const expiredNotifications = getExpiredItem<Notification>(
      parachainNotifications,
      config.notifications?.expiration,
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
