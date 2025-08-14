export interface User {
  /**
   * 用户ID，唯一标识
   */
  userId?: number;

  /**
   * 用户名
   */
  userName?: string;

  /**
   * 邮箱地址
   */
  email?: string;

  /**
   * 密码，存储时需加密
   */
  password?: string;

  /**
   * 创建人ID
   */
  createId?: number | null;

  /**
   * 创建时间
   */
  createTime?: Date | null;

  /**
   * 更新人ID
   */
  updateId?: number | null;

  /**
   * 更新时间
   */
  updateTime?: Date | null;
}
