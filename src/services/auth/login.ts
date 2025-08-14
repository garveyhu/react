import { post } from '@/services';
import type { LoginInfo } from '@/types/auth/login/login-info';
import type { ResultVO } from '@/types/complex/services';

/**
 * 登录服务
 */
export const loginService = {
  /**
   * 账号密码登录
   */
  login: (info: LoginInfo): Promise<ResultVO<any>> => {
    return post('/login', info);
  },

  /**
   * 退出登录
   */
  logout: (): Promise<ResultVO<any>> => {
    return post('/user/logout');
  },
};

export default loginService;
