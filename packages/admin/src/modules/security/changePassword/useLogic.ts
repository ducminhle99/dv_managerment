import { changePassword } from 'common/services/api';
import { useApiCaller } from 'common/hooks';
import { ChangePasswordReqDto } from 'common/dto/request';
import { FormValue } from 'common/components/changePassword';
import { useState } from 'react';
import { useLogout } from 'common/hooks/useLogout';
export default function useLogic() {
  const { handleLogout } = useLogout();
  const [messageError, setMessageError] = useState('');

  const { request, loading } = useApiCaller({
    apiCaller: changePassword,
    messageSuccess: 'Your password has been changed.',
  });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new ChangePasswordReqDto();
    dataBody.password = data.password;
    dataBody.newPassword = data.newPassword;

    const result = await request(dataBody);

    if (result?.statusCode === 200) {
      handleLogout();
    }

    setMessageError('Password change failed');
  };

  return { handleSubmit, messageError, setMessageError, loading };
}
