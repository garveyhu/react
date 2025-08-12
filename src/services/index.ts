import { message } from 'antd';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import {
  API_CONFIG,
  AUTH_CONFIG,
  ENV_CONFIG,
  ERROR_MESSAGES,
} from '@/common/constants/app.constants';
import { HttpStatus } from '@/common/enums/http-status.enum';
import type { ResultVO } from '@/types/complex/services';

const isPrd = process.env.NODE_ENV === 'production';
export const basicUrl = isPrd ? ENV_CONFIG.PRODUCTION_URL : ENV_CONFIG.DEVELOPMENT_URL;

const service = axios.create({
  baseURL: basicUrl,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': API_CONFIG.CONTENT_TYPE,
  },
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token =
      window.localStorage.getItem(AUTH_CONFIG.USER_TOKEN_KEY) ||
      window.sessionStorage.getItem(AUTH_CONFIG.USER_TOKEN_KEY);

    if (token) {
      config.headers = config.headers || {};
      config.headers[AUTH_CONFIG.AUTHORIZATION_HEADER] = `${AUTH_CONFIG.TOKEN_PREFIX} ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse<ResultVO>) => {
    const { code, msg, data } = response.data;
    if (code === HttpStatus.SUCCESS.code) return data;

    message.error(msg || ERROR_MESSAGES.REQUEST_FAILED);
    return Promise.reject(new Error(msg || ERROR_MESSAGES.REQUEST_FAILED));
  },
  error => {
    const status = error.response?.status;
    const statusEntry = status
      ? Object.values(HttpStatus).find(item => item.code === status)
      : null;

    message.error(statusEntry?.message || ERROR_MESSAGES.UNKNOWN_ERROR);
    return Promise.reject(error);
  },
);

export function get<T = any>(url: string, params?: any): Promise<T> {
  return request<T>({
    method: 'get',
    url,
    params,
  });
}

export function post<T = any>(url: string, data?: any): Promise<T> {
  return request<T>({
    method: 'post',
    url,
    data,
  });
}

export function request<T = any>(config: AxiosRequestConfig): Promise<T> {
  return service(config).then(res => res as T);
}

export default service;
