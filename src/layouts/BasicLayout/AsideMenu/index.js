import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import ReactSVG from 'react-svg'
import { transitionH } from '@src/utils/tools'
import { asideMenuConfig } from '@src/menuConfig'
import './index.scss'

@inject((stores) => ({
  auth: stores.userinfo.auth
}))
@observer
@withRouter
export class AsideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      asyncMeuns: [],
      active: ''
    }
  }
  componentDidMount() {
    this.getDefaultOpenKeys()
  }
  /**
   * 获取当前展开菜单项
   */
  getDefaultOpenKeys = () => {
    const { location } = this.props
    const { pathname } = location
    console.log('pathname', pathname)
    // let myAuth = ['6', '32']
    let accessedmenusData = this.getNavMenuItems(asideMenuConfig, this.props.auth)

    // 构造数据
    const asyncMeuns = []
    let fsItem = {}
    accessedmenusData.map((item) => {
      let open = false
      if (!pathname.indexOf(item.path)) {
        fsItem = item
        console.log(item.path)
        open = true
      }
      return asyncMeuns.push({
        open,
        subele: null,
        ...item
      })
    })

    this.setState({
      asyncMeuns,
      active: pathname
    })
    setTimeout(() => {
      this.authFoldMenu(fsItem)
      console.log('22', this.state.asyncMeuns)
    }, 500)
  }

  // 展开一级菜单
  authFoldMenu(fsMenu) {
    transitionH(this[`submenu${fsMenu.id}`])
  }
  /** 递归过滤掉没有权限的菜单项
   * @param  {} menusData 原始侧边栏数据
   * @param  {} auth      后台返回权限数组
   */
  getNavMenuItems = (menusData, auth) => {
    // let self = this
    const accessedmenusData = menusData.filter(menu => {
      if (menu.authority && menu.authority.length) {
        return auth.some(role => menu.authority.indexOf(role) >= 0)
      }
      if (menu.children && menu.children.length) {
        menu.children = this.getNavMenuItems(menu.children, auth)
      }
      return true
      // console.log('menu', menu)
    })
    // console.log('accessedmenusData', accessedmenusData)
    return accessedmenusData
  }
  listHandler(item, index) {
    // console.log('cliick', this[`submenu${item.id}`])
    if (item.children && item.children.length) {
      this.menuFold(item, index)
    } else {
      this.setState(() => {
        return {
          active: item.path
        }
      })
      this.menuHrefGo(item.path)
    }

  }

  // 点击菜单跳转
  menuHrefGo(url) {
    if (url.indexOf('http')) {
      this.props.history.push(url)
    } else {
      window.location.href = url
    }
  }

  // 点击菜单展开折叠
  menuFold(fsMenu, fsIndex) {
    if (this.state.asyncMeuns[fsIndex].open === false) {
      transitionH(this[`submenu${fsMenu.id}`])
    } else {
      this[`submenu${fsMenu.id}`].style.height = 0
    }

    // 更新数据 重新触发render
    const newAsyncMenus = []
    this.state.asyncMeuns.map((item, i) => {
      if (fsIndex === i) {
        item.open = !item.open
        newAsyncMenus.push(item)
      } else {
        newAsyncMenus.push(item)
      }
      return []
    })
    // console.log(newAsyncMenus)
    this.setState(() => ({
      asyncMeuns: newAsyncMenus
    }))
  }

  render() {
    return (
      <div className="theme-container-aside-side">
        <div className="logo-group">
          <img src={require('@src/assets/logo/vitec_logo.png')} alt="" />
        </div>
        {
          this.state.asyncMeuns.map((fsMenu, fsIndex) => {
            return (
              <ul className="fs_menu" key={fsMenu.id}>
                <li className="fs_menu_li">
                  <div className={`fs_menu_wrapper ${fsMenu.open ? 'open' : ''}`} onClick={(e) => this.listHandler(fsMenu, fsIndex)}>
                    <ReactSVG src={require('@src/assets/svg/car.svg')} svgClassName="svg-synet" />
                    <div className="fsmenu_name">
                      <span>{fsMenu.name}</span>
                    </div>
                    {this.downIconRender(fsMenu)}
                  </div>

                  {/* 渲染二级子菜单 */}
                  <ul className="sub_menu" ref={(m) => { this[`submenu${fsMenu.id}`] = m }} >
                    {this.sub_menu_render(fsMenu)}
                  </ul>
                </li>
              </ul>
            )
          })
        }
      </div>
    )
  }
  // 可封装组件 出现三级以上下拉菜单概率较低 不考虑递归处理
  sub_menu_render(fsMenu) {
    // console.log('渲染子菜单', fsMenu, fsIndex)
    if (fsMenu.children && fsMenu.children.length) {
      return fsMenu.children.map((subMenu, subIndex) => {
        return (
          <li className={`sub_menu_li ${this.state.active === subMenu.path ? 'active' : ''}`} key={subIndex} onClick={(e) => this.listHandler(subMenu, subIndex)}>
            <span>{subMenu.name}</span>
          </li>
        )
      })
    }
  }

  // 下拉图标渲染
  downIconRender(fsMenu) {
    if (fsMenu.children && fsMenu.children.length) {
      return (
        <i className="icon_down_i"><ReactSVG src={require('@src/assets/svg/icon_arrow_down.svg')} svgClassName="icon_arrow_down" /></i>
      )
    }
  }
}


export default AsideMenu
