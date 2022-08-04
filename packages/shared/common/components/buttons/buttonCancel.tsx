import { Button } from 'antd';
import clsx from 'clsx';
export const ButtonCancel = ({
  titleClassName,
  title,
  className,
  handleCancel,
}: {
  titleClassName?: string;
  title: string;
  className?: string;
  handleCancel: () => void;
}) => {
  return (
    <Button htmlType="submit" className={clsx('h-[40px] rounded py-2 px-3 flex mx-0 items-center group', className)} onClick={handleCancel}>
      <p className={clsx('text-sm font-bold ml-7 pr-12 text-center ', titleClassName)}>{title}</p>
    </Button>
  );
};
