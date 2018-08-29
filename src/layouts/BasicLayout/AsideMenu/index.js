import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'
// import { asideMenuConfig } from '@src/menuConfig'
import { withRouter } from 'react-router-dom'
import './index.scss'

// @inject(stores => ({
//   auth: stores,
//   // GetUserInfo: stores.userinfo.GetUserInfo
//   GetUserInfo: stores
// }))

// @observer
@withRouter
export class AsideMenu extends Component {
  componentDidMount() {
    // this.props.GetUserInfo()
  }

  /**
   * 获取当前展开菜单项
   */
  getDefaultOpenKeys = () => {
    const { location } = this.props
    const { pathname } = location
    console.log('pathname', pathname)
  }

  /**
   *  过滤掉没有权限的菜单项
   */
  getNavMenuItems = (menusData) => {
  }

  /**
   * 权限检查
   */
  checkPermissionItem = (authority, ItemDom) => {
    return ItemDom
  }

  render() {
    return (
      <div className="theme-container-aside-side">
        <div className="logo-group">
          <img src={require('@src/assets/logo/vitec_logo.png')} alt="" />
        </div>
        <div>
          {this.getDefaultOpenKeys()}
        </div>
        <div className="aside-menu-item">
          <a href="http://tfacsys.vkforest.com/#/ledger/PcList">PcList</a>
        </div>
        {this.props.auth}
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
        <div className="aside-menu-item"></div>
      </div>
    )
  }
}

export default AsideMenu
