import { Expose, Type } from 'class-transformer';
import { convertToDateTime } from 'common/utilities/dateUtil';
import { PaginationRes } from './responseTemplate';
import { contactPlanLabel } from 'common/constants/companyAccount';
import { convertToJPDateTime } from 'common/utilities/dateUtil';
import { formatCurrency } from 'common/utilities/helper';

export class InvoiceRes {
  key: string;
  issueDate: string;
  payDeadline: string;
  date: string;
  payMonth: string;
  noTaxAmount: number;
  companyKey: string;
  companyName: string;
  companyPlan: number;
  remark: string;

  @Expose()
  get deadLineDate() {
    return convertToDateTime(this.payDeadline);
  }

  @Expose()
  get month() {
    return this.payMonth ? new Date(this.payMonth).getMonth() + 1 : 0;
  }

  @Expose()
  get payDate() {
    const date = new Date(this.payMonth);

    return `${date.getFullYear()}年${date.getMonth() + 1}`;
  }

  @Expose()
  get typeContract() {
    return contactPlanLabel[Number(this.companyPlan)];
  }

  @Expose()
  get issueDateToJP() {
    return this.issueDate ? convertToJPDateTime(this.issueDate) : '';
  }

  @Expose()
  get paymentDeadline() {
    return this.payDeadline ? convertToJPDateTime(this.payDeadline) : '';
  }

  @Expose()
  get taxAmount() {
    return this.noTaxAmount ? formatCurrency(Number(this.noTaxAmount)) : '-';
  }

  @Expose()
  get subTotal(): number {
    return Number(this.noTaxAmount);
  }

  // TAX PERCENT = 10;
  @Expose()
  get taxTotal(): number {
    return Math.round((this.subTotal * 10) / 100);
  }

  @Expose()
  get total(): number {
    return Math.round(this.subTotal + this.taxTotal);
  }
}

export class InvoiceResDto {
  @Expose()
  @Type(() => InvoiceRes)
  items: InvoiceRes[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class DebitCompanyDto {
  companyKey: string;
  companyName: string;
  companyPlan: string;
}
