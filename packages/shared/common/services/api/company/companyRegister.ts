import { CompanyRegisterReqDto } from 'common/dto/request';
import client from '../client';
import axios from 'axios';

export const companyRegister = (data: CompanyRegisterReqDto) => {
  return client.post(`/company/register-company`, data);
};

export const getAddress = (postCode: string) => {
  return axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`);
};
