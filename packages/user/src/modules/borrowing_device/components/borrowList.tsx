import { Image } from 'antd';
import { TableListData } from 'common/components/tableData';
import { Key } from 'react';

interface Props {
  data: object[];
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  handleSelect: (listId: Key[]) => void;
  messageError?: string;
  className?: string;
}
const BorrowList = ({ data, handleChangePage, limit, page, total, loading, className, handleSelect }: Props) => {
  const header = [
    {
      dataIndex: 'name',
      title: 'Name',
    },
    {
      dataIndex: 'image',
      title: 'Image',
      render: (record: string) => {
        return <Image className="w-[50px] h-[50px]" src={record} alt="device photo" />;
      },
    },
    {
      dataIndex: 'fromDate',
      title: 'From Date',
    },
    {
      dataIndex: 'brand',
      title: 'Brand',
    },

    {
      dataIndex: 'category',
      title: 'Category',
    },
    {
      dataIndex: 'serial',
      title: 'Serial',
    },
  ];

  return (
    <TableListData
      loading={loading}
      data={data}
      handleChangePage={handleChangePage}
      header={header}
      limit={limit}
      page={page}
      total={total}
      rowSelection={{
        type: 'checkbox',
        onChange: handleSelect,
      }}
      className={className}
      rowKey="id"
    />
  );
};

export default BorrowList;
