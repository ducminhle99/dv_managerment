import { DocumentType } from '../../constants/document';
import { PaginationReq } from './requestTemplate';

export class DocumentCreateReqDto {
  name: string;
  companyKey: string;
  resourceKey: string;
  workPlaceKey: string;
  documentType: number;
  documentMasterKey: string;
  jobType: number;
  filePath: string;

  workPlaceFlg: boolean;
  nationalityFlg: boolean;
  genderFlg: boolean;
}

export class DocumentMasterReqDto extends PaginationReq {
  'type'?: DocumentType;
}

export class DocumentFilterReqDto extends PaginationReq {
  'filtered[freeTxt]'?: string;
}

export class DocumentDownloadReqDto {
  keys: string[];
}

export class DocumentUpdateReqDto extends DocumentCreateReqDto {
  key: string;
}
