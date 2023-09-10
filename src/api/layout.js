import http from "@/utils/http";

/**
 * 获取全部分类
 * @return {*}
 */
export const getCategoryAPI = () => {
  return http({
    url: '/home/category/head'
  })
}
