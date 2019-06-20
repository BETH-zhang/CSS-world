import React, { Component } from 'react'
import './index.less'
export default class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: props.type === 'sort' ? this.sort(props.colors) : props.colors
    }
  }

  sort = (colors) => {
    return colors
  }

  render() {
    return (<div className="colors-modal">
      {
        this.state.colors.map((item, index) => (
          <a key={index} style={{ backgroundColor: item }}>{item}</a>
        ))
      }
    </div>)
  }
}