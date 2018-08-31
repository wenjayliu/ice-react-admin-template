# 飞冰初体验
## 初始化项目
`react`  `react-dom`  `mobx`  `mobx-react`  `immutable`  `axios`   `react-intl-universal`  `react-motion`  `react-router-transition` `react-app-rewired`  `echarts`  `sass`

### 多环境变量和模式 。
我需要打包三分不同的版本，又不想运行 `eject` 那不可逆的操作，再加上貌似 react 构建的时候 `NODE_ENV` 还无法修改。
所以我的解决方法是新建一个环境变量，通过这个环境变量再来设置全局常量。

`package.json`

```js
// ...
  "scripts": {
    // ...
    "build:pbe": "cross-env REACT_APP_ENV=pbe react-app-rewired build",
    "build:pro": "cross-env REACT_APP_ENV=pro react-app-rewired build",
    "build:cus": "cross-env REACT_APP_ENV=cus react-app-rewired build",
    // ...
  }
```

`.env.production`

```js
REACT_APP_ENV = $REACT_APP_ENV

```

`src/config/index.js`

```js
# src/config/index.js
export const REACT_APP_ENV = require(`./env.${process.env.REACT_APP_ENV}`)
```

`src/config/env.cus.js`

```js
module.exports = {
    BASC_API: 'HTTP://cus.com'
}

```

### 国际化支持

采用阿里的 [react-intl-universal](https://github.com/alibaba/react-intl-universal)

`App.js`

```js
import React, { Component } from 'react';
import { REACT_APP_ENV } from './config'
import intl from 'react-intl-universal';

// locale data
const locales = {
  "en-US": require('./locales/en-US.json'),
  "zh-CN": require('./locales/zh-CN.json')
}
console.log('环境', REACT_APP_ENV)
console.log('语言', locales)

class App extends Component {
  state = {initDone: false}

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    // init method will load CLDR locale data according to currentLocale
    // react-intl-universal is singleton, so you should init it only once in your app
    intl.init({
      currentLocale: 'en-US', // TODO: determine locale here
      locales,
    })
    .then(() => {
      // After loading CLDR locale data, start to render
	  this.setState({initDone: true});
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {intl.get('TIP')}
        </header>
      </div>
    );
  }
}

export default App;

```

### ice 目录结构
建立通用的目录结构 其中 `layouts`  `pages`  `routerConfig` 是iceworks 检测的关键字用于可视化的自动生成页面。
```shll

src
├── assets          // 资源目录 图片，样式，iconfont
├── components      // 全局通用组件目录
├── config          // 项目配置，拦截器，开关
├── layouts         // 布局 （iceworks 检测关键字）
├── localse         // 国际化语言包
├── pages           // 视图层 （iceworks 检测关键字）
├── plugins         // 插件相关、请求、store 等实例
├── routes          // 路由配置
├── styles          // 全局样式文件
├── service         // 服务层
├── utils           // 工具类
├── App.js          // 入库组件
├── index.js        // 项目入口文件
└── routerConfig.js // 路由表 （iceworks 检测关键字）
```

### `proxy` 代理配置
修改 `package.json` 全局匹配 `/sys` 
```json
{
  "name": "@icedesign/scaffold-create-react-app",
  "version": "1.0.0",
  
  // ...

  "title": "ice-react-admin-template",
  "proxy": {
    "/facApi": {
      "target": "http://基础接口地址.com",
      "changeOrigin": true,
      "pathRewrite": {
        "^/facapi": ""
      }
    },
    "/authApi": {
      "target": "http://其他接口.com",
      "changeOrigin": true,
      "pathRewrite": {
        "^/authApi": ""
      }
    },
    "/easymockApi": {
      "target": "https://www.easy-mock.com/mock",
      "changeOrigin": true,
      "pathRewrite": {
        "^/easymockApi": ""
      }
    }
  }
}
```
`config/env/env.dev.js`  在开发环境配置基础接口地址

```js
/**
 * 开发环境相关配置
 * 接口使用 package.json 代理
 */

module.exports = {
    BASC_API: '/facApi',
    AUTH_API: '/authApi',
    EASYMOCK_API: '/easymockApi'
}

```

二次封装 `axios` 先简单的封装下，目的是不直接调用 `axios` 所有接口都会通过 `plugins/api.js` 配置后再创建 `axios` 请求，这样可以方便的管理每一个接口使用不同的基础地址。

```js
import axios from '@src/plugins/axios'
import { BASC_URL } from '@src/config'

const MakeApi = (options) => {
  // console.log('api', options)
  if (options && options.BASC_URL) {
    options.url = options.BASC_URL + options.url
  } else {
    options.url = BASC_URL + options.url
  }
  return axios(options)
}


export default MakeApi
```

使用接口，`api/user.js` 

```js
import Mock from 'mockjs'
import api from '@src/plugins/api'
import { REACT_APP_ENV } from '@src/config'

import { loginMockData } from '@src/api/userMock'

Mock.mock(/\/mockapi\/sys\/user\/getUserInfo/, 'get', loginMockData)
export function postLogin(data) {
  return api({
    url: '/sys/login/loginChooseProjectByUserName',
    method: 'post',
    data,
    BASC_URL: REACT_APP_ENV.AUTH_API
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

```



