import { LoginReqDto, ResetPasswordReqDto, InputPasswordReqDto, ChangePasswordReqDto, CheckTokenReqDto } from 'common/dto/request';
import client from './client';

export const login = (data: LoginReqDto) => {
  return client.post('/auth', data);
};

export const resetPassword = (data: ResetPasswordReqDto) => {
  return client.post('/user/verify-email', data);
};

export const inputPassword = (data: InputPasswordReqDto) => {
  return client.post('/user/reset-password', data);
};

export const changePassword = (data: ChangePasswordReqDto) => {
  return client.post('/user/change-password', data);
};

export const checkToken = (data: CheckTokenReqDto) => {
  return client.post('/user/check-token', data);
};

export const getNewToken = async (data: any) => {
  return client.post('/auth/refresh-token', data);
};

export const getProfile = async () => {
  return client.get('/user/profile');
};
