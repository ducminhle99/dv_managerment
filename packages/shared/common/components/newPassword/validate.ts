import * as Yup from 'yup';

const PASSWORD_REQUIRE = 'Please enter your password';
const PASSWORD_INVALID = 'The password must be between 6 and 30 characters, including uppercase and lowercase alphanumericals.';
const PASSWORD_NOT_MATCH = 'Passwords do not match';

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
