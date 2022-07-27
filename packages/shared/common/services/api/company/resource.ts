import client from '../client';
import { ResourceEditReqDto, ResourceCreateReqDto, ResourceFilterReqDto } from 'common/dto/request';

export const getResources = (paramObj: ResourceFilterReqDto) => {
  return client.get(`/resource/list`, { params: paramObj });
};

export const getResourceById = (id: string) => {
  return client.get(`/resource/detail/${id}`);
};

export const deleteResource = (id: string) => {
  return client.delete(`/resource/${id}`);
};

export const getResource = (id: string) => {
  return client.get(`/resource/detail/${id}`);
};

export const editResource = (data: ResourceEditReqDto) => {
  return client.put(`/resource/update`, data);
};

export const getWorkplaceNames = () => {
  return client.get(`/work-place/list-name`);
};

export const resourceRegister = (data: ResourceCreateReqDto) => {
  return client.post(`/resource/register`, data);
};

export const deleteResourceById = (id: string) => {
  return client.delete(`/resource/${id}`);
};

export const getResourceTodo = () => {
  return client.get('/resource/to-do');
};
