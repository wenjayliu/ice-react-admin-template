import React, { Component } from 'react'
import { StaggeredMotion, spring, presets } from 'react-motion'

import './test.scss'

class Test2 extends Component {
  state = {
    length: 10
  }

  addLength() {
    let newLength
    if (this.state.length) {
      newLength = 0
    } else {
      newLength = 10
    }

    this.setState({
      length: newLength
    })
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
        <div>
          <button onClick={this.addLength.bind(this)}>run</button>
          {this.state.length > 0 ? (
            <StaggeredMotion defaultStyles={boxes} styles={prevStyles => prevStyles.map((item, i) => {
              return i === 0
                ? { scale: spring(1, { ...presets.noWobble }) }
                : prevStyles[i - 1] })}>
              {interpolatingStyles =>
                <div>
                  {interpolatingStyles.map((item, i) => {
                    return (
                      <div className="box2" key={i} style={{ transform: `scale(${item.scale}, ${item.scale})` }}></div>
                    )
                  })}
                </div>
              }
            </StaggeredMotion>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Test2