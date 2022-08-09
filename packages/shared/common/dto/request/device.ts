export class DeviceCreateDto {
  deviceId?: number;
  image: string | File;
  name: string;
  quantity: number;
  brandID: number;
  categoryID: number;
  description?: string;
}
