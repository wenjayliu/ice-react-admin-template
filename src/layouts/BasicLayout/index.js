import React, { Component } from 'react'
import AsideMenu from './AsideMenu'
// import NotFound from '@src/pages/NotFound'

import './index.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="basic-layout-page">
        {/* layout */}
        <div className="layout-header-aside-content">
          {/* 1. header */}
          <div className="theme-header"></div>

          {/* 2. 侧栏 + 主体容器 */}
          <div className="theme-container">
            {/* 2.1 侧栏 */}
            <div className="theme-container-aside">
              <AsideMenu />
            </div>
            {/* 2.2 主体 */}
            <div className="theme-container-main">
              {/* 2.2.1 所有主体公共头部 标题 */}
              <div className="theme-container-main-header"></div>
              {/* 2.2.2 主体组件 */}
              <div className="theme-container-main-body">
                {/* {this.props.children} */}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
