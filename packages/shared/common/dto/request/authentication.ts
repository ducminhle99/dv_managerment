export class LoginReqDto {
  email: string;
  pwd: string;
  isAdmin: boolean;
}
export class ResetPasswordReqDto {
  email: string;
  isAdmin: boolean;
}

export class InputPasswordReqDto {
  userKey: string;
  newPassword: string;
  token: string;
}

export class CheckTokenReqDto {
  userKey: string;
  token: string;
}
