import { useEffect, useState } from 'react';
import { UserBorrowResDto } from 'common/dto/response';

const listBorrow: UserBorrowResDto[] = [
  {
    id: 1,
    deviceName: 'laptop abc',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 2,
    deviceName: 'laptop abc',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 3,
    deviceName: 'laptop abc',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 4,
    deviceName: 'laptop abc',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
  {
    id: 5,
    deviceName: 'laptop abc',
    image: '/assets/images/device.png',
    brand: 'dell',
    category: 'monitor',
    serial: 'L001',
  },
];
export default function useBorrowLogic() {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<UserBorrowResDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

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

  const handleRemove = (id: number) => {
    if (!id) {
      setMessageError('id is empty');
      return;
    }
    setMessageError(`cannot remove device id = : ${id} waiting for api`);
  };

  return { messageError, data, page, total, limit, handleChangePage, handleRemove };
}
