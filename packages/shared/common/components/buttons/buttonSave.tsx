import { Button } from 'antd';
import clsx from 'clsx';

export const ButtonSave = ({
  titleClassName,
  title,
  handleSave,
  className,
  isDisabled,
  loading,
}: {
  titleClassName?: string;
  title: string;
  handleSave?: () => void;
  className?: string;
  isDisabled: boolean;
  loading: boolean;
}) => {
  return (
    <Button
      onClick={handleSave}
      htmlType="submit"
      className={clsx('h-[40px] rounded py-2 px-3 flex mx-0 items-center group', className)}
      disabled={isDisabled}
      loading={loading}
    >
      <p className={clsx('text-sm font-bold ml-7 pr-12 text-center ', titleClassName)}>{title}</p>
    </Button>
  );
};
