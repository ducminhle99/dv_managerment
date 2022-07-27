import { Expose, Type } from 'class-transformer';
import { AppFormDocumentType, AppFormSearchType, AppFormStatus, LanguageCode, languageLabel, TemplateType } from '../../constants/form';
import { PaginationRes } from './responseTemplate';

export class TemplateFromDetailResDto {
  key: string;
  candidateName: string;
  status: string;
  version: number;
  type: string;
  mainLanguage: string;
  languages: string[];
  htmls: string[];
  css: string;
  hasAutoFillName: boolean;
}

export class TemplateFormInfoResDto {
  key: string;

  type: number;

  formName: string;

  languages: any[];
}

export class TemplateFormInfosResDto {
  @Type(() => TemplateFormInfoResDto)
  items: TemplateFormInfoResDto[] = [];
}

export class FormDto {
  key: string;

  isChecked? = false;

  @Expose({ name: 'status' })
  completeStatus: AppFormStatus;

  formName: string;

  resourceName: string;

  @Expose({ name: 'workPlaceName' })
  workplaceName: string;

  workPlaceKey: string;

  resourceKey: string;

  @Expose({ name: 'dateUpdated' })
  updatedAt: string;

  status: string;

  type: AppFormSearchType;

  mainLanguage: LanguageCode;
}

export class FormResDto {
  @Expose()
  @Type(() => FormDto)
  items: FormDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class FormDetailDto {
  key: string;

  formName: string;

  resourceName: string;

  resourceKey: string;

  workPlaceKey: string;

  appFormTemplateId: string;

  workPlace: string;

  status: AppFormStatus;

  type: AppFormSearchType;

  mainLanguage: LanguageCode;

  languages: string[];

  hasAutoFillName: boolean;

  dateUpdated: string;

  bfrAfterJoin: string;

  category: string;

  gender: string;

  nationality: string;

  jobType: string;

  htmls: string[];

  csss: string[];

  getFileName() {
    const language = languageLabel[this.mainLanguage] || '';
    const date = new Date(this.dateUpdated);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    if (this.resourceName) {
      return `${this.resourceName} ${this.formName} ${language} ${year}${month}${day}`;
    }
    return `${this.workPlace} ${this.formName} ${language} ${year}${month}${day}`;
  }

  workPlaceFlg: boolean;

  nationalityFlg: boolean;

  genderFlg: boolean;
}

export class AppFormAndDocDto {
  key = '';

  name = '';

  status: AppFormStatus;

  mainLanguage: string;

  type: AppFormDocumentType;

  typeForm: TemplateType;
}
