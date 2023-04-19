import { Notification, Notifications } from './model.ts';

interface AddNotification {
  type: 'ADD_NOTIFICATION';
  notification: Notification;
}

interface RemoveNotification {
  type: 'REMOVE_NOTIFICATION';
  notificationId: string;
}

type Action = AddNotification | RemoveNotification;

export function notificationReducer(
  state: Notifications,
  action: Action,
): Notifications {
  const chainState = state ?? [];

  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, action.notification];
    case 'REMOVE_NOTIFICATION': {
      return chainState.filter((n) => n.id !== action.notificationId);
    }
  }
}
