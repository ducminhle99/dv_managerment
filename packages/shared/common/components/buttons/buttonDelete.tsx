import { Button } from 'antd';
import clsx from 'clsx';

export interface Props {
  className?: string;
  loading?: boolean;
  handleDelete: any;
}

export const ButtonDelete = ({ className, loading, handleDelete }: Props) => {
  return (
    <Button danger className={clsx('h-10 min-w-[100px] bg-danger rounded-md hover:opacity-70', className)} loading={loading} onClick={handleDelete}>
      <span className="text-sm text-white">Delete</span>
    </Button>
  );
};
