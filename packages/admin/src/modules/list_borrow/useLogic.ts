import { AdminBorrowResDto } from 'common/dto/response';
import { useEffect, useState } from 'react';

import { EReportStatus, EReportType } from 'common/types/report';

const listBorrow: AdminBorrowResDto[] = [
  {
    id: 1,
    deviceName: 'laptop abc',
    createBy: 'Admin1',
    borrowDay: '20/20/2022',
    userName: 'nguyen van a',
    serial: 'L001',
  },
  {
    id: 2,
    deviceName: 'laptop abc',
    createBy: 'Admin1',
    borrowDay: '20/20/2022',
    userName: 'nguyen van a',
    serial: 'L001',
  },
  {
    id: 3,
    deviceName: 'laptop abc',
    createBy: 'Admin1',
    borrowDay: '20/20/2022',
    userName: 'nguyen van a',
    serial: 'L001',
  },
  {
    id: 4,
    deviceName: 'laptop abc',
    createBy: 'Admin1',
    borrowDay: '20/20/2022',
    userName: 'nguyen van a',
    serial: 'L001',
  },
  {
    id: 5,
    deviceName: 'laptop abc',
    createBy: 'Admin1',
    borrowDay: '20/20/2022',
    userName: 'nguyen van a',
    serial: 'L001',
  },
];
export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<AdminBorrowResDto[]>([]);
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

  const handleAccept = (id: number) => {
    if (!id) {
      setMessageError('cannot accept');
      return;
    }
    setMessageError('cannot accept waiting for api');
  };
  const handleFilter = (status?: EReportStatus, type?: EReportType) => {
    if (!status && !type) {
      setMessageError('missing status or type to filter');
      return;
    }
    setMessageError(`can not filter  waiting for api`);
  };
  const handleSearch = (keyWord: string) => {
    if (keyWord === '') {
      setMessageError('keyword is empty');
      return;
    }
    setMessageError(`cannot search: ${keyWord} waiting for api`);
  };

  return { messageError, data, page, total, limit, handleChangePage, handleAccept, handleFilter, handleSearch };
}
