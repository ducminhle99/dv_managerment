import * as Yup from 'yup';

const BRAND_REQUIRE = 'Please enter brand name';
const BRAND_FORMAT = 'Please enter brand name within 50 characters.';
export const validationSchema = Yup.object().shape({
  brandName: Yup.string().required(BRAND_REQUIRE).max(50, BRAND_FORMAT),
});
