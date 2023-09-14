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
