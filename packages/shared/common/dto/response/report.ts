import { ReportStatus, ReportType } from '../../types/report';

export class ReportResDto {
  status: ReportStatus;
  deviceId: number;
  reportId: number;
  name: string;
  reportDay: string;
  typeReport: ReportType;
  userId: number;
  userName: string;
  description: string;
  image: string;
}
