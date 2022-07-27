import { PaginationReq } from './requestTemplate';
export class ResourceEditReqDto {
  key: string;

  rIsResidentExpriyAlert: boolean;
  rFullName: string;
  rFullNameFuri: string | null;
  rDoB: string | null;
  rWorkPlaceKey: string | null;
  rAddress: {
    zipCode: number | null;
    address: string | null;
    subAddress: string | null;
    prefecture: string | null;
  };

  rGender: boolean | null;
  rNationality: string;
  rDesiredIndustry: string | null;
  rDesiredWorkArea: string | null;
  rResidenceStatus: string | null;
  rResidenceCardNumber: string | null;
  rResidenceExpiry: string | null;

  rJLPT: number | null;
  rJFT: string | null;
  rQualifications: string | null;

  rPassportNumber: string | null;

  rPhoneNumber1: string;
  rPhoneNumber2: string;
  rPhoneNumber3: string;

  rEmail: string | null;
  rProgressStatus: number | null;
  rNote: string | null;
}

export class ResourceCreateReqDto {
  rFullName: string;
  rFullNameFuri?: string;
  rDoB?: string;
  rGender?: number;
  rNationality: number;
  rDesiredIndustry?: number;
  rDesiredWorkArea?: string;
  rResidenceStatus?: number;
  rResidenceCardNumber?: number;
  rResidenceExpiry?: string;
  rIsResidentExpriyAlert?: boolean;
  rJLPT?: number;
  rJFT?: string;
  rQualifications?: string;
  rPassportNumber?: string;
  rWorkPlaceKey?: string;
  rAddress?: {
    zipCode?: string;
    address?: string;
    subAddress?: string;
    prefecture?: string;
  };
  rPhoneNumber1?: string;
  rPhoneNumber2?: string;
  rPhoneNumber3?: string;
  rEmail?: string;
  rProgressStatus?: number;
  rNote?: string;
}

export class ResourceFilterReqDto extends PaginationReq {
  'filtered[prefecture]'?: string;
  'filtered[residentExpiryTo]'?: string;
  'filtered[residentExpiryFrom]'?: string;
  'filtered[ageFrom]'?: string;
  'filtered[ageTo]'?: string;
  'filtered[rResidenceStatus]'?: string;
  'filtered[rProgressStatus]'?: string;
  'filtered[rJLPT]'?: string;
  'filtered[rNationality]'?: string;
  'filtered[freeTxt]'?: string;
  'filtered[rGender]'?: string;
  'filtered[workPlace]'?: string;
}
