import React, { Component } from 'react'
import { StaggeredMotion, spring, presets } from 'react-motion'
import routerConfig from '../routerConfig'
import './index.scss'

export class TestPages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      length: 4
    }
  }
  pathHref = (path) => {
    console.log('object', path)
    this.props.history.push(path)
  }
  render() {
    let boxes = []
    for (let i = 0, len = this.state.length; i < len; i++) {
      boxes.push({
        scale: 0
      })
    }
    return (
      <div>
        <h3> 测试界面，用于开发测功能 </h3>
        <div className="fuc_wrapper">
          <div className="fuc_meun">
            {this.state.length > 0 ? (
              <StaggeredMotion defaultStyles={boxes} styles={prevStyles => prevStyles.map((item, i) => {
                return i === 0
                  ? { scale: spring(1, { ...presets.noWobble }) }
                  : prevStyles[i - 1] })}>
                {interpolatingStyles =>
                  <div>
                    {interpolatingStyles.map((item, i) => {
                      return (
                        <div className="box2" key={i} style={{ transform: `scale(${item.scale}, ${item.scale})` }} onClick={() => this.pathHref(routerConfig[i].path)}>
                          {routerConfig[i].name}
                        </div>
                      )
                    })}
                  </div>
                }
              </StaggeredMotion>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default TestPages
