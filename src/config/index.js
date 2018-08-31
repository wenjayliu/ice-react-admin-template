
export const REACT_APP_ENV = require(`./env/env.${process.env.REACT_APP_ENV}`)

export const BASC_URL = REACT_APP_ENV.BASC_API

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {},
  withCredentials: true
}

// 方便开发的配置
export const CONSOLE_REQUEST_ENABLE = false      // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = true     // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE = true      // 监控记录打印