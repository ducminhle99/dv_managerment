import clsx from 'clsx';
import { Button } from 'antd';
import Router from 'next/router';

type DataType = {
  action?: () => void | string;
  title?: string;
  className?: string;
  disabled?: boolean;
};

export const ButtonCreate = ({ action, title, className, disabled = false }: DataType) => {
  const handlePage = () => {
    if (typeof action === 'string') {
      Router.push(action);
    }
    if (typeof action === 'function') {
      action();
    }
  };

  return (
    <Button
      disabled={disabled}
      onClick={handlePage}
      className={clsx('hover:bg-primary items-center bg-orange h-10 min-w-[100px] rounded-md flex justify-center ', className)}
    >
      <p className="text-white font-bold">{title}</p>
    </Button>
  );
};
