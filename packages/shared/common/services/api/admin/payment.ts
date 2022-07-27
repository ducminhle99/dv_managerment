import { PaginationReq, PaymentFilterReqDto } from '../../../dto/request';
import client from '../client';

export const getListPayment = (paramObj: PaymentFilterReqDto) => {
  return client.get('/payment/payment-list', { params: paramObj });
};

export const getPaidList = (data: { id: string; paramObj: PaginationReq }) => {
  return client.get(`/payment/${data.id}/paid-list`, { params: data.paramObj });
};

export const getUnpaidList = (paramObj: PaginationReq) => {
  return client.get('/payment/unpaid-list', { params: paramObj });
};

export const createPayment = (data: any) => {
  return client.post(`/payment/add`, data);
};

export const getDebitList = () => {
  return client.get('/payment/debit-list');
};
