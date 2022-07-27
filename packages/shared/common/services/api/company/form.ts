import { FormDocumentReqDto } from '../../../dto/request';
import client from '../client';

export const getTemplateFormInfos = () => {
  return client.get(`app-form-template/list-template`);
};

export const getTemplateForm = (id: string) => {
  return client.get(`app-form/create/${id}`);
};

export const createForm = (data: any) => {
  return client.post(`app-form/new`, data);
};

export const editForm = (data: any) => {
  return client.put(`app-form/update`, data);
};

export const getFormById = (id: string) => {
  return client.get(`app-form/detail/${id}`);
};

export const deleteFormById = (id: string) => {
  return client.delete(`app-form/${id}`);
};

export const downloadAppForm = (data: string[]) => {
  return client.post('app-form/download', data);
};

export const getAppFormAndDocumentList = (paramObj: FormDocumentReqDto) => {
  return client.get(`/app-form/appform-document-list`, { params: paramObj });
};

export const downloadAppFormAndDocument = (data: any) => {
  return client.post(`/app-form/download-appform-document`, data);
};
