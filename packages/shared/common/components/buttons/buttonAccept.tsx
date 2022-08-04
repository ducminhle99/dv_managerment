import clsx from 'clsx';
import { Button } from 'antd';
import Router from 'next/router';

type DataType = {
  action: any;
  title?: string;
  className?: string;
  iconBtn?: string;
  disabled?: boolean;
  loading: boolean;
};

export const ButtonAccept = ({ action, title, className, iconBtn, disabled = false, loading = false }: DataType) => {
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
      loading={loading}
      disabled={disabled}
      onClick={handlePage}
      className={clsx('bg-[#38AE60] flex items-center justify-center hover:bg-blue-500 border-0 rounded-md', className)}
      icon={iconBtn}
    >
      <p className={clsx('text-white font-bold', { 'ml-3': !!iconBtn })}>{title}</p>
    </Button>
  );
};
