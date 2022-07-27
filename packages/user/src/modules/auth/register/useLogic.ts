import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormCompanyRegister } from './components';
import { companyRegister } from 'common/services/api';
import { useApiCaller } from 'common/hooks';
import { CompanyRegisterReqDto } from 'common/dto/request';
import { errorCode } from 'common/constants/apiErrorCode';

export enum ScreenType {
  FORM = 'FORM',
  CONFIRM = 'CONFIRM',
}

export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [screen, setScreen] = useState<ScreenType>(ScreenType.FORM);

  const router = useRouter();
  const { request, loading } = useApiCaller<any>({
    apiCaller: companyRegister,
    errorCodeObject: errorCode.companyRegister,
    messageSuccess: '企業アカウントが作成されました。',
  });

  const handleSubmit = async (data: FormCompanyRegister) => {
    const dataBody = new CompanyRegisterReqDto();

    dataBody.companyProfile = {
      compContractPlan: +data.contractType,
      compName: data.companyName,
      comAddress: {
        zipCode: data.postCode,
        address: data.address || '',
        subAddress: data.subAddress,
      },
    };
    dataBody.phoneNumber1 = data.phone1;
    dataBody.phoneNumber2 = data.phone2;
    dataBody.phoneNumber3 = data.phone3;
    dataBody.position = data.position;
    dataBody.email = data.email;
    dataBody.firstName = data.firstName;
    dataBody.lastName = data.lastName;
    dataBody.captchaToken = data.captchaToken;

    const result = await request(dataBody);

    if (result.statusCode === 200) {
      router.replace('/login');
      return;
    }

    if (result.message) {
      setMessageError(result.message);
    }

    return;
  };

  return { handleSubmit, messageError, setMessageError, loading, screen, setScreen };
}
