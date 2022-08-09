import { DeviceCreateDto } from '../../../dto/request/device';
import client from '../client';

export const createDevice = (data: DeviceCreateDto) => {
  return client.post(`/devices/createDevice`, data);
};

export const getDevice = (id: number) => {
  return client.get(`/devices/${id}`);
};

export const acceptDevice = (id: number) => {
  return client.put(`/devices/${id}`);
};
