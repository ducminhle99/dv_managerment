import { Expose, Type } from 'class-transformer';
import { IndustryType } from './companyAccount';
import { PaginationRes } from './responseTemplate';

export class WorkplaceAddress {
  address?: string = '';

  subAddress?: string = '';

  zipCode?: string = '';

  fullAddress() {
    const zipCode = this.zipCode ? `〒${this.zipCode.slice(0, 3)}-${this.zipCode.slice(3, 7)}　` : '';

    return `${zipCode}${this.address || ''}${this.subAddress || ''}`;
  }
}

export class WorkplaceDto {
  key = '';

  companyKey?: string = '';

  wName = '';

  wUrl?: string = '';

  wBusinessDescription?: string = '';

  @Expose()
  wPhoneNo?: string = '';

  wPhoneNumber1?: string = '';

  wPhoneNumber2?: string = '';

  wPhoneNumber3?: string = '';

  @Type(() => WorkplaceAddress)
  wAddress?: WorkplaceAddress;

  wPICFirstName?: string = '';

  wPICLastName?: string = '';

  wPICFullName?: string = '';

  wPosition?: string = '';

  wIndustryType?: IndustryType;

  wNote?: string = '';
}

export class WorkplaceDropDownDto {
  @Expose({ name: 'key' })
  value = '';

  @Expose({ name: 'wName' })
  label = '';
}

export class WorkplacesResDto {
  @Expose()
  @Type(() => WorkplaceDto)
  items: WorkplaceDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}
