import { DocumentCreateReqDto, DocumentDownloadReqDto, DocumentMasterReqDto, DocumentUpdateReqDto } from 'common/dto/request';
import client from '../client';

export const createDocument = (data: DocumentCreateReqDto) => {
  return client.post(`/document/add`, data);
};

export const getDocumentMaster = (paramObj: DocumentMasterReqDto) => {
  return client.get(`/document/document-master`, { params: paramObj });
};

export const getDocumentById = (id: string) => {
  return client.get(`/document/${id}/detail`);
};

export const deleteDocumentById = (id: string) => {
  return client.delete(`/document/${id}`);
};

export const getDocuments = (paramObj: any) => {
  return client.get(`/document/list`, { params: paramObj });
};

export const downloadDocuments = (data: DocumentDownloadReqDto) => {
  return client.post(`/document/download`, data);
};

export const updateDocument = (data: DocumentUpdateReqDto) => {
  return client.post('/document/update', data);
};
