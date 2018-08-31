import { CONSOLE_REQUEST_ENABLE } from '@src/config/index.js'

// 自定义请求拦截逻辑，可以处理权限，请求发送监控等
export function requestSuccessFunc(requestObj) {
  CONSOLE_REQUEST_ENABLE && console.info('requestInterceptorFunc', `url: ${requestObj.url}`, requestObj)
  return requestObj
}

// 自定义发送请求失败逻辑，断网，请求发送监控等
export function requestFailFunc(requestError) {
  return Promise.reject(requestError)
}

// 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
export function responseSuccessFunc(responseObj) {
  // 假设我们请求体为
  // {
  //     code: 1010,
  //     msg: 'this is a msg',
  //     data: null
  // }
  let resData = responseObj.data
  let code = resData.code || resData.status

  switch (code) {
  case 200: // 如果业务成功，直接进成功回调200
    console.log(responseObj)
    console.log(responseObj.config)
    return resData
  case 401: // 未登录
    window.location.href = '/#/LoginTest'
    return false
  default:
    console.log('拦截器code非200', resData)
    // 业务中还会有一些特殊 code 逻辑，我们可以在这里做统一处理，也可以下方它们到业务层
    // !responseObj.config.noShowDefaultError && GLOBAL.vbus.$emit('global.$dialog.show', resData.msg);
    return Promise.reject(resData)
  }
}

// 响应失败，(断网500, 接口报错404) 可根据 responseError.message 和 responseError.response.status 来做监控处理
export function responseFailFunc(responseError) {
  console.log('响应失败', responseError)
  alert(responseError.response.status)
  return Promise.reject(responseError)
}