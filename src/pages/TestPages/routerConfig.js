// 以下文件格式为描述路由的协议格式

import asyncComponent from '@src/utils/asyncComponent'

const ChildPage = asyncComponent(() => import('@src/pages/TestPages/ChildPage'))
const AuthTest = asyncComponent(() => import('@src/pages/TestPages/AuthTest'))
const Animation = asyncComponent(() => import('@src/pages/TestPages/Animation'))

const routerConfig = [
  {
    path: '/TestPages/ChildPage',
    component: ChildPage,
  },
  {
    path: '/TestPages/AuthTest',
    component: AuthTest,
  },
  {
    path: '/TestPages/Animation',
    component: Animation,
  }
]

export default routerConfig
