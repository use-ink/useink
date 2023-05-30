# Notifications

This module is an opinionated React state system to show notifications for
contract transactions. This is often used in combination with Snacks in the UI.
Notifications will be added to state, then removed after the expiration time.
The default expiration time is 5 seconds, but can be changed in the config.

## Example Setup

```tsx
import { UseInkProvider } from 'useink';
import { NotificationsProvider } from 'useink/notifications';

export const MyApp = () => (
  <UseInkProvider>
    <NotificationsProvider>
      <Routes />
    </NotificationsProvider>
  </UseInkProvider>
);
```
