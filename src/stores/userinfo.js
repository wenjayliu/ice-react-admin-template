import { observable, action } from 'mobx'
import { getUserInfo } from '@src/api/user'

class UserInfo {
  @observable auth = ['66'];

  @action async GetUserInfo() {
    // getUserInfo()
    try {
      var response = await getUserInfo()
      console.log('开始获取用户信息 1', response)
      self.auth = response.data.auth;
    } catch (error) {
      console.log('开始获取用户信息', response)
    }
  }
}

const self = new UserInfo();
export default self;