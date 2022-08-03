import { createBrand } from 'common/services/api';
import { useState } from 'react';
import { useApiCaller } from 'common/hooks';
import { BrandCreateReqDto } from 'common/dto/request';
import { FormValue } from './components';

export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  const { request, loading } = useApiCaller({
    apiCaller: createBrand,
    messageSuccess: 'successfully added new',
  });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new BrandCreateReqDto();
    dataBody.brandName = data.brandName;

    const result = await request(dataBody);

    if (result.statusCode === 200) {
      setBtnStatus(true);
      return;
    }

    setMessageError('new add failed');
  };

  return { handleSubmit, messageError, setMessageError, loading, btnStatus };
}
