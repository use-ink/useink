import {
  AddNotificationPayload,
  Config,
  DEFAULT_NOTIFICATIONS,
  Notifications,
} from './model.ts';
import { createContext } from 'react';

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
