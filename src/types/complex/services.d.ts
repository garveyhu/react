export interface ResultVO<T = any> {
  success: boolean;
  code: number;
  msg: string;
  total?: number;
  data: T;
}

export interface PageParams {
  pageNum: number;
  pageSize: number;
}
