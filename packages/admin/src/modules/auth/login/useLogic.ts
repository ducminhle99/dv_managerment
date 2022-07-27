import { login } from 'common/services/api';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from 'store/actions';
import { useApiCaller } from 'common/hooks';
import { LoginReqDto } from 'common/dto/request';
import { LoginResDto } from 'common/dto/response';
import { FormValue } from './components/login';
import { errorCode } from 'common/constants/apiErrorCode';

export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const dispatch = useDispatch();

  const { request, loading } = useApiCaller<LoginResDto>({ apiCaller: login, resDto: LoginResDto, errorCodeObject: errorCode.login });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new LoginReqDto();
    dataBody.email = data.email;
    dataBody.pwd = data.password;
    dataBody.isAdmin = true;

    const result = await request(dataBody);
    if (result.data?.token) {
      dispatch(
        setAuthenticated({
          token: result.data.token,
          remember: data.rememberMe,
          role: result.data.role,
          key: result.data.key,
          fullName: result.data.fullName,
          email: result.data.email,
          refreshToken: result.data.refreshToken,
        })
      );

      return;
    }
    setMessageError(result?.message || '');
  };

  return { handleSubmit, messageError, setMessageError, loading };
}
