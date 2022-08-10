import { LoginResDto, ReportListResDto } from 'common/dto/response';
import { useApiCaller } from 'common/hooks';
import { getAllReport } from 'common/services/api';
import { useEffect, useState } from 'react';

import { errorCode } from 'common/constants/apiErrorCode';
import { ReportStatus, ReportType } from 'common/types/report';

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
    status: ReportStatus.ACCEPTED,
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
];
export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<ReportListResDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);

  const { loading } = useApiCaller<LoginResDto>({ apiCaller: getAllReport, resDto: LoginResDto, errorCodeObject: errorCode.login });
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
  return { messageError, data, page, total, limit, loading, handleChangePage };
}
