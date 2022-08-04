import { Button } from 'antd';
import clsx from 'clsx';
import Router from 'next/router';

export const ButtonBack = ({ className, title = 'BACK' }: { className?: string; title?: string }) => {
  return (
    <Button
      type="text"
      className={clsx('bg-white px-0 py-0 hover:bg-transparent h-auto min-h-0 rounded-md shadow border border-solid border-[#dddddd]', className)}
      onClick={() => Router.back()}
    >
      <div className="w-full flex item-center justify-center hover:text-primary">
        <p className="ml-2 text-sm font-bold hover:text-primary">{title}</p>
      </div>
    </Button>
  );
};
