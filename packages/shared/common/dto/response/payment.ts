import { Expose, Type } from 'class-transformer';
import { PaginationRes } from './responseTemplate';

export class PaymentDto {
  companyKey: string;
  companyName: string;
  unpaidFlg: boolean;
}

export class PaymentResDto {
  @Expose()
  @Type(() => PaymentDto)
  items: PaymentDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class PaidItemDto {
  payMonth?: string;

  remark?: string;
}

export class PaidListResDto {
  @Expose()
  @Type(() => PaidItemDto)
  items: PaidItemDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class UnpaidItemDto {
  @Expose({ name: 'companyKey' })
  value: string;

  @Expose({ name: 'companyName' })
  label: string;

  payMonth: string;
}

export class UnpaidListResDto {
  @Expose()
  @Type(() => UnpaidItemDto)
  items: UnpaidItemDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class DebitDto {
  @Expose({ name: 'companyKey' })
  value: string;

  @Expose({ name: 'companyName' })
  label: string;

  unpaidMonth: string[];
}
