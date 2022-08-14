import { DatePicker } from 'antd';
import Search from 'antd/lib/input/Search';
import { ButtonDelete } from 'common/components/buttons';
import Container from 'common/components/container';
import { TableListData } from 'common/components/tableData';
const { RangePicker } = DatePicker;

interface Props {
  data: object[];
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  messageError?: string;
  handleSearch: (keyWord: string) => void;
}
const ListBorrow = ({ data, limit, total, page, handleChangePage, handleSearch }: Props) => {
  const header = [
    {
      dataIndex: 'deviceName',
      title: 'Deice Name',
    },
    {
      dataIndex: 'createBy',
      title: 'Create By',
    },
    {
      dataIndex: 'borrowDay',
      title: 'Borrow Day',
    },
    {
      dataIndex: 'userName',
      title: 'UserName',
    },
    {
      dataIndex: 'serial',
      title: 'Serial',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (record: number) => {
        return (
          <div className="flex justify-center">
            <ButtonDelete handleDelete={() => alert(`delete item id:${record}`)} />
          </div>
        );
      },
    },
  ];
  return (
    <Container title="REPORT LIST" rootClassName="flex justify-center" className="w-[1260px] mt-[100px]">
      <div className="flex justify-end mb-6 mt-[45px]">
        <RangePicker className="mr-10" onChange={(data) => alert(data)} />
        <Search placeholder="input user name" onSearch={(text) => handleSearch(text)} style={{ width: 340 }} />
      </div>

      <TableListData
        data={data}
        header={header}
        limit={limit}
        page={page}
        total={total}
        loading={false}
        handleChangePage={handleChangePage}
        className="w-full"
        rowKey="id"
      />
    </Container>
  );
};

export default ListBorrow;
