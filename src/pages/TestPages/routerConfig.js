// 以下文件格式为描述路由的协议格式

import asyncComponent from '@src/utils/asyncComponent'

const Home = asyncComponent(() => import('@src/pages/TestPages/Home'))
const ChildPage = asyncComponent(() => import('@src/pages/TestPages/ChildPage'))
const AuthTest = asyncComponent(() => import('@src/pages/TestPages/AuthTest'))
const Animation = asyncComponent(() => import('@src/pages/TestPages/Animation'))

const routerConfig = [
  {
    path: '/Test/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Test/ChildPage',
    name: '子路由',
    component: ChildPage,
  },
  {
    path: '/Test/AuthTest',
    name: '权限',
    component: AuthTest,
  },
  {
    path: '/Test/Animation',
    name: '动画',
    component: Animation,
  }
]

export default routerConfig
