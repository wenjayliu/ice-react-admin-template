import axios from 'axios'
import { AXIOS_DEFAULT_CONFIG } from '@src/config'
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from '@src/config/interceptors/axios'

let axiosInstance = {}

// axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)
axiosInstance = axios.create({
    baseURL: '',
    timeout: 50000, // request timeout
    withCredentials: true
})
  
// 注入请求拦截
axiosInstance
    .interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入失败拦截
axiosInstance
    .interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance