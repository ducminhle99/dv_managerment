import { Button } from 'antd';
import clsx from 'clsx';

export interface Props {
  className?: string;
  loading?: boolean;
  handleDelete: any;
}

export const ButtonDelete = ({ className, loading, handleDelete }: Props) => {
  return (
    <Button
      size="middle"
      danger
      className={clsx('h-9 py-0 px-9 hover:bg-[#FC7679] hover:text-white', className)}
      loading={loading}
      onClick={handleDelete}
    >
      <span className="text-sm">アカウント削除</span>
    </Button>
          
  );
}