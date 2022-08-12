import { useApiCaller } from 'common/hooks';
import { getProfile } from 'common/services/api';
import { useState } from 'react';

const userProfiledata = {
  avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  firstName: 'Van',
  lastName: 'Nguyen',
  email: 'van@gmail.com',
  address: 'Hoi An',
  phoneNumber: 12345678910,
  userCode: '3333333',
  dayOfBirth: '2022/07/14',
  position: 'Dev',
};
export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const { loading } = useApiCaller({
    apiCaller: getProfile,
    messageSuccess: 'We have went you data profile',
  });
  const handleSubmit = async () => {
    setMessageError('Your profile infomation not found!');
  };

  return { handleSubmit, messageError, setMessageError, userProfiledata, loading };
}
