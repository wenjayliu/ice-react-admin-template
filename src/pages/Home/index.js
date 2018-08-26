import React, { Component } from 'react';
import { login } from '@src/api/user'

export default class Home extends Component {
  componentDidMount() {
    console.log(login().then(res => {
      console.log(res)
    }))
    // user['user|userinfo']()
  }
  render() {
    return (
      <div className="home-page">
        home
      </div>
    )
  }
}
