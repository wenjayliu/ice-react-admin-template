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
];

// 侧边导航配置
const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'table',
    authority: 'admin',
    children: [
      {
        name: '基础表格',
        path: '/table/basic-table',
        authority: 'admin',
      },
      {
        name: '常用竖向表格',
        path: '/table/table-display',
        authority: 'user',
      },
    ],
  }
];

export { headerMenuConfig, asideMenuConfig };
