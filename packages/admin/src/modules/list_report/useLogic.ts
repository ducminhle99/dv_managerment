import { ReportListResDto } from 'common/dto/response';
import { useEffect, useState } from 'react';

import { EReportStatus, EReportType, ReportStatus, ReportType } from 'common/types/report';

const listReport = [
  {
    id: 1,
    status: ReportStatus.ACCEPTED,
    deviceId: 2,
    deviceName: 'laptop',
    dayReport: '20/20/2022',
    type: ReportType.BROKEN,
    userName: 'nguyen van a',
  },
  {
    id: 2,
    status: ReportStatus.ACCEPTED,
    deviceId: 2,
    deviceName: 'laptop',
    dayReport: '20/20/2022',
    type: ReportType.BROKEN,
    userName: 'nguyen van a',
  },
  {
    id: 3,
    status: ReportStatus.WAITING,
    deviceId: 2,
    deviceName: 'laptop',
    dayReport: '20/20/2022',
    type: ReportType.BROKEN,
    userName: 'nguyen van a',
  },
  {
    id: 4,
    status: ReportStatus.ACCEPTED,
    deviceId: 2,
    deviceName: 'laptop',
    dayReport: '20/20/2022',
    type: ReportType.BROKEN,
    userName: 'nguyen van a',
  },
  {
    id: 5,
    status: ReportStatus.WAITING,
    deviceId: 2,
    deviceName: 'laptop',
    dayReport: '20/20/2022',
    type: ReportType.BROKEN,
    userName: 'nguyen van a',
  },
];
export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<ReportListResDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

  useEffect(() => {
    setData(listReport);
    setTotal(listReport.length);
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
