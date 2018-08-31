import React, { Component } from 'react'
import { postLogin, getUserInfo } from '@src/api/user'
import { obj2form } from '@src/utils/formData'
export class LoginTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    // 优化写法 初始化时 绑定this
    this.buttonClick = this.buttonClick.bind(this)
    this.usernameHander = this.usernameHander.bind(this)
    this.passwordHander = this.passwordHander.bind(this)
  }

  buttonClick() {
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    postLogin(obj2form(data)).then(res => {
      console.log('登陆成功', res)
    })
  }

  getinfo() {
    getUserInfo()
  }
  usernameHander(e) {
    const username = e.target.value
    this.setState(() => ({
      username
    }))
  }
  passwordHander(e) {
    const password = e.target.value
    this.setState(() => ({
      password
    }))
  }

  render() {
    return (
      <div>
        username<input type="text" value={this.state.username} onChange={this.usernameHander} />
        password<input type="text" value={this.state.password} onChange={this.passwordHander} />
        <button onClick={this.buttonClick}>LoginTest</button>
        <button onClick={this.getinfo}>getinfo</button>
      </div>
    )
  }
}

export default LoginTest
