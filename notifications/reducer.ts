import { Action, Notifications } from './model.ts';

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
