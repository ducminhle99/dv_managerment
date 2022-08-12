import { UserBorrowListResDto } from 'common/dto/response';
import { useRouter } from 'next/router';
import { Key, useEffect, useState } from 'react';

const listBorrowDevice = [
  {
    id: 1,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    fromDate: '20/12/2021',
    brand: 'apple',
    category: 'laptop',
    serial: '23125',
  },
  {
    id: 2,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    fromDate: '20/12/2021',
    brand: 'apple',
    category: 'laptop',
    serial: '23125',
  },
  {
    id: 3,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    fromDate: '20/12/2021',
    brand: 'apple',
    category: 'laptop',
    serial: '23125',
  },
  {
    id: 4,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    fromDate: '20/12/2021',
    brand: 'apple',
    category: 'laptop',
    serial: '23125',
  },
  {
    id: 5,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    fromDate: '20/12/2021',
    brand: 'apple',
    category: 'laptop',
    serial: '23125',
  },
  {
    id: 6,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    fromDate: '20/12/2021',
    brand: 'apple',
    category: 'laptop',
    serial: '23125',
  },
];
export default function useBorrowLogic() {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<UserBorrowListResDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const [listId, setListId] = useState<number[]>([]);
  const router = useRouter();
  useEffect(() => {
    setData(listBorrowDevice);
    setTotal(listBorrowDevice.length);
  }, [page, limit]);

  const handleChangePage = (page: number, pageSize: number) => {
    if (!page || !pageSize) {
      setMessageError('page and pageSize is required');
      return;
    }
    setLimit(pageSize);
    setPage(page);
  };

  const handleSelect = (listSeletedId: Key[]) => {
    if (listSeletedId.length === 0) {
      setMessageError('list selected id is empty');
      return;
    }
    const list: number[] = [];
    listSeletedId.map((id) => {
      if (Number(id)) {
        list.push(Number(id));
      }
    });

    setListId(list);
    setMessageError('cannot select waiting for api');
  };

  const handleReport = () => {
    router.push({
      pathname: '/report',
      query: {
        id: listId,
      },
    });
  };

  return { messageError, data, page, total, limit, handleChangePage, handleSelect, handleReport };
}
