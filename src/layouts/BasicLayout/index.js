import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="basic-layout-page">
        layout
        {this.props.children}
      </div>
    )
  }
}
