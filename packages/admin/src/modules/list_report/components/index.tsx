import { Input, Select, Tag } from 'antd';
import { ButtonAccept, ButtonDetail, ButtonFilter } from 'common/components/buttons';
import Container from 'common/components/container';
import MessageErrors from 'common/components/msgError';
import { TableListData } from 'common/components/tableData';
import { EReportStatus, EReportType, ReportStatus, ReportType } from 'common/types/report';
import { useState } from 'react';
const { Option } = Select;
const { Search } = Input;
interface Props {
  data: object[];
  header?: any;
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  handleAccept: (id: number) => void;
  handleFilter: (status?: EReportStatus, type?: EReportType) => void;
  handleSearch: (keyWord: string) => void;
  messageError?: string;
}
type ReportItem = {
  id: number;
  status: ReportStatus;
  deviceId: number;
  deviceName: string;
  dayReport: string;
  type: ReportType;
  userName: string;
};

const ListReport = ({ messageError, data, limit, page, total, loading, handleChangePage, handleAccept, handleFilter, handleSearch }: Props) => {
  const [status, setStatus] = useState<EReportStatus>(EReportStatus.NONE);
  const [type, setType] = useState<EReportType>(EReportType.NONE);
  const header = [
    {
      dataIndex: 'id',
      title: 'ID',
      key: 'id',
    },
    {
      dataIndex: 'status',
      title: 'Status',
      key: 'status',
      render: (record: string) => {
        return (
          <Tag className="rounded-md text-[#000000]" color={record === ReportStatus.ACCEPTED ? 'rgba(0, 175, 39, 0.31)' : 'rgba(255, 170, 5, 0.31)'}>
            {record}
          </Tag>
        );
      },
    },
    {
      dataIndex: 'deviceId',
      title: 'Device ID',
      key: 'deviceId',
    },
    {
      dataIndex: 'deviceName',
      title: 'Name',
      key: 'deviceName',
    },
    {
      dataIndex: 'dayReport',
      title: 'Day Report',
      key: 'dayReport',
    },
    {
      dataIndex: 'type',
      title: 'Type',
      key: 'type',
    },
    {
      dataIndex: 'userName',
      title: 'User',
      key: 'userName',
    },
    {
      title: 'Action',
      key: 'actions',
      render: (record: ReportItem) => {
        return (
          <div className="flex flex-row-reverse">
            <ButtonDetail title="detail" path={`?id=${record.id}`} />
            {record.status === ReportStatus.WAITING && (
              <ButtonAccept className="mr-5" loading={false} title="accept" action={() => handleAccept(record.id)} />
            )}
          </div>
        );
      },
    },
  ];
  const handleChangeStatus = (value: EReportStatus) => {
    setStatus(value);
  };
  const handleChangeType = (value: EReportType) => {
    setType(value);
  };

  return (
    <Container title="REPORT LIST" rootClassName="flex justify-center" className="w-[1260px] mt-[50px]">
      <div className="flex justify-between mb-6 mt-[45px]">
        <div className="flex justify-between">
          <Select placeholder="STATUS" className="w-[200px] mr-7 text-center" onChange={handleChangeStatus}>
            <Option value={EReportStatus.NONE}>ALL</Option>
            <Option value={EReportStatus.ACCEPTED}>ACCEPTED</Option>
            <Option value={EReportStatus.WAITING}>WAITING</Option>
          </Select>
          <Select placeholder="TYPE" className="w-[200px] mr-7 text-center" onChange={handleChangeType}>
            <Option value={EReportType.NONE}>ALL</Option>
            <Option value={EReportType.BROKEN}>BROKEN</Option>
            <Option value={EReportType.MISSING}>MISSING</Option>
          </Select>
          <ButtonFilter action={() => handleFilter(status, type)} loading={false} title="Filter" className="h-full" />
        </div>
        <Search placeholder="input user name" onSearch={(text) => handleSearch(text)} style={{ width: 340 }} />
      </div>

      <TableListData
        data={data}
        header={header}
        limit={limit}
        page={page}
        total={total}
        loading={loading}
        handleChangePage={handleChangePage}
        className="w-full"
      />
      <MessageErrors message={messageError} />
    </Container>
  );
};

export default ListReport;
