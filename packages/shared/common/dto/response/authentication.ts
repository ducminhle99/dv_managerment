import { Role } from 'common/types/role';

export class LoginResDto {
  token: string;
  role: Role;
  fullName: string;
  email: string;
  key: string;
  refreshToken: string;
}
