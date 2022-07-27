import { PaginationReq } from './requestTemplate';

export class PaymentFilterReqDto extends PaginationReq {
  comName?: string;
}

export class PaymentCreateDto {
  companyKey: string;

  payMonth: string;

  isPayment: boolean;

  remark?: string;
}
