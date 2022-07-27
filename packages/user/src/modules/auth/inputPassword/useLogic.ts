import { inputPassword, checkToken } from 'common/services/api';
import { useApiCaller } from 'common/hooks';
import { InputPasswordReqDto, CheckTokenReqDto } from 'common/dto/request';
import { FormValue } from './components/index';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { errorCode } from 'common/constants/apiErrorCode';

export default function useLogic() {
  const router = useRouter();
  const [messageError, setMessageError] = useState('');
  const { token, key } = router.query;

  const { request: requestCheckToken } = useApiCaller({
    apiCaller: checkToken,
    messageFail: true,
    errorCodeObject: errorCode.resetPassword,
  });

  const { request, loading } = useApiCaller({
    apiCaller: inputPassword,
    messageSuccess: 'パスワードが変更完了いたしました。',
  });

  const checkRedirect = async () => {
    const dataBody = new CheckTokenReqDto();
    dataBody.userKey = router.query.key as string;
    dataBody.token = router.query.token as string;
    const result = await requestCheckToken(dataBody);
    if (result?.statusCode !== 200) {
      router.push('/reset-password');
    }
  };

  useEffect(() => {
    if (router.isReady) {
      checkRedirect();
    }
  }, [router.isReady]);

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new InputPasswordReqDto();
    dataBody.newPassword = data.password;
    dataBody.userKey = key as string;
    dataBody.token = token as string;

    const result = await request(dataBody);

    if (result?.statusCode === 200) {
      router.push('/login');
      return;
    }

    setMessageError(errorCode.resetPassword[`${result?.message}`]);
  };

  return { handleSubmit, messageError, setMessageError, loading };
}
