import { InvoiceFilterReqDto } from 'common/dto/request';
import { InvoiceReqDto } from '../../../dto/request/invoice';
import client from '../client';

export const getListInvoice = (paramObj: InvoiceFilterReqDto) => {
  return client.get('/invoice/list', { params: paramObj });
};

export const getInvoiceDetail = (id: string) => {
  return client.get(`/invoice/detail/${id}`);
};

export const deleteInvoiceById = (id: string) => {
  return client.delete(`/invoice/delete/${id}`);
};

export const downloadInvoice = (id: string) => {
  return client.get(`/invoice/download/${id}`);
};

export const createInvoice = (data: InvoiceReqDto) => {
  return client.post('/invoice/add', data);
};

export const updateInvoice = (data: InvoiceReqDto) => {
  return client.put('/invoice/update', data);
};

export const getDebitCompany = () => {
  return client.get('/invoice/debit-companies');
};
