import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routerConfig from './routerConfig'

export class TestPages extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routerConfig.map((route, idx) => {
            return route.component ? (
              <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => <route.component {...props} />} />
            ) : null
          })}
          <Redirect to="/Test/Home"></Redirect>
        </Switch>
      </div>
    )
  }
}

export default TestPages
