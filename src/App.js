import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
// import intl from 'react-intl-universal'

import asyncComponent from '@src/utils/asyncComponent'

// 页面
import DefaultLayout from '@src/layouts'
const LoginTest = asyncComponent(() => import('@src/pages/TestPages/LoginTest'))
const TestPages = asyncComponent(() => import('@src/pages/TestPages'))


// locale data
// const locales = {
//   'en-US': require('@src/locales/en-US.json'),
//   'zh-CN': require('@src/locales/zh-CN.json')
// }

// console.log('语言', locales)

@inject(stores => ({
  GetUserInfo: stores.userinfo.GetUserInfo
}))

@observer
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initDone: false
    }
  }

  componentDidMount() {
    this.props.GetUserInfo().then(res => {
      console.log('f', res)
      this.setState(() => ({ initDone: true }))
    })
    this.loadLocales()
  }

  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    // intl.init({
    //   currentLocale: 'zh-CN',
    //   locales,
    // }).then(() => {
    //   this.setState({ initDone: true })
    // })
  }

  // 插入路由表
  asyncRouters() {
    document.getElementById('GLoading').style.display = 'none'
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/LoginTest" name="LoginTest" component={LoginTest} />
          <Route path="/test" name="test" component={TestPages} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    )
  }
  // {intl.get('TIP')}
  render() {
    return (
      <div>
        {this.state.initDone ? this.asyncRouters() : ''}
      </div>
    )
  }
}

export default App
