import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid').max(50),
  password: Yup.string().required('Password is required'),
});
