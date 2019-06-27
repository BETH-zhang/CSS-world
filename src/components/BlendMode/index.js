import React from 'react'
import classNames from 'classnames'
import defaultImg from '../Filter/mr.jpg'

import './index.less'

export default (props) => {
  return (<div
    className={classNames({
      'blend-mode': true,
      [`blend-mode-${props.type}`]: props.type,
    })}
    style={Object.assign({}, {
      backgroundImage: `url(${props.img || defaultImg})`
    }, props.style)}
  >
    {props.children}
  </div>)
}