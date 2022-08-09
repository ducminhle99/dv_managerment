import clsx from 'clsx';
import { Button } from 'antd';
import Router from 'next/router';

type DataType = {
  action?: () => void | string;
  title?: string;
  className?: string;
  iconBtn?: string;
  disabled?: boolean;
};

export const ButtonCreate = ({ action, title, className, iconBtn, disabled = false }: DataType) => {
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
      className={clsx('bg-primary flex items-center hover:bg-orange border-0', className)}
      icon={iconBtn}
    >
      <p className={clsx('text-white font-bold', { 'ml-3': !!iconBtn })}>{title}</p>
    </Button>
  );
};
