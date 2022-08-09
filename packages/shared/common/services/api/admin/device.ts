import { DeviceCreateDto } from '../../../dto/request/device';
import client from '../client';

export const createDevice = (data: DeviceCreateDto) => {
  return client.post(`/devices/createDevice`, data);
};
