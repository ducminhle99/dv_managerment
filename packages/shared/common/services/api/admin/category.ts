import { CategoryCreateReqDto } from 'common/dto/request';
import client from '../client';

export const createCategory = (data: CategoryCreateReqDto) => {
  return client.post(`/category`, data);
};
