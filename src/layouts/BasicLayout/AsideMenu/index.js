import React, { Component } from 'react'
import './index.scss'
import { observer, inject } from 'mobx-react'

@inject(stores => ({
    auth: stores.userinfo.auth,
    GetUserInfo: stores.userinfo.GetUserInfo
}))

@observer
export class AsideMenu extends Component {
    componentDidMount() {
        this.props.GetUserInfo();
    }
  render() {
    return (
      <div className="theme-container-aside-side">
        <div className="logo-group">
          <img src={require('@src/assets/logo/vitec_logo.png')} alt=""/>
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
