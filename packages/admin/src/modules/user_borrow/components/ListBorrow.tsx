import { Image } from 'antd';
import { ButtonDelete } from 'common/components/buttons';
import MessageErrors from 'common/components/msgError';
import { TableListData } from 'common/components/tableData';

interface Props {
  data: object[];
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  handleRemove: (id: number) => void;
  messageError?: string;
}
const ListBorrow = ({ messageError, data, page, total, limit, handleChangePage, handleRemove }: Props) => {
  const header = [
    {
      dataIndex: 'deviceName',
      title: 'Deice Name',
    },
    {
      dataIndex: 'image',
      title: 'Image',
      render: (record: string) => {
        return <Image className="w-[80px] h-auto" src={record} alt="device photo" />;
      },
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
    {
      title: 'Action',
      dataIndex: 'id',
      render: (record: number) => {
        return (
          <div className="flex justify-center">
            <ButtonDelete handleDelete={() => handleRemove(record)} />
          </div>
        );
      },
    },
  ];
  return (
    <>
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
      <MessageErrors message={messageError} className="mt-[20px]" />
    </>
  );
};

export default ListBorrow;
