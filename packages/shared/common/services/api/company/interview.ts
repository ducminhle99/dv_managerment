import client from '../client';
import { InterviewCreateReqDto, InterviewUpdateReqDto, SubscriberStatusReqDto } from 'common/dto/request';

export const getInterviews = (paramObj: any) => {
  return client.get(`/interview/list`, { params: paramObj });
};

export const createInterview = (data: InterviewCreateReqDto) => {
  return client.post(`/interview/create`, data);
};

export const getInterview = (id: string) => {
  return client.get(`/interview/detail/${id}`);
};

export const editInterview = (data: InterviewUpdateReqDto) => {
  return client.put(`/interview/update/${data.key}`, data);
};

export const updateMemoInterview = ({ key, memo }: { key: string; memo: string }) => {
  return client.put(`/interview/updateMemo/${key}`, { memo });
};

export const updateContentInterview = ({ key, content }: { key: string; content: string }) => {
  return client.put(`/interview/updateContent/${key}`, { content });
};

export const getInterviewHistory = (params: any) => {
  return client.get('/interview/histories', { params });
};

export const deleteInterviewById = (id: string) => {
  return client.delete(`/interview/delete/${id}`);
};

export const downloadInterviewRecord = (id: string) => {
  return client.get(`/interview/getRecordFile/${id}`);
};

export const updateSubscribeStatus = (data: SubscriberStatusReqDto) => {
  return client.put('/interview/updateSubcribeStatus', data);
};
