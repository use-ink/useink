import Select from 'react-select';

export interface SelectOption {
  value: string;
  label: string;
}

interface Props {
  className?: string;
  onChange: (value: SelectOption | null) => void;
  options: SelectOption[];
  value: SelectOption | null;
  placeholder?: string;
}

export const SelectList: React.FC<Props> = ({
  className,
  onChange,
  options,
  value,
  placeholder,
}) => {
  return (
    <div className={className}>
      <Select
        isClearable
        value={value}
        onChange={onChange}
        options={options}
        styles={{ control: (s) => ({ ...s, color: 'white' }) }}
        placeholder={placeholder}
        classNames={{
          option: (s) =>
            `${
              s.isSelected
                ? '!bg-brand-300 hover:!bg-brand-300'
                : '!bg-white/10'
            } hover:!bg-white/20`,
          control: (s) =>
            `${
              s.isFocused
                ? '!border-brand-300 !ring-brand-300 !ring-1'
                : '!border-white/20'
            } !bg-white/5 !border`,
          input: () => 'bg-none',
          valueContainer: () => 'bg-none text-white/90',
          menu: () => '!bg-white/5 backdrop-blur-sm !text-white',
          singleValue: () => '!text-white/90',
          menuList: () => '!bg-none text-white/90',
          menuPortal: () => '',
          clearIndicator: () => 'hover:!text-white/90 !text-white/70',
          dropdownIndicator: () => 'hover:!text-white/90 !text-white/70',
        }}
      />
    </div>
  );
};
