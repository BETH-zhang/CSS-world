import React from 'react'
import classNames from 'classnames'
import './index.less'

export default (props) => {
  return (<div className={classNames({
    'line-hover': !props.type,
    [`line-hover-${props.type}`]: props.type,
    'line-active': !props.type && props.active,
    [`line-active-${props.type}`]: props.type && props.active,
  })}>{props.children}</div>)
}

// type: waveMove