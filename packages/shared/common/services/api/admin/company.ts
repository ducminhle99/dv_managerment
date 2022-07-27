import { CompanyCreateReqDto, CompanyUpdateReqDto, CompanyApproveReqDto } from 'common/dto/request';
import client from '../client';

export const updateCompany = (data: CompanyUpdateReqDto) => {
  return client.put(`/company/update`, data);
};

export const getCompany = (id: string) => {
  return client.get(`/company/${id}/detail`);
};

export const createCompany = (data: CompanyCreateReqDto) => {
  return client.post(`/company/register`, data);
};

export const getAccountList = (paramObj: any) => {
  return client.get(`/company/list`, { params: paramObj });
};

export const getPrefectures = () => {
  return client.get('/company/get-prefectures');
};

export const uploadFile = (data: any) => {
  return client.post('/company/file', { data: data });
};

export const deleteCompany = (id: string) => {
  return client.delete(`/company/${id}`);
};

export const approveCompany = (data: CompanyApproveReqDto) => {
  return client.put('/company/approve', data);
};

export const getCompanyInfo = (id: string) => {
  return client.get(`/company/${id}/basic-info`);
};
