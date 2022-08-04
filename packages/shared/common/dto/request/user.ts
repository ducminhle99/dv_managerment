import { Role } from 'common/types/role';

export class UserCreationReqDto {
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  email: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  role: Role;
}

export class UpdateUserReqDto {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  role: Role;
}

export class UserProfileUpdateDto {
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  phoneNumber3?: string;
  currentPwd?: string;
  newPwd?: string;
  position?: string;
  department?: string;
}

export class CompanyProfileUpdateDto extends UserProfileUpdateDto {
  compRepFirstName: string;
  compRepLastName: string;
  comProfitType?: number;
  comEmployeeSize?: number;
  periodicReportFlg: boolean;
}

export class ChangePasswordReqDto {
  userKey: string;
  password: string;
  newPassword: string;
}
