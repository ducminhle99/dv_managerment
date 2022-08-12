import { Image, Tag } from 'antd';
import { TableListData } from 'common/components/tableData';
import { ReportStatus } from 'common/types/report';
import React from 'react';
interface Props {
  data: object[];
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  messageError?: string;
  className?: string;
}
const ReportList = ({ data, handleChangePage, limit, page, total, loading, className }: Props) => {
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
      dataIndex: 'reportDate',
      title: 'Report Date',
    },
    {
      dataIndex: 'serial',
      title: 'Serial',
    },
    {
      dataIndex: 'status',
      title: 'Status',
      key: 'status',
      render: (record: string) => {
        return (
          <div className="flex justify-center">
            <Tag
              className="rounded-md text-[#000000]"
              color={record === ReportStatus.ACCEPTED ? 'rgba(0, 175, 39, 0.31)' : 'rgba(255, 170, 5, 0.31)'}
            >
              {record}
            </Tag>
          </div>
        );
      },
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
      className={className}
      rowKey="id"
    />
  );
};

export default ReportList;
