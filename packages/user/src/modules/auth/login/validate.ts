import * as Yup from 'yup';
import { translate } from 'common/utilities/helper';
import { isEmailHalfSize } from 'common/utilities/validate';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(translate('email_require'))
    .email(translate('email_invalid'))
    .max(50, 'メールアドレスは半角英数字記号、50文字以内で入力してください。')
    .test('is-email-halfSize', 'メールアドレスは半角英数字記号、50文字以内で入力してください。', isEmailHalfSize),
  password: Yup.string().required(translate('password_require')),
});
