import { Image } from 'antd';
import { ButtonCreate } from 'common/components/buttons';
import MessageErrors from 'common/components/msgError';
import { TableListData } from 'common/components/tableData';
import { Key } from 'react';
import { DeviceSelect } from '../useDeviceLogic';
import BorrowPopup from './BorrowPopup';

interface Props {
  data: object[];
  limit: number;
  total: number;
  page: number;
  loading?: boolean;
  handleChangePage: (page: number, limit: number) => void;
  handleAdd: (listId: number[]) => void;
  handleSelect?: (listId: Key[]) => void;
  messageError?: string;
  rowSelected?: number[];
  openModal: boolean;
  showModal: (open: boolean) => void;
  deviceSelected: DeviceSelect[];
  removeDevice: (id: number) => void;
}
const ListDevice = ({
  messageError,
  data,
  page,
  total,
  limit,
  handleChangePage,
  rowSelected,
  deviceSelected,
  handleSelect,
  showModal,
  removeDevice,
  openModal,
}: Props) => {
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
  ];

  return (
    <>
      <BorrowPopup openModal={openModal} showModal={showModal} listDevice={deviceSelected} removeDevice={removeDevice} />
      <TableListData
        data={data}
        header={header}
        limit={limit}
        page={page}
        total={total}
        loading={false}
        handleChangePage={handleChangePage}
        className="w-full"
        rowSelection={{ type: 'checkbox', selectedRowKeys: rowSelected, onChange: handleSelect }}
        rowKey="id"
      />
      <MessageErrors message={messageError} className="mt-[20px]" />
      <div className="flex justify-center mt-5">
        <ButtonCreate title="ADD" action={() => showModal(true)} />
      </div>
    </>
  );
};

export default ListDevice;
