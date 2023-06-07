import { ChainId } from '../chains/types.ts';
import {
  Codec,
  ISubmittableResult,
  TransactionStatus,
} from '../core/types/index';

export type NotificationType =
  | 'WalletConnected'
  | 'WalletDisconnected'
  | TransactionStatus;

export type NotificationPayload = {
  createdAt: number;
  type: NotificationType;
  result?: Codec | ISubmittableResult;
  message: string;
  chain?: ChainId;
};

export type AddNotificationPayload = Omit<NotificationPayload, 'createdAt'>;

export type Notification = { id: string } & NotificationPayload;

export type Notifications = Notification[];

export interface Config {
  expiration?: number;
  checkInterval?: number;
}

export const DEFAULT_NOTIFICATIONS: Notifications = [];

export interface AddNotification {
  type: 'ADD_NOTIFICATION';
  notification: Notification;
}

export interface RemoveNotification {
  type: 'REMOVE_NOTIFICATION';
  notificationId: string;
}

export type Action = AddNotification | RemoveNotification;
