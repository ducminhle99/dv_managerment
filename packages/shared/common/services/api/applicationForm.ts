import { ApplyFormReqDto } from '../../dto/request';
import client from './client';

export const getForm = (id: string) => {
  return client.get(`app-form/update/${id}`);
};

export const downloadForm = (id: string) => {
  return client.get(`app-form/pdf_v2/${id}`, { responseType: 'blob' });
};

export const saveForm = (data: any) => {
  return client.put(`app-form/update_v2`, data);
};

export const getListForm = (paramObj: ApplyFormReqDto) => {
  return client.get('/app-form/list', { params: paramObj });
};
