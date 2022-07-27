import { getAddress } from 'common/services/api';
import { useApiCaller } from 'common/hooks';
import { useState } from 'react';

export function useGetAddress() {
  const [address, setAddress] = useState<string>('');
  const [prefecture, setPrefecture] = useState('');
  const { request: requestAddress, loading: loadingAddress } = useApiCaller<any>({
    apiCaller: getAddress,
  });

  const handleGetAddress = async (postCode: number, callBack?: (add: string, pref?: string) => {}) => {
    const result: any = await requestAddress(postCode);

    const addressObjRes = result?.results?.[0];
    let addressRes = '';
    let prefectureRes = '';

    if (addressObjRes) {
      addressRes = `${addressObjRes.address1}${addressObjRes.address2}${addressObjRes.address3}`;
      prefectureRes = addressObjRes.address1;
    }

    setPrefecture(prefectureRes);
    setAddress(addressRes);
    setPrefecture(addressObjRes?.address1);

    if (callBack) {
      callBack(addressRes, prefectureRes);
    }
  };

  return { address, loadingAddress, handleGetAddress, prefecture };
}
