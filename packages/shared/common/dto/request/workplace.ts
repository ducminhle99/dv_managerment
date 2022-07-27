import { PaginationReq } from './requestTemplate';

export class WorkplaceListReqDto extends PaginationReq {
  'filtered[wName]'?: string;
  'filtered[wIndustryType]'?: number;
}

export class WorkplaceCreateReqDto {
  wName: string;
  wUrl?: string;
  wBusinessDescription?: string;
  wPhoneNumber1?: string;
  wPhoneNumber2?: string;
  wPhoneNumber3?: string;
  wAddress: {
    zipCode?: string;
    address?: string;
    subAddress?: string;
  };
  wPICFirstName?: string;
  wPICLastName?: string;
  wPosition?: string;
  wIndustryType?: number;
  wNote?: string;
}

export class WorkplaceUpdateReqDto extends WorkplaceCreateReqDto {
  key: string;
}
