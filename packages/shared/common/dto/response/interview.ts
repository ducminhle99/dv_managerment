import { Expose, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { callStatus, CompositeStatus, interviewPurpose } from '../../constants/interview';
import { convertTimeStringJPToDate, convertToDateTime, convertToTime } from '../../utilities/dateUtil';
import { PaginationRes } from './responseTemplate';

export class InterviewDto {
  key: string;
  name: string;
  candidateFullName: string;
  candidateEmail: string;
  interviewerFirstName: string;
  interviewerLastName: string;
  roomUrl: string;
  scheduleDate: string;
  scheduleStartTime: string;
  scheduleEndTime: string;
  warningEnabled: boolean;
  roomRecordUrl: string;
  category: number;
  content: string;
  memo: string;
  hasRoomRecord: boolean;
  callStatus: number;
  isWarningSent: boolean;
  compositeStatus: number;
  isRecordExpired: boolean;

  interviewerFullName() {
    return `${this.interviewerLastName ?? ''} ${this.interviewerFirstName ?? ''}`;
  }

  interviewDateTime() {
    return `${this.startDate}　${this.startTime}～${this.endTime}`;
  }

  @Expose()
  get startDate() {
    return convertToDateTime(this.scheduleDate);
  }

  @Expose()
  get endTime() {
    return convertToTime(this.scheduleEndTime) || '';
  }

  @Expose()
  get startTime() {
    return convertToTime(this.scheduleStartTime) || '';
  }

  @Expose()
  get interviewPurposeLabel() {
    return interviewPurpose[this.category] || '';
  }

  isPreparingRecordInterview() {
    return this.hasRoomRecord && this.callStatus === callStatus.ENDED && this.compositeStatus !== CompositeStatus.FINISHED;
  }

  isDoneInterview() {
    return this.callStatus === callStatus.ENDED;
  }

  canDownloadRecord() {
    return this.hasRoomRecord && this.callStatus === callStatus.ENDED && this.compositeStatus === CompositeStatus.FINISHED;
  }

  isExpiredInterview() {
    return moment() > moment(this.scheduleEndTime).add(60, 'minutes');
  }

  isInprogress() {
    return this.callStatus === callStatus.INCALLING;
  }
}

export class InterviewsDto {
  @Expose()
  @Type(() => InterviewDto)
  items: InterviewDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class InterviewInfoDto {
  candidateFullName: string;
  key: string;
  memo: string;

  content: string;
  @Expose({ name: 'scheduleDate' })
  @Transform(({ value }) => convertToDateTime(value))
  startDate: string;

  @Expose({ name: 'scheduleEndTime' })
  @Transform(({ value }) => convertToTime(value))
  endTime: string;

  @Expose({ name: 'scheduleStartTime' })
  @Transform(({ value }) => convertToTime(value))
  startTime: string;

  interviewerFullName() {
    return `${this.interviewerLastName} ${this.interviewerFirstName}`;
  }

  @Expose({ name: 'category' })
  @Transform(({ value }) => interviewPurpose[value] || '')
  interviewPurposeLabel: string;

  interviewerFirstName: string;
  interviewerLastName: string;

  @Expose()
  @Transform(({ value }) => convertTimeStringJPToDate(value))
  matchedAt: Date;

  subcribeLanguageCode: string;

  subcribeEnable: boolean;
}

export class CompanyInterviewInfoDto {
  compRepFullName: string;
}

export class InterviewDetailDto {
  @Type(() => InterviewInfoDto)
  interview: InterviewInfoDto = {} as any;

  @Type(() => CompanyInterviewInfoDto)
  company: CompanyInterviewInfoDto = {} as any;
}
