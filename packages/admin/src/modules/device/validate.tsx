import * as Yup from 'yup';
const DeviceSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please fill in this field'),
  quantity: Yup.number().typeError('you must specify a number').min(0, 'Min value 0.').max(100, 'Max value 100.'),
  description: Yup.string().min(10, 'Too Short!').max(1000, 'Too Long!').required('Please fill in this field'),
});
export default DeviceSchema;
