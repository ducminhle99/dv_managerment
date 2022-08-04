import { errorCode } from 'common/constants/apiErrorCode';
import { BaseDTO } from 'common/dto/base';
import { useApiCaller } from 'common/hooks';
import { acceptReport } from 'common/services/api';
import { useState } from 'react';

export default function useAccept() {
  const [messageError, setMessageError] = useState('');

  const { request, loading } = useApiCaller<BaseDTO>({ apiCaller: acceptReport, resDto: BaseDTO, errorCodeObject: errorCode.report });

  const handleAccept = async (id: number) => {
    const result = await request(id);
    if (result.statusCode === 200) {
      return;
    }
    setMessageError('cannot accept this report');
  };

  return { handleAccept, messageError, setMessageError, loading };
}
