import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, DatePicker, Input } from 'antd';
import locale from 'antd/lib/date-picker/locale/ja_JP';
import ReactInputMask from 'react-input-mask';
import { CalendarIcon } from './icons';
import clsx from 'clsx';
import moment, { Moment } from 'moment';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import 'moment/locale/ja';

moment.locale('ja');

type Props = {
  className?: string;
  onChange?: (value?: Date | undefined) => any;
  value?: Date;
  inputClass?: string;
  isEditMode?: boolean;
} & PickerProps<Moment>;

const DatePickerInputMark = ({ className, onChange, value, inputClass, isEditMode, ...rest }: Props) => {
  const [valueStr, setValueStr] = useState('');
  const [open, handleSetOpen] = useState(false);
  const inputRef = useRef<any>(null);

  const setOpen = (isOpen: boolean) => {
    if (rest.disabled) {
      return;
    }
    handleSetOpen(isOpen);
  };

  const handleOnChangeDate = (date: any, dateString: string) => {
    setValueStr(dateString);

    if (onChange) {
      onChange(date.toDate());
    }

    setOpen(false);
  };

  const handleOnBlurInput = () => {
    setOpen(false);
    const valueMomentObj = moment(valueStr, 'YYYY/MM/DD');

    if (!valueMomentObj.isValid()) {
      setValueStr('');
      if (onChange) {
        onChange(undefined);
      }

      return;
    }

    if (rest?.disabledDate && !isEditMode) {
      if (rest?.disabledDate(valueMomentObj)) {
        setValueStr('');
        if (onChange) {
          onChange(undefined);
        }

        return;
      }
    }

    if (onChange) {
      onChange(valueMomentObj.toDate());
    }
  };

  useEffect(() => {
    if (!open || !inputRef?.current) {
      return;
    }

    inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (value && moment(value).isValid()) {
      const valueStr = moment(value).format('YYYY-MM-DD');
      setValueStr(valueStr);
    } else {
      setValueStr('');
    }
  }, [value]);

  const momentValueObj = useMemo(() => {
    return moment(value || null);
  }, [value]);

  return (
    <div className={clsx('relative', className)}>
      <ReactInputMask
        onMouseDown={() => setOpen(true)}
        onBlur={handleOnBlurInput}
        mask="9999/99/99"
        disabled={rest.disabled}
        value={valueStr}
        onChange={(e) => setValueStr(e.target.value)}
      >
        {(inputProps: any) => (
          <Input
            ref={inputRef}
            placeholder="YYYY/MM/DD"
            {...inputProps}
            disabled={rest.disabled}
            className={clsx(inputClass, 'input-datepicker')}
            addonAfter={
              <Button disabled={rest.disabled} type="text" className="p-0 h-auto w-auto border-none" onClick={() => setOpen(!open)}>
                <CalendarIcon />
              </Button>
            }
          />
        )}
      </ReactInputMask>
      <DatePicker
        value={momentValueObj.isValid() ? momentValueObj : undefined}
        onChange={handleOnChangeDate}
        open={open}
        className="invisible w-0 h-0 absolute bottom-0 left-0"
        locale={locale}
        {...rest}
      />
    </div>
  );
};

export default DatePickerInputMark;
