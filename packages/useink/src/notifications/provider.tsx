import { useIsMounted } from '../react/hooks/internal/useIsMounted.ts';
import { pseudoRandomId } from '../utils/index';
import { NotificationsContext } from './context.ts';
import {
  AddNotificationPayload,
  Config,
  DEFAULT_NOTIFICATIONS,
} from './model.ts';
import { notificationReducer } from './reducer.ts';
import React, { useCallback, useReducer } from 'react';

export const NotificationsProvider: React.FC<
  React.PropsWithChildren<{
    config?: Config;
  }>
> = ({ children, config }) => {
  const [notifications, dispatch] = useReducer(
    notificationReducer,
    DEFAULT_NOTIFICATIONS,
  );
  const isMounted = useIsMounted();

  const addNotification = useCallback(
    (notification: AddNotificationPayload) => {
      if (isMounted()) {
        dispatch({
          type: 'ADD_NOTIFICATION',
          notification: {
            ...notification,
            id: pseudoRandomId(),
            createdAt: Date.now(),
          },
        });
      }
    },
    [dispatch],
  );

  const removeNotification = useCallback(
    (notificationId: string) => {
      if (isMounted()) {
        dispatch({
          type: 'REMOVE_NOTIFICATION',
          notificationId,
        });
      }
    },
    [dispatch],
  );

  return (
    <NotificationsContext.Provider
      value={{ addNotification, notifications, removeNotification, config }}
      children={children}
    />
  );
};
