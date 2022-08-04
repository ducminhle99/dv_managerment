import * as Yup from 'yup';

const PASSWORD_REQUIRE = 'Please enter your password';
const PASSWORD_INVALID = 'The password must be between 6 and 30 characters, including lowercase and alphanumericals.';
const PASSWORD_NOT_MATCH = 'Passwords do not match';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required(PASSWORD_REQUIRE)
    .min(6, PASSWORD_INVALID)
    .max(30, PASSWORD_INVALID)
    .matches(/^(?=.*[a-zA-Z0-9])(?=.{6,30})/, PASSWORD_INVALID),
  newPassword: Yup.string()
    .required(PASSWORD_REQUIRE)
    .min(6, PASSWORD_INVALID)
    .max(30, PASSWORD_INVALID)
    .matches(/^(?=.*[a-zA-Z0-9])(?=.{6,30})/, PASSWORD_INVALID),
  passwordConfirmation: Yup.string()
    .required(PASSWORD_REQUIRE)
    .oneOf([Yup.ref('newPassword'), null], PASSWORD_NOT_MATCH),
});
