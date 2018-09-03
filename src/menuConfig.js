// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

// 头部导航配置
const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
]

// 侧边导航配置
const asideMenuConfig = [
  {
    id: 0,
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
    authority: []
  },
  {
    id: 2,
    name: 'CountChart',
    path: '/CountChart',
    icon: 'CountChart',
    children: [
      {
        // 每日工作统计图表
        id: 3,
        name: 'EveryDadyCount',
        path: '/CountChart/EveryDadyCount',
      },
      {
        // 生产统计图表
        id: 4,
        name: 'Manufacture',
        path: '/CountChart/Manufacture',
      },
      {
        // 开发用测试界面
        id: 5,
        name: '常用竖向表格',
        path: '/TestPages',
        authority: [],
      }
    ]
  }
]

export { headerMenuConfig, asideMenuConfig }
