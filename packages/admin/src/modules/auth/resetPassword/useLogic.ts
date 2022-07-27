import { resetPassword } from 'common/services/api';
import { useState } from 'react';
import { useApiCaller } from 'common/hooks';
import { ResetPasswordReqDto } from 'common/dto/request';
import { FormValue } from './components';

export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  const { request, loading } = useApiCaller({
    apiCaller: resetPassword,
    messageSuccess: 'パスワードリセット用のメールを送信いたしました。',
  });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new ResetPasswordReqDto();
    dataBody.email = data.email;
    dataBody.isAdmin = true;

    const result = await request(dataBody);

    if (result.statusCode === 200) {
      setBtnStatus(true);
      return;
    }

    setMessageError('入力いただいたメールアドレスの会員情報が見つかりませんでした。');
  };

  return { handleSubmit, messageError, setMessageError, loading, btnStatus };
}
