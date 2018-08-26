import axios from '@src/plugins/axios';
import Mock from 'mockjs'
import { loginMockData } from '@src/api/userMock'

Mock.mock(/\/mockapi\/login/, 'post', loginMockData)
export async function login(params) {
  return axios({
    url: '/mockapi/login',
    method: 'post',
    data: params,
  });
}
