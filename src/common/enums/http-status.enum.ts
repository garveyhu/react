export const HttpStatus = {
  SUCCESS: {
    code: 200,
    message: '请求成功',
  },
  BAD_REQUEST: {
    code: 400,
    message: '请求错误',
  },
  UNAUTHORIZED: {
    code: 401,
    message: '未授权',
  },
  FORBIDDEN: {
    code: 403,
    message: '禁止访问',
  },
  NOT_FOUND: {
    code: 404,
    message: '未找到',
  },
  REQUEST_TIMEOUT: {
    code: 408,
    message: '请求超时',
  },
  SERVER_ERROR: {
    code: 500,
    message: '服务器错误',
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: '服务不可用',
  },
} as const;
