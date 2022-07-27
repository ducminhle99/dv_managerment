import { useMemo } from 'react';
import { Switch } from 'antd';
import clsx from 'clsx';

interface Props {
  labelLeft?: string;
  labelRight?: string;
  className?: string;
  isOn?: boolean;
  onChange?: any;
  isReverse?: boolean;
  disabled?: boolean;
}

export default function SwitchComponent({ labelLeft, labelRight, className, isOn, onChange, isReverse, disabled }: Props) {
  const isOnCustom = useMemo(() => {
    if (isReverse) {
      return !isOn;
    }

    return isOn;
  }, [isOn, isReverse]);

  const handleOnChange = (value: boolean) => {
    if (isReverse) {
      onChange(!value);
      return;
    }

    onChange(value);
  };

  return (
    <div className={clsx('flex items-center ', className)}>
      {labelLeft && (
        <p className={clsx('text-[15px] text-inherit mr-[5px]', { 'text-[#BBBBBB]': isOnCustom, 'text-white': !isOnCustom })}>{labelLeft}</p>
      )}
      <Switch disabled={disabled} checked={isOnCustom} className="bg-transparent border border-solid border-white h-6" onChange={handleOnChange} />
      {labelRight && <p className={clsx('text-[15px]  ml-[5px]', { 'text-[#BBBBBB]': !isOnCustom, 'text-white': isOnCustom })}>{labelRight}</p>}
    </div>
  );
}
