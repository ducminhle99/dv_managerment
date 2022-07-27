export class ResTemplate<T> {
  statusCode: number;
  message?: string;
  data?: T;
  success: boolean;
}

export class PaginationRes {
  page: number;
  perPage: number;
  total: number;
}
