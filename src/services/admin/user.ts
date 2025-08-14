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
  insert: (saveDTO: UserSaveDTO): Promise<ResultVO<any>> => {
    return post('/sysUser/insert', saveDTO);
  },

  /**
   * 修改用户信息
   */
  update: (saveDTO: UserSaveDTO): Promise<ResultVO<any>> => {
    return post('/sysUser/update', saveDTO);
  },

  /**
   * 删除用户信息
   */
  delete: (queryDTO: UserQueryDTO): Promise<ResultVO<any>> => {
    return post('/sysUser/delete', queryDTO);
  },

  /**
   * 查询用户信息（根据id）
   */
  get: (queryDTO: UserQueryDTO): Promise<ResultVO<UserVO>> => {
    return post('/sysUser/get', queryDTO);
  },

  /**
   * 查询用户信息（分页）
   */
  page: (queryDTO: UserQueryDTO): Promise<ResultVO<UserVO[]>> => {
    return post('/sysUser/page', queryDTO);
  },
};

export default userService;
