import { ReportStatus, ReportType } from '../../types/report';
export class ReportListResDto {
  id: number;
  status: ReportStatus;
  deviceId: number;
  deviceName: string;
  dayReport: string;
  type: ReportType;
  userName: string;
}
