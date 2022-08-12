import { UserReportListResDto } from 'common/dto/response';
import { ReportStatus } from 'common/types/report';
import { useEffect, useState } from 'react';

const listReportDevice = [
  {
    id: 1,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    reportDate: '20/12/2021',
    serial: '23125',
    status: ReportStatus.ACCEPTED,
  },
  {
    id: 2,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    reportDate: '20/12/2021',
    serial: '23125',
    status: ReportStatus.WAITING,
  },
  {
    id: 3,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    reportDate: '20/12/2021',
    serial: '23125',
    status: ReportStatus.WAITING,
  },
  {
    id: 4,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    reportDate: '20/12/2021',
    serial: '23125',
    status: ReportStatus.ACCEPTED,
  },
  {
    id: 5,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    reportDate: '20/12/2021',
    serial: '23125',
    status: ReportStatus.WAITING,
  },
  {
    id: 6,
    name: 'laptop abc',
    image: '/assets/images/laptop.jpg',
    reportDate: '20/12/2021',
    serial: '23125',
    status: ReportStatus.WAITING,
  },
];
export default function useReportLogic() {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<UserReportListResDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    setData(listReportDevice);
    setTotal(listReportDevice.length);
  }, [page, limit]);

  const handleChangePage = (page: number, pageSize: number) => {
    if (!page || !pageSize) {
      setMessageError('page and pageSize is required');
      return;
    }
    setLimit(pageSize);
    setPage(page);
  };

  return { messageError, data, page, total, limit, handleChangePage };
}
