import { isEmailHalfSize } from 'common/utilities/validate';
import * as Yup from 'yup';

const EMAIL_REQUIRE = 'メールアドレスを入力してください';
const EMAIL_INVALID = '正しいメールアドレスを入力してください';
const EMAIL_FORMAT = 'メールアドレスは半角英数字記号、50文字以内で入力してください。';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(EMAIL_INVALID)
    .required(EMAIL_REQUIRE)
    .trim(EMAIL_REQUIRE)
    .max(50, EMAIL_FORMAT)
    .test('is-email-halfSize', EMAIL_FORMAT, isEmailHalfSize),
});
