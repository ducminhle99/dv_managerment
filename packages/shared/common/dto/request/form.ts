import { AppFormSearchType, AppFormStatus } from '../../constants/form';
import { PaginationReq } from './requestTemplate';

export class ApplyFormReqDto extends PaginationReq {
  'filtered[workPlace]'?: string; // 2 or 4
  'filtered[resourceName]'?: string; //1
  'filtered[formName]'?: string;
  'filtered[status]'?: AppFormStatus;
  'filtered[type]'?: AppFormSearchType;
}

export class ApplyFormDownloadReq {
  formId: string;
  languageCd: string;
}

export class FormDocumentReqDto {
  isNotCompleted: boolean;
  isCompleted: boolean;
  isBefore?: boolean;
  isResource: boolean;
  inputKey: string;
}
