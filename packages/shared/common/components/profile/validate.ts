import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please fill in this field'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please fill in this field'),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Please fill in this field'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, 'Too Short!').max(12, 'Too Long!'),
});
export default validationSchema;
