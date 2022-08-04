import { Button } from 'antd';
import clsx from 'clsx';

export const ButtonRemove = ({
  titleClassName,
  title,
  handleDelete,
  className,
  isDisabled,
}: {
  titleClassName?: string;
  title: string;
  handleDelete: () => void;
  className?: string;
  isDisabled: boolean;
}) => {
  return (
    <Button
      htmlType="submit"
      className={clsx('h-[40px] rounded py-2 px-3 flex mx-0 items-center group', className)}
      onClick={handleDelete}
      disabled={isDisabled}
    >
      <p className={clsx('text-sm font-bold ml-7 pr-12 text-center ', titleClassName)}>{title}</p>
    </Button>
  );
};
