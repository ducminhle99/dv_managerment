import { Expose, Type } from 'class-transformer';
import { Role } from 'common/types/role';
import { ComAddress } from './companyAccount';
import { PaginationRes } from './responseTemplate';

export class UserResDto {
  key: string;

  firstName: string;

  lastName: string;

  fullName: string;

  email: string;

  phoneNumber1: string;

  phoneNumber2: string;

  phoneNumber3: string;

  position: string;

  department: string;

  role: Role;

  contactNumber() {
    return `${this.phoneNumber1}-${this.phoneNumber2}-${this.phoneNumber3}`;
  }
}

export class UsersResDto {
  @Expose()
  @Type(() => UserResDto)
  items: UserResDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class UserDetailResDto {
  @Expose({ name: 'key' })
  userId: string;

  @Expose({ name: 'fullName' })
  userName: string;

  firstName: string;

  lastName: string;

  email: string;

  @Expose({ name: 'contractPhone' })
  contactNumber: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;

  position: string;
  department: string;
  role: Role;
}

export class UserProfileDto {
  email: string;
  department: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  contractPhone: string;
  firstName: string;
  lastName: string;
  fullName: string;
  position: string;
  role: Role;
}

export class CompanyInfo {
  comEmployeeSize: number;
  comIndustryType: number;
  comProfitType: number;
  comWebsite: string;
  compContractPlan: number;
  compName: string;
  compRepFullName: string;
  compRepFirstName: string;
  compRepLastName: string;

  @Type(() => ComAddress)
  comAddress: ComAddress;

  periodicReportFlg = true;
}

export class CompanyProfileDto extends UserProfileDto {
  @Type(() => CompanyInfo)
  companyProfile?: CompanyInfo;
}
