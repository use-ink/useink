import React from 'react'
import { NotificationsContext } from './context.ts'
import {
  AddNotificationPayload,
  DEFAULT_NOTIFICATIONS,
  RemoveNotificationPayload,
} from './model.ts'
import { useIsMounted } from '../../hooks/useIsMounted.ts'
import { notificationReducer } from './reducer.ts'
import { useWallet } from '../../hooks/mod.ts'
import { pseudoRandomId } from '../../utils/mod.ts'

// @internal
export const NotificationsProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const [notifications, dispatch] = React.useReducer(
    notificationReducer,
    DEFAULT_NOTIFICATIONS,
  )
  const isMounted = useIsMounted()
  const { account } = useWallet()

  const addNotification = React.useCallback(
    ({ notification }: AddNotificationPayload) => {
      if (isMounted()) {
        dispatch({
          type: 'ADD_NOTIFICATION',
          notification: {
            ...notification,
            id: pseudoRandomId(),
            createdAt: Date.now(),
          },
        })
      }
    },
    [dispatch],
  )

  React.useEffect(() => {
    if (account) {
      addNotification({
        notification: {
          message: `${account.meta.name || account.address} Connected`,
          type: 'WalletConnected',
        },
      })
    }
  }, [account?.address])

  const removeNotification = React.useCallback(
    ({ notificationId }: RemoveNotificationPayload) => {
      if (isMounted()) {
        dispatch({
          type: 'REMOVE_NOTIFICATION',
          notificationId,
        })
      }
    },
    [dispatch],
  )

  return (
    <NotificationsContext.Provider
      value={{ addNotification, notifications, removeNotification }}
      children={children}
    />
  )
}
