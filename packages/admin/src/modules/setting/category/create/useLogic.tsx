import { createCategory } from 'common/services/api';
import { useState } from 'react';
import { useApiCaller } from 'common/hooks';
import { CategoryCreateReqDto } from 'common/dto/request';
import { FormValue } from './components';

export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  const { request, loading } = useApiCaller({
    apiCaller: createCategory,
    messageSuccess: 'successfully added new category',
  });

  const handleSubmit = async (data: FormValue) => {
    const dataBody = new CategoryCreateReqDto();
    dataBody.categoryName = data.categoryName;

    const result = await request(dataBody);

    if (result.statusCode === 200) {
      setBtnStatus(true);
      return;
    }

    setMessageError('add category failed');
  };

  return { handleSubmit, messageError, setMessageError, loading, btnStatus };
}
