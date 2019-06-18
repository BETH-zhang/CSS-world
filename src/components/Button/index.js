import React from 'react'
import classNames from 'classnames'
import './index.less'

export default (props) => {
  return (<div className={classNames({
    'install-btn': true,
    'install-btn-active': props.active,
  })}>
    <span>{props.children}</span>
    <span>{props.children}</span>
  </div>)
}