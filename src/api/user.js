import Mock from 'mockjs'
import api from '@src/plugins/api'
import { REACT_APP_ENV } from '@src/config'

import { loginMockData } from '@src/api/userMock'

Mock.mock(/\/mockapi\/sys\/user\/getUserInfo/, 'get', loginMockData)
export async function basicapi(params) {
  return api({
    url: '/sys/user/getUserInfo',
    method: 'get',
    data: params
  })
}

export async function getUserInfo(params) {
  return api({
    url: '/sys/user/getUserInfo',
    method: 'get',
    data: params,
    noShowDefaultError: true,
    BASC_URL: REACT_APP_ENV.AUTH_API
  })
}
