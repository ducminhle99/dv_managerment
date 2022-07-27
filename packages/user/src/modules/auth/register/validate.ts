import * as Yup from 'yup';
import { validateNumber, isFullSize, isEmailHalfSize } from 'common/utilities/validate';

export const validationSchema = Yup.object().shape({
  contractType: Yup.string().required('ご契約プランは必須項目です。'),
  companyName: Yup.string().required('企業名は必須項目です。').max(30, '会社名は30文字以内で入力してください。'),
  postCode: Yup.string()
    .required('郵便番号は必須項目です。')
    .test('is-number', '郵便番号を正しく入力してください', validateNumber)
    .length(7, '郵便番号を正しく入力してください'),
  address: Yup.string().required('住所を正しく入力してください。'),
  subAddress: Yup.string().required('番地以降は必須項目です。').max(50, '番地以降は50文字以内で入力してください。'),
  phone1: Yup.string()
    .required('連絡先番号を正しく入力してください。')
    .min(2, ' 連絡先番号を正しく入力してください。')
    .max(3, ' 連絡先番号を正しく入力してください。')
    .test('is-number', ' 連絡先番号を正しく入力してください。', validateNumber),
  phone2: Yup.string()
    .required('連絡先番号を正しく入力してください。')
    .length(4, ' 連絡先番号を正しく入力してください。')
    .test('is-number', ' 連絡先番号を正しく入力してください。', validateNumber),
  phone3: Yup.string()
    .required('連絡先番号を正しく入力してください。')
    .length(4, ' 連絡先番号を正しく入力してください。')
    .test('is-number', ' 連絡先番号を正しく入力してください。', validateNumber),
  position: Yup.string().max(30, '役職は30文字以内で入力してください。'),
  email: Yup.string()
    .required('メールアドレスは必須項目です。')
    .email('メールアドレを正しく入力してください。')
    .max(50, 'メールアドレを正しく入力してください。')
    .test('is-email-halfSize', 'メールアドレを正しく入力してください。', isEmailHalfSize),
  firstName: Yup.string()
    .required('氏名 - 性は必須項目です。')
    .max(20, '氏名 - 性は全角、20文字以内で入力してください。')
    .test('is-fullSize', '氏名 - 性は全角、20文字以内で入力してください。', isFullSize),
  lastName: Yup.string()
    .required('氏名 - 名は必須項目です。')
    .max(20, '氏名 - 名は全角、20文字以内で入力してください。')
    .test('is-fullSize', '氏名 - 名は全角、20文字以内で入力してください。', isFullSize),
});
