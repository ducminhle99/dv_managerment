import { Expose, Type } from 'class-transformer';
import { PaginationRes } from './responseTemplate';

export class Address {
  address?: string = '';

  subAddress?: string = '';

  zipCode?: string = '';

  prefecture?: string = '';

  fullAddress() {
    const zipCode = this.zipCode ? `〒${this.zipCode.slice(0, 3)}-${this.zipCode.slice(3, 7)}　` : '';

    return `${zipCode}${this.address || ''}${this.subAddress || ''}`;
  }
}

export enum Nationality {
  VIETNAMESE = 'vi', //「ベトナム」
  PHILIPPINES = 'ph', //「フィリピン」
  THAILAND = 'th', //「タイ」
  CAMBODIAN = 'km', //「カンボジア」
  Chinese = 'zh', //「中国」
  TAIWAN = 'tw', //「台湾」
  HONGKONG = 'hk', //「香港」
  MYANMAR = 'mm', //「ミャンマー」
  NEPAL = 'np', //「ネパール」
  KOREAN = 'ko', //「韓国」
  INDONESIA = 'id', //「インドネシア」
  MALAYSIA = 'my', //「マレーシア」
  INDIA = 'in', //「インド」
  BANGLADESH = 'bd', //「バングラデシュ」
  MONGOLIA = 'mn', //「モンゴル」
  SINGAPORE = 'sg', //「シンガポール」
  JAPANESE = 'jp', //「日本」
  OTHERS = 'others', //「その他」
}

export enum GenderType {
  MALE = 1, // 「男性」
  FEMALE = 2, //「女性」
}

export class ResourceDto {
  key: string;

  companyKey: string;

  rFullName: string;

  rFullNameFuri?: string;

  rDoB?: string;

  rGender?: GenderType;

  rNationality: Nationality;

  rDesiredIndustry?: number;

  rDesiredWorkArea?: string;

  rResidenceStatus?: number;

  rResidenceCardNumber?: string;

  rResidenceExpiry?: string;

  rJLPT?: number;

  rJFT?: number;

  rQualifications?: string;

  rPassportNumber?: string;

  rWorkPlaceKey?: string;

  rWorkPlaceName?: string;

  @Type(() => Address)
  rAddress?: Address;

  rPhoneNo?: string;

  rPhoneNumber1?: string;

  rPhoneNumber2?: string;

  rPhoneNumber3?: string;

  rEmail?: string;

  rProgressStatus?: number;

  rNote?: string;

  rIsResidentExpriyAlert?: boolean;

  getJPlevel() {
    const jlpt = this.rJLPT ? (this.rJLPT > 5 ? 'JLPT未受験' : `N${this.rJLPT}`) : '';
    const jrt = this.rJFT ? `、JFTレベル${this.rJFT}` : '';
    return `${jlpt}${jrt}`;
  }

  fullAddress() {
    return this.companyKey;
  }
}
export class ResourceResDto {
  key: string;

  rIsResidentExpriyAlert: boolean;
  rFullName: string;
  rFullNameFuri: string;
  rDoB: string;
  rWorkPlaceKey: string;
  rWorkPlaceName: string;
  rGender: boolean;
  rNationality: string;
  rDesiredIndustry: string;
  rDesiredWorkArea: string;
  rResidenceStatus: string;
  rResidenceCardNumber: string;
  rResidenceExpiry: string;

  rJLPT: number;
  rJFT: string;
  rQualifications: string;

  rPassportNumber: string;
  rAddress: {
    zipCode: number;
    address: string;
    subAddress: string;
    prefecture: string;
  };

  rPhoneNumber1: string;
  rPhoneNumber2: string;
  rPhoneNumber3: string;
  rEmail: string;

  rProgressStatus: number;
  rNote: string;
}

export class ResourcesResDto {
  @Expose()
  @Type(() => ResourceDto)
  items: ResourceDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class ResourceTodoResDto {
  recDocSelection: {
    jobVacancies: number;
    regInterview: number;
    classification: number;
  };
  interviewExam: {
    primaryInterview: number;
    secondInterview: number;
    thirdInterview: number;
    finalInterview: number;
    writtenExam: number;
    practicalExam: number;
  };
  informalDecisionRelDoc: {
    unofficialDec: number;
    acptOffer: number;
    dclOffer: number;
    docSubmissionReq: number;
    docCollection: number;
    forming: number;
    signStamp: number;
  };
  applicationNotice: {
    appComplete: number;
    appReject: number;
    reqAddDocument: number;
    receiveNotification: number;
    receipt: number;
  };
  joinFail: {
    join: number;
    fail: number;
  };
}
