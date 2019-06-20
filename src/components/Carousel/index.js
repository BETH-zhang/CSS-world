import React, { Component } from 'react'
import classNames from 'classnames'
import './index.less'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  componentDidMount() {
    this.initTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  initTimer = () => {
    if (this.timer) {
      clearInterval(this.timer)
    }
    this.timer = setInterval(() => {
      const index = this.state.currentIndex === this.props.data.length - 2 ? 0 : this.state.currentIndex + 1
      this.setState({ currentIndex: index })
    }, 10000)
  }

  render() {
    const props = this.props
    return (<div className={classNames({
      'carousel-modal': true,
      [`carousel-modal-${props.type}`]: props.type,
    })}>
      {
        props.data.map((item, index) => (<a
          key={index}
          className={classNames({
            'carousel-slide': true,
            'slide-in': this.state.currentIndex === index,
            'slide-out': this.state.currentIndex !== index,
          })}
          href={item.href}
          style={{ backgroundImage: `url(${item.img})` }}
        />))
      }
      <div className="carousel-points">
        {
          props.data.map((item, index) => (<div
            key={index}
            className={classNames({
              'carousel-point-index': true,
              'active': this.state.currentIndex === index,
            })}
            onClick={() => {this.setState({ currentIndex: index })}}
          />))
        }
      </div>
    </div>)
  }
}