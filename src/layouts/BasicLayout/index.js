import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AsideMenu from './AsideMenu'
import BreadCrumb from './BreadCrumb'
import routerConfig from '@src/routerConfig'

import './index.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathname: ''
    }
  }
  componentDidMount() {
    const { pathname } = this.props.location
    this.setState(() => ({ pathname }))
  }
  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location
    console.log('pathname11111', nextProps)
    this.setState(() => ({ pathname }))
  }
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
                <BreadCrumb pathname={this.state.pathname} />
                {/* 公共标题 {this.state.pathname} */}
                <Switch>
                  {routerConfig.map((route, idx) => {
                    return route.component ? (
                      <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => <route.component {...props} />} />
                    ) : null
                  })}
                </Switch>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
