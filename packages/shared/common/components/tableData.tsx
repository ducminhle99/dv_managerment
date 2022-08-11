import { Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';

interface Props {
  data: object[];
  header: ColumnsType<object>;
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  className?: string;
}

export function TableListData({ data, header, limit, total, page, loading, handleChangePage, className }: Props) {
  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <Table className="" pagination={false} dataSource={data} columns={header} loading={loading} />
      <Pagination
        className="mt-[20px]"
        current={page || 1}
        total={total}
        onChange={handleChangePage}
        pageSize={limit}
        pageSizeOptions={[20, 50, 100]}
        defaultPageSize={20}
        defaultCurrent={1}
      />
    </div>
  );
}
