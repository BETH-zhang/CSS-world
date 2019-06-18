import React from 'react'
import classNames from 'classnames'
import './index.less'

export default (props) => {
  return (<div className={classNames({
    'line-hover': true,
    'line-active': props.active,
  })}>{props.children}</div>)
}