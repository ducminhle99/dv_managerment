import { TokenReqDto } from 'common/dto/request';

import client from './client';

export const getCandidateCallingToken = (data: TokenReqDto) => {
  return client.post('/interview/candidateJoinRoom', data);
};

export const getCompanyCallingToken = (data: TokenReqDto) => {
  return client.post('/interview/companyJoinRoom', data);
};

export const getDetailInterview = (data: TokenReqDto) => {
  return client.post('/interview/detailByInterviewToken', data);
};

export const endCallByCompany = (data: TokenReqDto) => {
  return client.post('/interview/endRoom', data);
};

export const endCallByCandidate = (data: TokenReqDto) => {
  return client.post('/interview/endRoomByCandidate', data);
};

export const getDetailInterviewByCompany = (data: TokenReqDto) => {
  return client.post('/interview/detailForCompanyByInterviewToken', data);
};
