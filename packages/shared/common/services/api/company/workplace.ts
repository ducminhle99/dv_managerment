import { WorkplaceCreateReqDto, WorkplaceListReqDto, WorkplaceUpdateReqDto } from 'common/dto/request/workplace';
import client from '../client';

export const getWorkplaces = (paramObj: WorkplaceListReqDto) => {
  return client.get(`/work-place/list`, { params: paramObj });
};

export const getWorkplaceById = (id: string) => {
  return client.get(`/work-place/detail/${id}`);
};

export const workPlaceCreate = (data: WorkplaceCreateReqDto) => {
  return client.post(`/work-place/register`, data);
};

export const workplaceUpdate = (data: WorkplaceUpdateReqDto) => {
  return client.put('/work-place/update', data);
};

export const deleteWorkplace = (workplaceId: string) => {
  return client.delete(`/work-place/${workplaceId}`);
};
