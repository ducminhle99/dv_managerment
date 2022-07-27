import { Expose, Type } from 'class-transformer';
import { Role } from '../../types/role';
import { PaginationRes } from './responseTemplate';
import { formatDate } from 'common/utilities/helper';

export const enum ContractPlanType {
  LITE = 1, // 「ライトプラン」
  BASIC = 2, // 「ベーシックプラン」
  HIGHEND = 3, // 「ハイエンドプラン」
  OTHER = 99, // 「その他」
}

export const enum IndustryType {
  NURSE = 1, //「1.介護業」
  BUILDING_CLEAN = 2, //「2.ビルクリーニング業」
  RAW_MATERIAL = 3, //「3.素形材産業」
  INDUSTRI_MACHINE_MANUF = 4, //「4.産業機械製造業」
  ELECTRIC_ELECTRONIC_INF = 5, //「5.電気・電子情報関連産業」
  CONSTRUCTION = 6, //「6.建設業」
  SHIPBUILDING_MARINE = 7, //「7.造船・舶用業」
  AUTOMOBILE_MAINTENANCE = 8, //「8.自動車整備業」
  AVIATION = 9, //「9.航空業」
  ACCOMMODATION = 10, //「10.宿泊業」
  AGRICULTURE = 11, //「11.農業」
  FISHING = 12, //「12.漁業」
  FOOD_DRINK_MANUF = 13, //「13.飲食料品製造業」
  RESTAURANT = 14, //「14.外食業」
  REGIST_SUPPORT_ORG = 15, //「15．登録支援機関（行政書士事務所含む）」
  OTHERS = 16, //「16．その他」
}

export const enum ProfitType {
  TO_50 = 1, //「～5,000万」
  FROM_50_TO_100 = 2, //「5000万～1億」
  FROM_100_TO_1000 = 3, //「1億～10億」
  ABOVE_1000 = 4, //「10億以上」
}

export const enum EmployeeSize {
  TO_50 = 1, //「～50名」
  FROM_51_TO_100 = 2, //「51～100名」
  FROM_101_TO_300 = 3, //「101名～300名」
  ABOVE_300 = 4, //「300名以上」
}

export const enum ApproveStatus {
  NOT_YET_APPROVED = 1,
  IS_APPROVED = 2,
  NOT_APPROVED = 3,
}

export class ComAddress {
  address: string;

  subAddress: string;

  zipCode: string;

  fullAddress() {
    return `〒${this.zipCode.slice(0, 3)}-${this.zipCode.slice(3, 7)}　${this.address}${this.subAddress}`;
  }
}

export class CompanyProfile {
  comEmployeeSize: EmployeeSize;

  comIndustryType: IndustryType;

  comProfitType: ProfitType;

  comWebsite: string;

  compContractPlan: ContractPlanType;

  compName: string;

  compRepFirstName: string;

  compRepFullName: string;

  compRepLastName: string;

  approvedStatus: ApproveStatus;

  isEndContract: boolean;

  fullName: string;

  remark: string;

  dateApproved: string;

  dateApprovedFormat() {
    return formatDate(this.dateApproved);
  }

  userApproved: string;

  @Type(() => ComAddress)
  comAddress: ComAddress;
}

export class AccountDto {
  key: string;

  email: string;

  firstName: string;

  lastName: string;

  fullName: string;

  phoneNumber1: string;

  phoneNumber2: string;

  phoneNumber3: string;

  @Expose({ name: 'contractPhone' })
  contactPhone: string;

  position: string;

  department: string;

  role: Role;

  isActive: boolean;

  @Type(() => CompanyProfile)
  companyProfile: CompanyProfile;

  isChecked = false;
}

export class AccountResDto {
  @Expose()
  @Type(() => AccountDto)
  items: AccountDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;

  totalNotApprove: number;
}

export class AccountsResDto {
  @Expose()
  @Type(() => AccountResDto)
  items: AccountResDto[] = [];

  @Type(() => PaginationRes)
  pagination: PaginationRes;
}

export class PrefectureDto {
  key: string;

  fullPrefNm: string;

  shortPrefNm: string;

  hiraganaNm: string;

  romajiNm: string;

  dispNo: string;

  userCreated: string;

  dateCreated: string;

  userUpdated: string;

  dateUpdated: string;

  isDeleted: boolean;
}

export class PrefectureDataDto {
  @Type(() => PrefectureDto)
  data: PrefectureDto[] = [];
}

export class CompanyDetailResDto {
  key: string;

  email: string;

  fullName: string;

  position: string;

  department: string;

  contractPhone: string;

  @Type(() => CompanyProfile)
  companyProfile: CompanyProfile;
}

export class CompanyProfileInfo {
  compContractPlan: ContractPlanType;
  compName: string;
}

export class CompanyBasicInfo {
  email?: string;

  fullName?: string;

  contractPhone?: string;

  unpaidFlg: boolean;

  @Type(() => CompanyProfileInfo)
  companyProfile?: CompanyProfileInfo;
}
