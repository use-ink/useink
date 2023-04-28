import { Codec } from '@polkadot/types-codec/types';
import type { ISubmittableResult } from '@polkadot/types/types';
import { NotificationType } from '../../types';

export type NotificationPayload = {
  createdAt: number;
  type: NotificationType;
  result?: Codec | ISubmittableResult;
  message: string;
};

export type AddNotificationPayload = {
  notification: Omit<NotificationPayload, 'createdAt'>;
};

export type RemoveNotificationPayload = {
  notificationId: string;
};

export type Notification = { id: string } & NotificationPayload;

export type Notifications = Notification[];

export const DEFAULT_NOTIFICATIONS: Notifications = [];
