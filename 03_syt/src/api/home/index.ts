// 统一管理首页模块接口
import request from '@/utils/request'
// 通过枚举管理首页模块接口地址
enum API {
  // 图片地址
  CAT_URL = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_8Sxxd5y4D4661niiasXLpe7T0z3FgmHbiFLd1SBCkxuqmuDfByDHouj3o0PmFyM4',
}
// 获取医院数据
export const reqCat = () => request.get(API.CAT_URL)
