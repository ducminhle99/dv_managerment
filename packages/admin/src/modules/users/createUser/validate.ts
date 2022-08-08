import * as Yup from 'yup';

const REQUIRE = 'This field cannot be left blank';
const EMAIL_INVALID = 'Please enter a valid email address';
const EMAIL_FORMAT = 'Please enter your email address within 50 characters.';
const PHONE_FORMAT = 'A 10-digit phone number including the first 0';
const phoneRegExp = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
const nameRegExp = /[a-zỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ']/;
const NAME_FORMAT = 'name cannot contain special characters and numbers';
export const validationSchema = Yup.object().shape({
  email: Yup.string().required(REQUIRE).email(EMAIL_INVALID).trim(REQUIRE).max(50, EMAIL_FORMAT),
  phoneNumber: Yup.string().required(REQUIRE).matches(phoneRegExp, PHONE_FORMAT),
  name: Yup.string().required(REQUIRE).matches(nameRegExp, NAME_FORMAT).max(50),
  password: Yup.string(),
  dateOfBirth: Yup.string().required(REQUIRE),
  role: Yup.string().required(REQUIRE),
  position: Yup.string().required(REQUIRE),
});
