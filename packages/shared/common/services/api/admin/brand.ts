import { BrandCreateReqDto } from 'common/dto/request';
import client from '../client';

export const createBrand = (data: BrandCreateReqDto) => {
  return client.post(`/brand/create`, data);
};
