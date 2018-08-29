import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
// import intl from 'react-intl-universal'

// 页面
import BasicLayout from '@src/layouts/BasicLayout'


// import { Provider } from 'mobx-react'
// import stores from '@src/stores'
// import router from './routes'

// locale data
// const locales = {
//   'en-US': require('@src/locales/en-US.json'),
//   'zh-CN': require('@src/locales/zh-CN.json')
// }

// console.log('语言', locales)

class App extends Component {
  // state = { initDone: false }

  componentDidMount() {
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
  // {intl.get('TIP')}
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" name="Home" component={BasicLayout} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
