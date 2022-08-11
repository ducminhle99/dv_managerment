import { Button } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  path: string;
  title: string;
  className?: string;
};

export const ButtonDetail = ({ path, title, className }: Props) => {
  return (
    <Button className={clsx('bg-primary flex items-center justify-center hover:bg-blue-500 border-0 rounded-md min-w-[80px]', className)}>
      <Link href={path}>
        <a className="text-white">{title}</a>
      </Link>
    </Button>
  );
};
