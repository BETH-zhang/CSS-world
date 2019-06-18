import React from 'react'
import classNames from 'classnames'
import './index.less'

const defaultImage = 'https://s3.amazonaws.com/www-inside-design/uploads/2018/06/1_webinars-min.jpg'

export default (props) => {
  return (<div className={classNames({
    'image-hover': true,
    'image-active': props.active,
  })}>
    <div className="image-wrapper">
      <img src={props.src || defaultImage} alt="" />
      <div
        className="bg"
        style={{ backgroundImage: `url(${props.src || defaultImage})` }} />
      <div className="curl" />
    </div>
  </div>)
}