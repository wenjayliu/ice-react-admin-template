// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import asyncComponent from '@src/utils/asyncComponent'

// const BasicLayout = asyncComponent(() => import('@src/layouts/BasicLayout'))
const Dashboard = asyncComponent(() => import('@src/pages/Dashboard'))
const EveryDadyCount = asyncComponent(() => import('@src/pages/EveryDadyCount'))
const Manufacture = asyncComponent(() => import('@src/pages/Manufacture'))
const NotFound = asyncComponent(() => import('@src/pages/NotFound'))
const TestPages = asyncComponent(() => import('@src/pages/TestPages'))

// import BasicLayout from '@src/layouts/BasicLayout'
// import Home from '@src/pages/Home'
// import EveryDadyCount from '@src/pages/EveryDadyCount'
// import NotFound from '@src/pages/NotFound'
// import TestPages from '@src/pages/TestPages'

const routerConfig = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Dashboard,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/TestPages',
    component: TestPages,
  },
  {
    path: '/CountChart',
    exact: true,
    component: EveryDadyCount,
  },
  {
    path: '/CountChart/EveryDadyCount',
    component: EveryDadyCount,
  },
  {
    path: '/CountChart/Manufacture',
    component: Manufacture,
  },
  {
    path: '*',
    component: NotFound,
  }
]

export default routerConfig
