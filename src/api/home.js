import http from "@/utils/http";

/**
 * 获取轮播图数据
 * @return {*}
 */
export const getBannerAPI = () => {
  return http({
    url:'home/banner'
  })
}

/**
 * 获取新鲜好物
 * @return {*}
 */
export const getNewAPI = () => {
  return http({
    url:'/home/new'
  })
}
