import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Router from 'next/router';
import clsx from 'clsx';

export const ButtonBack = ({ className, title = '戻る' }: { className?: string; title?: string }) => {
  return (
    <Button type="text" className={clsx('px-0 py-0 hover:bg-transparent h-auto min-h-0', className)} onClick={() => Router.back()}>
      <div className="flex item-center justify-center hover:text-primary">
        <LeftOutlined className="text-sm" /> <p className="ml-2 text-sm font-bold hover:text-primary">{title}</p>
      </div>
    </Button>
  );
};
