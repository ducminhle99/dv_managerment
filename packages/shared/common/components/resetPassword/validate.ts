import * as Yup from 'yup';

const EMAIL_REQUIRE = 'Please enter your e-mail address';
const EMAIL_INVALID = 'Please enter a valid email address';
const EMAIL_FORMAT = 'Please enter your email address in half-width alphanumeric characters and within 50 characters.';
export const validationSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRE).trim(EMAIL_REQUIRE).max(50, EMAIL_FORMAT),
});
