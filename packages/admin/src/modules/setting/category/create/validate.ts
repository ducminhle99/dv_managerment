import * as Yup from 'yup';

const CATEGORY_REQUIRE = 'Please enter category name';
const CATEGORY_FORMAT = 'Please enter category name within 50 characters.';
export const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required(CATEGORY_REQUIRE).max(50, CATEGORY_FORMAT),
});
