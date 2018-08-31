import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routerConfig from './routerConfig'

export class TestPages extends Component {
  render() {
    return (
      <div>
        <h3> 这是一个简单的测试界面，用于测试零散功能 </h3>
        <div className="fuc_wrapper">
          <div className="fuc_meun">
            <div>权限</div>
            <div>其他</div>
          </div>
        </div>
        <Switch>
          {routerConfig.map((route, idx) => {
            return route.component ? (
              <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => <route.component {...props} />} />
            ) : null
          })}
        </Switch>
      </div>
    )
  }
}

export default TestPages
