import { Expose, Type } from 'class-transformer';
import { PaginationRes } from './responseTemplate';

export class HeadOfficeDto {
  zipCode: string;
  address: string;
  subAddress: string;
}
export class RecruitmentResDto {
  workLocation: string;
  companyName: string;
  headOffice: HeadOfficeDto;

  @Expose({ name: 'recruitStatus' })
  currentRecruitmentStatus?: number;

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
  @Expose({ name: 'companyUrl' })
  comWebsite: string;
  workPlaceName: string;
  workPlaceKey: string;
  key: string;
}

export class RecruitmentsResDto {
  @Expose()
  @Type(() => RecruitmentResDto)
  items: RecruitmentResDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}
