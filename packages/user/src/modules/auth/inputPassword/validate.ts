import * as Yup from 'yup';

const PASSWORD_REQUIRE = 'パスワードを入力してください';
const PASSWORD_INVALID = 'パスワードは大文字小文字英数字含む6文字以上30文字以下です。';
const PASSWORD_NOT_MATCH = 'パスワードが一致しません';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required(PASSWORD_REQUIRE)
    .min(6, PASSWORD_INVALID)
    .max(30, PASSWORD_INVALID)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,30}$/, PASSWORD_INVALID),
  passwordConfirmation: Yup.string()
    .required(PASSWORD_REQUIRE)
    .oneOf([Yup.ref('password'), null], PASSWORD_NOT_MATCH),
});
