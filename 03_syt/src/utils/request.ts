/* 
  二次封装axios
    - 使用axios拦截器（请求、响应拦截器）
      - 请求拦截器：在请求头中携带公共参数token等
      - 响应拦截器：简化服务器返回的数据，处理http网络错误等
*/
import axios from 'axios'
// 创建axios实例，在实例上设置基础路径、响应超时时间等
const request = axios.create({
  baseURL: '',
  timeout: 30000,
})
// 请求拦截器
request.interceptors.request.use(config => {
  // config: 请求拦截器回调注入函数（配置对象）
  // 如：可以通过Headers请求头携带token
  return config
})
// 响应拦截器
request.interceptors.response.use(
  response => {
    // 响应拦截器成功回调，一般进行数据进化
    return response
  },
  error => {
    // 处理http网络错误
    // 返回一个promise错误对象
    return Promise.reject(new Error(error.message))
  }
)
// 暴露封装好的axios实例：request
export default request
