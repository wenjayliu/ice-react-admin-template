// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import asyncComponent from '@src/utils/asyncComponent'

const BasicLayout = asyncComponent(() => import('@src/layouts/BasicLayout/index'))
const Home = asyncComponent(() => import('@src/pages/Home/index'))
const EveryDadyCount = asyncComponent(() => import('@src/pages/EveryDadyCount/index'))
const NotFound = asyncComponent(() => import('@src/pages/NotFound/index'))
const TestPages = asyncComponent(() => import('@src/pages/TestPages/index'))

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: Home,
  },
  {
    path: '/EveryDadyCount',
    layout: BasicLayout,
    component: EveryDadyCount,
  },
  {
    path: '/TestPages',
    layout: BasicLayout,
    component: TestPages,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  }
]

export default routerConfig
