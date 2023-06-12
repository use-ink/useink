import { HALF_A_SECOND } from '../../react/constants.ts';
import { useInterval } from '../../react/hooks/internal/useInterval.ts';
import { getExpiredItem } from '../../utils/index';
import { NotificationsContext } from '../context.ts';
import {
  AddNotificationPayload,
  Notification,
  Notifications,
} from '../model.ts';
import { useContext, useMemo } from 'react';

export interface UseNotifications {
  notifications: Notifications;
  addNotification: (payload: AddNotificationPayload) => void;
  removeNotification: (notificationId: string) => void;
}

export const useNotifications = (): UseNotifications => {
  const { addNotification, notifications, removeNotification, config } =
    useContext(NotificationsContext);

  const chainNotifications = useMemo(() => {
    return notifications ?? [];
  }, [notifications]);

  useInterval(() => {
    if (config?.expiration === 0) return;

    const expiredNotifications = getExpiredItem<Notification>(
      chainNotifications,
      config?.expiration,
    );
    for (const notification of expiredNotifications) {
      removeNotification(notification.id);
    }
  }, config?.checkInterval || HALF_A_SECOND);

  return {
    notifications: chainNotifications,
    addNotification,
    removeNotification,
  };
};
