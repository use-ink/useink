import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

interface Props {
  enabled: boolean;
  onChange: () => void;
}

const ToggleSwitch: React.FC<Props> = ({ enabled, onChange }) => (
  <div>
    <Switch
      checked={enabled}
      onChange={onChange}
      className={classNames(
        'relative inline-flex items-center flex-shrink-0 h-[18px] w-[32px]',
        'border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
        enabled ? 'bg-brand-200' : 'bg-brand-200',
      )}
    >
      <span
        aria-hidden='true'
        className={classNames(
          'pointer-events-none inline-block h-[16px] w-[18px] rounded-full',
          'shadow-lg transform ring-0 transition ease-in-out duration-200',
          enabled
            ? 'translate-x-[13px] bg-brand-500'
            : 'translate-x-[1px] bg-brand-500',
        )}
      />
    </Switch>
  </div>
);

export default ToggleSwitch;
