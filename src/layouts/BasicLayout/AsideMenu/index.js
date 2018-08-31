import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import ReactSVG from 'react-svg'
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
      open: false
    }
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
    console.log('pathname', accessedmenusData)
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

  listHandler = (e) => {
    e.preventDefault()
    this.setState(() => ({ open: true }))
  }

  render() {
    return (
      <div className="theme-container-aside-side">
        {this.getDefaultOpenKeys()}
        <div className="logo-group">
          <img src={require('@src/assets/logo/vitec_logo.png')} alt="" />
        </div>
        <ul className="fs_menu">
          <li className="fs_menu_li">
            <div className="fs_menu_wrapper" onClick={this.listHandler}>
              <ReactSVG src={require('@src/assets/svg/car.svg')} svgClassName="svg-synet" />
              <span>石原爱衣</span>
              <i>+</i>
            </div>
            <ul className="sub_menu">
              <li className="sub_menu_li">
                <ReactSVG src={require('@src/assets/svg/car.svg')} svgClassName="svg-synet" />
                <span>虚渊玄</span>
              </li>
            </ul>
          </li>
        </ul>
        <div className="aside-menu-item">
          <a href="http://tfacsys.vkforest.com/#/ledger/PcList">{this.props.auth}</a>
        </div>
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
