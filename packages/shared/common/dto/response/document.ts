import { Expose, Type } from 'class-transformer';
import { DocumentType } from '../../constants/document';
import { PaginationRes } from './responseTemplate';

export class DocumentMasterResDto {
  name: string;
  key: string;
  code: string;
}

export class DocumentResDto {
  key: string;
  name: string;
  companyKey: string;
  isChecked? = false;
  documentCd: number;
  documentName: string;
  documentType: DocumentType;
  resourceKey?: string;
  resourceName?: string;
  workPlaceKey?: string;
  workPlaceName?: string;
  filePath: string;
  dateUpdated: string;
  documentMasterKey: string;
  nationality: string;
  gender: string;
  jobType: string;

  rWorkPlaceKey: string;
  nationalityFlg: boolean;
  workPlaceFlg: boolean;
  genderFlg: boolean;
}

export class DocumentsResDto {
  @Expose()
  @Type(() => DocumentResDto)
  items: DocumentResDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}
