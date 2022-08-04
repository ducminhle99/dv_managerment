import { Button } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';

type TypeBtnUpdateList = {
  title?: string;
  path: string;
  className?: string;
};

export const ButtonUpdate = ({
  titleClassName,
  title,
  handleUpdate,
  handleChangeUpload,
  className,
  isDisabled,
}: {
  titleClassName?: string;
  title: string;
  handleUpdate?: () => void;
  handleChangeUpload?: () => void;
  className?: string;
  isDisabled: boolean;
}) => {
  return (
    <Button
      onClick={handleUpdate}
      onChange={handleChangeUpload}
      htmlType="submit"
      className={clsx('h-[40px] rounded py-2 px-3 flex mx-0 items-center group', className)}
      disabled={isDisabled}
    >
      <p className={clsx('text-sm font-bold text-center ', titleClassName)}>{title}</p>
    </Button>
  );
};

export const ButtonUpdateInList = ({ title = '編集', path, className }: TypeBtnUpdateList) => {
  return (
    <Link href={path}>
      <a
        className={clsx(
          'h-11 w-[5.313rem] rounded flex items-center justify-center bg-primary-strong-100 border-0 hover:bg-primary text-white font-bold',
          className
        )}
      >
        {title}
      </a>
    </Link>
  );
};
