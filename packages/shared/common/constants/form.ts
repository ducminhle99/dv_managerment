import { getAge, convertTimeStrToObjTime } from '../utilities/dateUtil';
import { getFullAddress } from '../utilities/form';
import { industryTypeLabel } from './companyAccount';
import { JLPT, ResidentStatus, ResourceNationality } from './resource';

export enum FormType {
  beforeJoin = 'beforeJoin',
  afterJoin = 'afterJoin',
}

export const formTypeLabel: { [key in FormType]: string } = {
  beforeJoin: '入社前',
  afterJoin: '入社後',
};

export const formCategoryLabel: { [key in TemplateType]: string } = {
  1: '人材に関する申請書',
  2: '所属先に関する申請書',
  3: '分野に関する申請書',
  4: '随時・定期的に提出する申請書',
};

export enum TemplateType {
  RESOURCE = 1,
  WORKPLACE = 2,
  JOB_FIELD = 3,
  REGULARLY = 4,
}

export enum LanguageCode {
  JAPANESE = 'jp',
  ENGLISH = 'en',
  INDONESIA = 'id',
  CAMBODIAN = 'km',
  THAILAND = 'th',
  PHILIPPINES = 'tl',
  NEPAL = 'ne',
  VIETNAMESE = 'vi',
  MYANMAR = 'my',
  MONGOLIA = 'mn',
  CHINESE = 'zh',
}

export const languageLabel: { [key in LanguageCode]: string } = {
  jp: '日本語',
  en: '英語',
  id: 'インドネシア語',
  km: 'カンボジア語',
  th: 'タイ語',
  tl: 'タガログ語',
  ne: 'ネパール語',
  vi: 'ベトナム語',
  my: 'ミャンマー語',
  mn: 'モンゴル語',
  zh: '中国語',
};

export enum SpeechToTextLangCode {
  JAPANESE = 'ja-JP', // 日本語
  VIETNAMESE = 'vi-VN', // ベトナム語
  CHINESE_SIMPLIFIED = 'cmn-CN', // 中国語
  ENGLISH_US = 'en-US', // 英語
  FILIPINO = 'fil-PH', // タガログ語
  INDONESIAN = 'id-ID', // インドネシア語
  MYANMAR = 'my-MM', // ミャンマー語
  NEPALI = 'ne-NP', // ネパール語
  THAI = 'th-TH', // タイ語
  KHMER = 'km-KH', // カンボジア語
  MONGOLIAN = 'mn-MN', // モンゴル語
  MALAY = 'ms-MY', // マレー語
  HINDI = 'hi-IN', //ヒンディー語
  BENGALI = 'bn-BD', // バングラデシュ語
  KOREAN = 'ko-KR', // 韓国語
}

export const speechToTextLangLabel: { [key in SpeechToTextLangCode]: string } = {
  'ja-JP': '日本語',
  'vi-VN': 'ベトナム語',
  'cmn-CN': '中国語',
  'en-US': '英語',
  'fil-PH': 'タガログ語',
  'id-ID': 'インドネシア語',
  'my-MM': 'ミャンマー語',
  'ne-NP': 'ネパール語',
  'th-TH': 'タイ語',
  'km-KH': 'カンボジア語',
  'mn-MN': 'モンゴル語',
  'ms-MY': 'マレー語',
  'hi-IN': 'ヒンディー語',
  'bn-BD': 'バングラデシュ語',
  'ko-KR': '韓国語',
};

export type AutoFillMappingKeys = {
  [key: string]: {
    key?: string;
    convert?: (value: any) => any;
    labelObj?: any;
  };
};

export const autoFillMappingKeys: AutoFillMappingKeys = {
  _Fullname: {
    key: 'rFullName',
  },
  _FullnameP4: {
    key: 'rFullName',
  },
  _FullnameForeign: {
    key: 'rFullName',
  },
  _Birthday_Year: {
    convert: (value: any) => {
      const objTime = convertTimeStrToObjTime(value);

      return objTime.year;
    },
    key: 'rDoB',
  },
  _Birthday_Month: {
    convert: (value: any) => {
      const objTime = convertTimeStrToObjTime(value);

      return objTime.month;
    },
    key: 'rDoB',
  },
  _Birthday_Day: {
    convert: (value: any) => {
      const objTime = convertTimeStrToObjTime(value);

      return objTime.day;
    },
    key: 'rDoB',
  },
  _Age: {
    convert: getAge,
    key: 'rDoB',
  },
  _Sex: {
    key: 'rGender',
    labelObj: {
      1: 'Male',
      2: 'Female',
    },
  },
  _National: {
    key: 'rNationality',
    labelObj: ResourceNationality,
  },
  _ResidenceCardNumber: {
    key: 'rResidenceCardNumber',
  },
  _ResidenceStatus: {
    key: 'rResidenceStatus',
    labelObj: ResidentStatus,
  },
  _ResidenceExpiration_Year: {
    key: 'rResidenceExpiry',
    convert: (value: any) => {
      const objTime = convertTimeStrToObjTime(value);

      return objTime.year;
    },
  },
  _ResidenceExpiration_Month: {
    key: 'rResidenceExpiry',
    convert: (value: any) => {
      const objTime = convertTimeStrToObjTime(value);

      return objTime.month;
    },
  },
  _ResidenceExpiration_Day: {
    key: 'rResidenceExpiry',
    convert: (value: any) => {
      const objTime = convertTimeStrToObjTime(value);

      return objTime.day;
    },
  },
  _PassportNumber: {
    key: 'rPassportNumber',
  },
  _Address: {
    key: 'rAddress',
    convert: getFullAddress,
  },
  _PhoneNumber: {
    key: 'rPhoneNo',
  },
  _Email: {
    key: 'rEmail',
  },
  _DesiredOccupation: {
    key: 'rDesiredIndustry',
    labelObj: industryTypeLabel,
  },
  _PreferredWorkplace: {
    key: 'rDesiredWorkArea',
  },
  _JapaneseLevel: {
    key: 'rJLPT',
    convert: (value: any) => {
      return JLPT[value] || '';
    },
  },
  _Qualifications: {
    key: 'rQualifications',
  },
  _FullnameFurigana: {
    key: 'rFullNameFuri',
  },

  _Workplace_Fullname: {
    key: 'wName',
  },

  _Workplace_PhoneNumber: {
    key: 'wPhoneNo',
  },

  _Workplace_Address: {
    key: 'wAddress',
    convert: getFullAddress,
  },

  _Workplace_PersonInCharge: {
    key: 'wPICFullName',
  },

  _Workplace_Role: {
    key: 'wPosition',
  },
};

export enum AppFormStatus {
  PROCESSING = 'Processing',
  FINISH = 'Finish',
}

export enum AppFormSearchType {
  RESOURCE = 1, //「人材に関する申請書」
  WORK_PLACE = 2, //「所属先に関する申請書」
  REGULAR = 4, //「定期又は随時届出に関する申請書」
}

export enum AppFormDocumentType {
  APP_FORM = 'AppForm',
  DOCUMENT = 'Document',
}
