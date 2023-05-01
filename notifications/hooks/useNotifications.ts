import { useContext, useMemo } from 'react';
import { getExpiredItem, useInterval } from '../../core/mod.ts';
import { NotificationsContext } from '../context.ts';
import { HALF_A_SECOND } from '../../core/constants.ts';
import {
  AddNotificationPayload,
  Notification,
  Notifications,
  RemoveNotificationPayload,
} from '../model.ts';

export interface UseNotifications {
  notifications: Notifications;
  addNotification: (payload: AddNotificationPayload) => void;
  removeNotification: (payload: RemoveNotificationPayload) => void;
}

export const useNotifications = (): UseNotifications => {
  const { addNotification, notifications, removeNotification, config } =
    useContext(
      NotificationsContext,
    );

  const chainNotifications = useMemo(() => {
    return notifications ?? [];
  }, [notifications]);

  useInterval(() => {
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
