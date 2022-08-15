import { Key, useEffect, useState } from 'react';
import { UserBorrowResDto } from 'common/dto/response';

const listBorrow: UserBorrowResDto[] = [
  {
    id: 1,
    deviceName: 'laptop abc1',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 2,
    deviceName: 'laptop abc2',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 3,
    deviceName: 'laptop abc3',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 4,
    deviceName: 'laptop abc4',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 5,
    deviceName: 'laptop abc5',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
];
export type DeviceSelect = {
  id: number;
  name: string;
};
export default function useDeviceLogic() {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<UserBorrowResDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const [rowSelected, setRowSelected] = useState<number[]>([]);
  const [deviceSelected, setDeviceSelected] = useState<DeviceSelect[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    setData(listBorrow);
    setTotal(listBorrow.length);
  }, [page, limit]);

  const handleChangePage = (page: number, pageSize: number) => {
    if (!page || !pageSize) {
      setMessageError('page and pageSize is required');
      return;
    }
    setLimit(pageSize);
    setPage(page);
  };

  const handleAdd = (listId: number[]) => {
    if (!listId) {
      setMessageError('listId is empty');
      return;
    }
    setMessageError(`cannot add ListId = : ${listId} waiting for api`);
  };
  const handleSelect = (listId: Key[]) => {
    if (listId.length === 0) {
      setMessageError('listId is empty');
      return;
    }
    const listSelectedId: number[] = [];
    const listDevice: DeviceSelect[] = [];
    listId.map((id) => {
      if (Number(id)) {
        listSelectedId.push(Number(id));
        const device = data.filter((device) => Number(id) === device.id);
        if (device) {
          listDevice.push({ id: device[0].id, name: device[0].deviceName });
        }
      }
    });
    setRowSelected(listSelectedId);
    setDeviceSelected(listDevice);
  };
  const showModal = (open: boolean) => {
    setOpenModal(open);
  };
  const removeDevice = (id: number) => {
    const newList = deviceSelected.filter((device) => {
      if (device.id != id) {
        return device;
      }
    });
    const newRowSelect = rowSelected.filter((rowId) => {
      if (rowId != id) {
        return rowId;
      }
    });
    setDeviceSelected(newList || []);
    setRowSelected(newRowSelect);
  };

  return {
    messageError,
    data,
    page,
    total,
    limit,
    rowSelected,
    openModal,
    deviceSelected,
    removeDevice,
    handleChangePage,
    handleAdd,
    handleSelect,
    showModal,
  };
}
