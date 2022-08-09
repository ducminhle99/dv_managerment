import { useApiCaller } from 'common/hooks';
import { createDevice } from 'common/services/api';
import { DeviceCreateDto } from 'common/dto/request';
import { useState } from 'react';
import { FormValues } from './components/createDevice';
const brandData = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Asus' },
  { id: 3, name: 'LG' },
];
const categoryData = [
  { id: 1, name: 'Screen' },
  { id: 2, name: 'Mouse' },
  { id: 3, name: 'Keyboard' },
];
export default function useLogic() {
  const [messageError, setMessageError] = useState('');
  const { request, loading } = useApiCaller({
    apiCaller: createDevice,
    messageSuccess: 'Create successfully',
  });

  const handleSubmit = async (data: FormValues) => {
    const dataBody = new DeviceCreateDto();
    dataBody.image = data.image;
    dataBody.name = data.name;
    dataBody.quantity = data.quantity;
    dataBody.brandID = data.brandID;
    dataBody.categoryID = data.categoryID;
    dataBody.description = data.description;

    const result = await request(dataBody);

    if (result?.statusCode === 200) {
      return;
    }

    setMessageError('Create devide failed!');
  };

  return { handleSubmit, messageError, setMessageError, brandData, categoryData, loading };
}
