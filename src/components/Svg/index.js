import React from 'react'
import classNames from 'classnames'
import './index.less'

export default (props) => {
  return (<div className={classNames({
    'svg-modal': true,
    [`svg-modal-${props.type}`]: props.type,
  })}>{props.children}</div>)
}

// type: waveMove