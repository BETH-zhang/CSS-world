import React, { Component } from 'react'
import classNames from 'classnames'

import './index.less'
import '../Filter/index.less'

export default class VideoFilter extends Component {
  componentDidMount() {
    var c = ["原视频", "1977","aden","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster",
    "valencia","walden","willow","xpro2"];
    document.head.insertAdjacentHTML("beforeend",'');
    var b=document.createElement("select");
    b.style.position = 'absolute';
    b.style.right = '0px';
    b.style.top = '0px';
    b.style.zIndex = 1;
    b.style.padding="5px";
    b.innerHTML=c.map(function(d){return '<option value="' + d + '">' + d + '</option>'}).join('');
    var a=document.createElement("label");
    a.style.margin="0 5px 0 20px";
    document.querySelector('.video-filter').appendChild(b);
    b.addEventListener("change",function(){
      document.querySelector(".video-filter").className="video-filter image-filter filter-modal-"+this.value;
    })
  }

  render() {
    const props = this.props
    return (<div
      className={classNames({
        'video-filter': true,
        'image-filter': true,
        [`image-filter-${props.type}`]: props.type,
      })}
    >
      <video
        poster={props.img}
        src={props.src}
        controls="controls"
        autoPlay={props.autoPlay}
      />
    </div>)
  }
}