import React from 'react'
import classNames from 'classnames'
import defaultImg from '../ImageFilter/mr.jpg'

import './index.less'

export default (props) => {
  return (<div
    className={classNames({
      'mask-modal': true,
      [`mask-modal-${props.type}`]: props.type,
    })}
    style={Object.assign({}, {
      backgroundImage: `url(${props.img || defaultImg})`
    }, props.style)}
  >
    {props.children}
    <div className="mask-layer-img" style={{ backgroundImage: `url(${props.img || defaultImg})` }}></div>
    <div className="mask-layer"></div>
  </div>)
}