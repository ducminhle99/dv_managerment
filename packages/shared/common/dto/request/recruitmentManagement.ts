import { Expose } from 'class-transformer';
import { PaginationReq } from './requestTemplate';

export class HeadOfficeDto {
  zipCode?: string;
  address?: string;
  subAddress?: string;
}
export class RecruitmentCreateReqDto {
  workLocation: string;

  companyKey: string;

  headOffice: HeadOfficeDto;

  @Expose({ name: 'companyUrl' })
  comWebsite?: string;

  @Expose({ name: 'recruitStatus' })
  currentRecruitmentStatus?: number;

  @Expose({ name: 'businessSummay' })
  businessSummary: string;

  @Expose({ name: 'type' })
  industry?: number;

  @Expose({ name: 'title' })
  jobTitle: string;

  @Expose({ name: 'numberOfApplicant' })
  recruiter: string;

  @Expose({ name: 'emplomentStatus' })
  recruitmentType?: number;

  @Expose({ name: 'description' })
  jobContent: string;

  targetPerson: string;
  workPlaceKey: string;
  nearestStation: string;
  salary: string;

  @Expose({ name: 'workingHour' })
  workingHours?: string;

  holidayVacation?: string;

  @Expose({ name: 'allowance' })
  variousAllowances: string;

  @Expose({ name: 'dormitoryComHouse' })
  dormitory: string;

  @Expose({ name: 'selectionContent' })
  selectionDetails: string;

  @Expose({ name: 'remark' })
  remarks?: string;
}

export class RecruitmentEditReqDto {
  key: string;

  workLocation: string;

  @Expose({ name: 'companyUrl' })
  comWebsite: string;

  headOffice: HeadOfficeDto;

  @Expose({ name: 'recruitStatus' })
  currentRecruitmentStatus?: number | null;

  @Expose({ name: 'businessSummay' })
  businessSummary: string;

  @Expose({ name: 'type' })
  industry: number;

  @Expose({ name: 'title' })
  jobTitle: string;

  @Expose({ name: 'numberOfApplicant' })
  recruiter: string;

  @Expose({ name: 'emplomentStatus' })
  recruitmentType: number;

  @Expose({ name: 'description' })
  jobContent: string;

  targetPerson: string;
  nearestStation: string;
  salary: string;

  @Expose({ name: 'workingHour' })
  workingHours?: string | null;

  holidayVacation?: string | null;

  @Expose({ name: 'allowance' })
  variousAllowances: string;

  @Expose({ name: 'dormitoryComHouse' })
  dormitory: string;

  @Expose({ name: 'selectionContent' })
  selectionDetails: string;

  @Expose({ name: 'remark' })
  remarks?: string | null;

  workPlaceKey: string;
}

export class RecruitmentFilterReqDto extends PaginationReq {
  'filtered[type]'?: string;
  'filtered[recStt]'?: string;
  'filtered[title]'?: string;
  'filtered[workPlace]'?: string;
}
