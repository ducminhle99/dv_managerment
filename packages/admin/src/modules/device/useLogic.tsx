import { DeviceCreateDto } from 'common/dto/request';
import { useApiCaller } from 'common/hooks';
import { createDevice, getDevice } from 'common/services/api';
import { useEffect, useState } from 'react';
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
const dataDeviceItem = {
  image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  name: 'Mouse aly',
  quantity: 20,
  brandID: 1,
  categoryID: 1,
  description: 'alo alo',
};
function useCreateDevice() {
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
function useEditDevice(id: number) {
  const [messageError, setMessageError] = useState('');
  const [data, setData] = useState<DeviceCreateDto>(dataDeviceItem);

  const { request, loading } = useApiCaller<DeviceCreateDto>({
    apiCaller: getDevice,
    messageSuccess: 'successfully!',
  });

  const fetchData = async (id: number) => {
    const result = await request(id);
    if (result.data) {
      setData(result.data);
      return;
    }
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
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

    setMessageError('Edit devide failed!');
  };
  return { data, loading, handleSubmit, brandData, categoryData, messageError };
}

export { useCreateDevice, useEditDevice };
