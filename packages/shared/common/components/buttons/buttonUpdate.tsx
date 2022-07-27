import { Button } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import clsx from 'clsx';
import { PenIcon } from 'common/components/icons';

type TypeBtnUpdateList = {
  title?: string;
  path: string;
  className?: string;
};

export const ButtonUpdate = ({ route, className }: { route: string; className?: string }) => {
  return (
    <Button
      htmlType="submit"
      className={clsx('h-[2.188rem] btn-secondary rounded py-2 px-3 flex items-center group', className)}
      icon={<PenIcon />}
      onClick={() => Router.push(route)}
    >
      <p className="text-sm font-bold ml-7 pr-12 text-center group-hover:text-[#FC7679]">編集する</p>
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
