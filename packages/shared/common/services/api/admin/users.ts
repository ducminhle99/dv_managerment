import client from '../client';
import { convertObjectToQueryParams } from 'common/utilities/helper';
import { UpdateUserReqDto, UserCreationReqDto, UserProfileUpdateDto } from 'common/dto/request';

export const getUserList = (paramObj: any) => {
  const paramStr = convertObjectToQueryParams(paramObj);

  return client.get(`/user/list?${paramStr}`);
};

export const createUser = (data: UserCreationReqDto) => {
  return client.post(`/user/register`, data);
};

export const getUser = (id: string) => {
  return client.get(`/user/${id}`);
};

export const updateUser = (user: UpdateUserReqDto) => {
  return client.put('/user/update', user);
};

export const deleteUser = (id: string) => {
  return client.delete(`/user/${id}`);
};

export const RemoveUser = (userId: string) => {
  return client.delete(`/user/${userId}`);
};

export const getUserProfile = () => {
  return client.get('/user/profile');
};

export const updateUserProfile = (data: UserProfileUpdateDto) => {
  return client.put('/user/profile', data);
};
