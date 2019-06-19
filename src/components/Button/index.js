import React from 'react'
import classNames from 'classnames'
import './index.less'

export default (props) => {
  return (<div className={classNames({
    'bb-btn': true,
    [`bb-btn-${props.type}`]: props.type,
    'bb-btn-active': props.active,
    [`bb-btn-${props.type}-active`]: props.active && props.type,
  })}>
    {props.children}
  </div>)
}