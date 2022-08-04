import { errorCode } from 'common/constants/apiErrorCode';
import { ReportResDto } from 'common/dto/response';
import { useApiCaller } from 'common/hooks';
import { getReport } from 'common/services/api';
import { ReportStatus, ReportType } from 'common/types/report';

import { useEffect, useState } from 'react';

export default function useData(id: number) {
  const [data, setData] = useState<ReportResDto>({
    status: ReportStatus.WAITING,
    deviceId: 1,
    reportId: id,
    name: 'monitor',
    reportDay: '20/7/2022',
    typeReport: ReportType.BROKEN,
    userId: 1,
    userName: 'nguyen van a',
    description: 'Fell from 4th floor , want ti take a new one and take responsibility',
    image: '/assets/images/device.png',
  });

  const { request, loading } = useApiCaller<ReportResDto>({ apiCaller: getReport, resDto: ReportResDto, errorCodeObject: errorCode.report });

  const fetchData = async (id: number) => {
    const result = await request(id);
    if (result.data) {
      setData(result.data);
      return;
    }
    // router.push('/404');
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { data, loading };
}
