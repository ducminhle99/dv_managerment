import { ApproveStatus } from '../response';
import { PaginationReq } from './requestTemplate';

export class CompanyCreateReqDto {
  firstName: string;
  lastName: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  position: string;
  department: string;
  email: string;
  companyProfile: {
    compName: string;
    compContractPlan: number | string;
    comAddress: {
      zipCode: number;
      address: string;
      subAddress: string;
    };
    compRepFirstName: string;
    compRepLastName: string;
    comIndustryType: number | string;
    comProfitType: number | string;
    comEmployeeSize: number | string;
    comWebsite?: string;
  };
}

export class CompanyUpdateReqDto {
  key: string | number;
  firstName: string;
  lastName: string;
  phoneNumber1: string;
  phoneNumber2: string;
  phoneNumber3: string;
  position: string;
  department: string;
  email: string;
  companyProfile: {
    compName: string;
    compContractPlan: number | string;
    comAddress: {
      zipCode: number;
      address: string;
      subAddress: string;
    };
    compRepFirstName: string;
    compRepLastName: string;
    comIndustryType: number | string;
    comProfitType: number | string;
    comEmployeeSize: number | string;
    comWebsite?: string;
    isEndContract?: boolean;
    remark?: string;
  };
}

export class CompanyReqDto extends PaginationReq {
  'filtered[compContractPlan]'?: number;
  'filtered[comEmployeeSize]'?: number;
  'filtered[compName]'?: string;
  'filtered[comIndustryType]'?: number;
  'filtered[approvedStatus]'?: ApproveStatus;
  'filtered[address]'?: string;
  'filtered[comProfitType]'?: number;
}

export class CompanyApproveReqDto {
  userKey: string | number;
  approvedStatus: ApproveStatus;
}
