export enum InquiryCategory {
  OPERATION_METHOD = 1, //「操作方法に関するお問い合わせ」
  CONTRACT_FEE = 2, //「契約・料金に関するお問い合わせ」
  DEFECT = 3, //「不具合に関するお問い合わせ」
  OTHER = 99, //「その他」
}

export const inquiryCategoryDisplayLabel: { [key in InquiryCategory]: string } = {
  1: '操作方法に関するお問い合わせ',
  2: '契約・料金に関するお問い合わせ',
  3: '不具合に関するお問い合わせ',
  99: 'その他',
};
