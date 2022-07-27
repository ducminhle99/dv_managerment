import { PaginationReq } from './requestTemplate';

export class InterviewCreateReqDto {
  candidateEmail?: string;
  interviewerFirstName?: string;
  interviewerLastName?: string;
  candidateFullName?: string;
  category?: number;
  scheduleDate?: string;
  scheduleStartTime?: string;
  scheduleEndTime?: string;
  warningEnabled?: boolean;
  hasRoomRecord?: boolean;
  isWarningSent?: boolean;
}

export class InterviewUpdateReqDto extends InterviewCreateReqDto {
  key: string;
  memo: string;
  content: string;
}

export class InterviewHistoryFilterReqDto extends PaginationReq {
  'filtered[candidateFullName]'?: string;
  'filtered[toDate]'?: string;
  'filtered[fromDate]'?: string;
  'filtered[category]'?: number;
}

export class InterviewListReqDto extends PaginationReq {
  status: string;
}

export class SubscriberStatusReqDto {
  languageCode: string;
  enable: boolean;
  interviewId: string;
}
