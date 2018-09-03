import React, { Component } from 'react'

export class BreadCrumd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathName: this.props.pathname
    }
  }
  render() {
    return (
      <div>
        {this.state.pathName}
      </div>
    )
  }
}

export default BreadCrumd
