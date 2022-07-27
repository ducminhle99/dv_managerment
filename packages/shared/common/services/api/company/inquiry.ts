import { InquiryReq } from '../../../dto/request';
import client from '../client';

export const createInquiry = (data: InquiryReq) => {
  return client.post(`/inquiry`, data);
};
