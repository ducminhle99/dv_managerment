import client from '../client';
import { RecruitmentCreateReqDto, RecruitmentFilterReqDto, RecruitmentEditReqDto } from 'common/dto/request';

export const getRecruitments = (paramObj: RecruitmentFilterReqDto) => {
  return client.get(`/job/list`, { params: paramObj });
};

export const getRecruitment = (id: string) => {
  return client.get(`/job/detail/${id}`);
};

export const editRecruitment = (data: RecruitmentEditReqDto) => {
  return client.put(`/job/update`, data);
};

export const RecruitmentRegister = (data: RecruitmentCreateReqDto) => {
  return client.post(`/job/add`, data);
};

export const deleteRecruitmentById = (id: string) => {
  return client.delete(`/job/delete/${id}`);
};

export const downloadRecruitment = (id: string) => {
  return client.get(`/job/download/${id}`);
};
