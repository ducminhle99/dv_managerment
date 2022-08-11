import client from '../client';

export const getAllReport = () => {
  return client.get('/reports');
};

export const getReport = (id: number) => {
  return client.get(`/reports/${id}`);
};

export const acceptReport = (id: number) => {
  return client.put(`/reports/${id}`);
};
