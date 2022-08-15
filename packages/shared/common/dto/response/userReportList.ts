import { ReportStatus } from '../../types/report';

export class UserReportListResDto {
  id: number;
  name: string;
  image: string;
  reportDate: string;
  serial: string;
  status: ReportStatus;
}
