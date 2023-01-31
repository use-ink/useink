import { createContext } from 'react';
import {
  AddNotificationPayload,
  DEFAULT_NOTIFICATIONS,
  Notifications,
  RemoveNotificationPayload,
} from './model.ts';

export const NotificationsContext = createContext<{
  notifications: Notifications;
  addNotification: (payload: AddNotificationPayload) => void;
  removeNotification: (payload: RemoveNotificationPayload) => void;
}>({
  notifications: DEFAULT_NOTIFICATIONS,
  addNotification: () => null,
  removeNotification: () => null,
});
