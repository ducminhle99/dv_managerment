import { PaginationReq } from './requestTemplate';

export class InvoiceFilterReqDto extends PaginationReq {
  'filtered[payDeadlineTo]'?: string;
  'filtered[payDeadlineFrom]'?: string;
  'filtered[freeTxt]'?: string;
  'filtered[payMonth]'?: string;
  'filtered[payYear]'?: string;
  'filtered[companyPlan]'?: number;
}

export class InvoiceReqDto {
  key?: string;
  issueDate: string;
  payDeadline: string;
  date?: string;
  companyKey: string;
  companyPlan: number;
  payMonth: string;
  noTaxAmount: number;
  remark?: string;
}
