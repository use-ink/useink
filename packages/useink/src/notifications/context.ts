import { createContext } from 'react';
import {
  AddNotificationPayload,
  Config,
  DEFAULT_NOTIFICATIONS,
  Notifications,
} from './model.ts';

export const NotificationsContext = createContext<{
  config?: Config;
  notifications: Notifications;
  addNotification: (payload: AddNotificationPayload) => void;
  removeNotification: (notificationId: string) => void;
}>({
  notifications: DEFAULT_NOTIFICATIONS,
  config: undefined,
  addNotification: () => null,
  removeNotification: () => null,
});
