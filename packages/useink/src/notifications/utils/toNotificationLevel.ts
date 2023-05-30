import { NotificationType } from '../model.ts';
import { NotificationLevel } from '../types.ts';

export const toNotificationLevel = (
  type: NotificationType,
): NotificationLevel => {
  switch (type) {
    case 'None':
      return 'info';
    case 'DryRun':
      return 'info';
    case 'PendingSignature':
      return 'info';
    case 'Future':
      return 'info';
    case 'Ready':
      return 'info';
    case 'Broadcast':
      return 'info';
    case 'InBlock':
      return 'success';
    case 'Retracted':
      return 'warning';
    case 'FinalityTimeout':
      return 'error';
    case 'Finalized':
      return 'success';
    case 'Usurped':
      return 'error';
    case 'Dropped':
      return 'error';
    case 'Invalid':
      return 'warning';
    case 'Errored':
      return 'error';
    case 'WalletConnected':
      return 'info';
    case 'WalletDisconnected':
      return 'info';
    default:
      return 'info';
  }
};
