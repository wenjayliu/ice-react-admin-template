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
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
    authority: ['5']
  },
  {
    // 开发用测试界面
    name: 'TestPages',
    path: '/TestPages',
    icon: 'TestPages'
  },
  {
    name: 'CountChart',
    path: '/CountChart',
    icon: 'CountChart',
    children: [
      {
        // 每日工作统计图表
        name: 'EveryDadyCount',
        path: '/CountChart/EveryDadyCount',
      },
      {
        // 生产统计图表
        name: 'Manufacture',
        path: '/CountChart/Manufacture',
      },
      {
        // 开发用测试界面
        name: '常用竖向表格',
        path: '/TestPages',
        authority: ['66'],
      }
    ]
  }
]

export { headerMenuConfig, asideMenuConfig }
