import { post } from '@/services';
import type { UserQueryDTO, UserSaveDTO } from '@/types/admin/user/user.dto';
import type { UserVO } from '@/types/admin/user/user.vo';
import type { ResultVO } from '@/types/complex/services';

/**
 * 用户服务
 */
export const userService = {
  /**
   * 新增用户信息
   */
  insert: (user: UserSaveDTO): Promise<ResultVO<any>> => {
    return post('/user/insert', user);
  },

  /**
   * 修改用户信息
   */
  update: (user: UserSaveDTO): Promise<ResultVO<any>> => {
    return post('/user/update', user);
  },

  /**
   * 删除用户信息
   */
  delete: (requestVO: UserQueryDTO): Promise<ResultVO<any>> => {
    return post('/user/delete', requestVO);
  },

  /**
   * 查询用户信息（根据id）
   */
  get: (requestVO: UserQueryDTO): Promise<ResultVO<UserVO>> => {
    return post('/user/get', requestVO);
  },

  /**
   * 查询用户信息（分页）
   */
  page: (requestVO: UserQueryDTO): Promise<ResultVO<UserVO[]>> => {
    return post('/user/page', requestVO);
  },
};

export default userService;
