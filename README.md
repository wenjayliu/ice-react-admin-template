# 飞冰初体验
## 初始化项目
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

