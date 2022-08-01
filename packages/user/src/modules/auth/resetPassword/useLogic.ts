import { resetPassword } from 'common/services/api';
import { useState } from 'react';
import { useApiCaller } from 'common/hooks';
import { ResetPasswordReqDto } from 'common/dto/request';
import { FormValue } from 'common/components/resetPassword';

export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  const { request, loading } = useApiCaller({
    apiCaller: resetPassword,
    messageSuccess: 'We have sent you an email to reset your password.',
  });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new ResetPasswordReqDto();
    dataBody.email = data.email;
    dataBody.isAdmin = false;

    const result = await request(dataBody);

    if (result.statusCode === 200) {
      setBtnStatus(true);
      return;
    }

    setMessageError('The membership information for the email address you entered could not be found.');
  };

  return { handleSubmit, messageError, setMessageError, loading, btnStatus };
}
