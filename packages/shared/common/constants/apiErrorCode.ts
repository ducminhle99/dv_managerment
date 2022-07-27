export const errorCode = {
  expired_token: 'expired_token',
  does_not_exist: 'does_not_exist',
  is_deleted: 'is_deleted',
  is_processing: 'is_processing',
  is_deleted_company: 'is_deleted_company',
  is_deleted_work_place: 'is_deleted_work_place',
  is_deleted_resource: 'is_deleted_resource',
  is_deleted_document: 'is_deleted_document',
  is_not_allowed: 'is_not_allowed',
  createUser: {
    is_exist: 'このメールアドレスは既に使用されています。',
  } as any,
  resetPassword: {
    expired_token: 'パスワード変更リンクの有効期限は申請から24時間以内です。24時間を超えた場合は再度申請手続きをお願いいたします。',
    used_token: '既にパスワード変更がされているため無効となります。再度パスワード変更を行う場合、改めて変更申請の手続きを行ってください。',
  } as any,
  login: {
    login_fail: 'メールアドレスもしくはパスワードが正しくありません。',
    locked: 'ログイン試行回数が制限（5回）を超えました。しばらくしてから再度お試しください。',
  } as any,
  companyRegister: {
    is_exist: 'このメールアドレスは既に使用されています。',
  } as any,
  companyUpdate: {
    is_exist: 'このメールアドレスは既に使用されています。',
  } as any,
  workplaceRegister: {
    is_exist: 'この企業名は既に使用されています。',
  } as any,
  resourceEdit: {
    is_exist: 'この企業名は既に使用されています。',
  } as any,
  resourceRegister: {
    is_exist: 'この人材は既に使用されています。',
  } as any,
  createForm: {
    is_exist: 'is_exist',
  },
  createDocument: {
    is_exist: 'この企業名は既に使用されています。',
  } as any,
  createInterview: {
    invalid: '面談時間を正しく入力してください。',
  },
  editInterview: {
    invalid: '面談時間を正しく入力してください。',
  },
  calling: {
    min_value: '面談開始30分前からしか入りません。後でもう一度やり直してください。',
    invalid: '面談時間外のため、ルームに入ることができません。',
  },
  updateProfile: {
    is_not_current_password: '現在のパスワードが正しくありません。',
    is_exist: 'このメールアドレスは既に使用されています。',
  },
  payment: {
    is_paid: 'この支払い履歴は既に使用されています。',
  } as any,
  invoiceUpdate: {
    is_exist: 'この請求書は既に使用されています。',
  } as any,
  invoice: {
    is_exist: 'この請求書は既に使用されています。',
  },
  adminApproveCompany: {
    invalid: 'この企業アカウントは既に変更されているためもう使用できません。',
  } as any,
};

export enum ErrorCodeCommon {
  dataDelete = 'is_deleted',
  companyDelete = 'is_deleted_company',
  workplaceDelete = 'is_deleted_work_place',
  resourceDelete = 'is_deleted_resource',
  documentDelete = 'is_deleted_document',
  forbidden = 'forbidden',
  authorFailed = 'author_failed',
  serverError = 'bad_request',
  tokenExpired = 'expired_token',
  doesNotExist = 'does_not_exist',
  interviewProcessing = 'is_processing',
}

export const errorMSGCommon: any = {
  is_deleted: {
    user: 'このユーザーは既に削除されているためもう操作できません。',
    workPlace: 'この所属先は既に削除されているためもう使用できません。',
    resource: 'この人材は既に削除されているためもう使用できません。',
    appForm: 'この申請書は既に削除されているためもう使用できません。',
    document: 'この書類は既に削除されているためもう使用できません。',
    interview: 'この面談は既に削除されているためもう使用できません。',
    invoice: 'この請求書は既に削除されているためもう使用できません。',
    company: 'この支払い履歴は既に削除されているためもう使用できません。',
    job: 'この求人は既に削除されているためもう使用できません。',
  },
  does_not_exist: {
    workPlace: 'この所属先は既に削除されているためもう使用できません。',
    resource: 'この人材は既に削除されているためもう使用できません。',
    document: 'この書類は既に削除されているためもう使用できません。',
    interview: 'この面談は既に削除されているためもう使用できません。',
    invoice: 'この請求書は既に削除されているためもう使用できません。',
    company: 'この決済情報詳細は既に削除されているためもう使用できません。',
    appForm: 'この申請書詳細は既に削除されているためもう使用できません。',
    job: 'この求人は既に削除されているためもう使用できません。',
  },
  is_processing: {
    interview: '面談実施期間内のため、削除または変更することができません。',
  },
};
