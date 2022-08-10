import { Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface Props {
  data: object[];
  header: ColumnsType<object>;
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
}

export function TableListData({ data, header, limit, total, page, loading, handleChangePage }: Props) {
  return (
    <div className="flex flex-col items-center">
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
