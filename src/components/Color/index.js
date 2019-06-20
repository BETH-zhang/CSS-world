import React, { Component } from 'react'
import './index.less'
import { rgbToHsl, hexToRGB } from '../../utils/index'
export default class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: props.type === 'sort' ? this.sort(props.colors, props.sortType) : props.colors
    }
  }

  getHue = (color) => {
    let c = null
    if (color.indexOf('hsl') > -1) {
      c = color
    } else if (color.indexOf('rgb') > -1) {
      const ary = color.replace('rgb(', '').replace(')', '').split(',')
      c = rgbToHsl(Number(ary[0]), Number(ary[1]), Number(ary[2]))
    } else if (color.indexOf('#') > -1) {
      c = hexToRGB(color)
      const ary = c.replace('rgb(', '').replace(')', '').split(',')
      c = rgbToHsl(Number(ary[0]), Number(ary[1]), Number(ary[2]))
    }
    return c
  }

  sort = (value, type) => {
    const colors = value
    colors.sort((x, y) => {
      const x1 = this.getHue(x).replace('hsl(', '').replace(')').replace(/%/g, '').split(',')
      const y1 = this.getHue(y).replace('hsl(', '').replace(')').replace(/%/g, '').split(',')
      const hue1 = x1[0]
      const hue2 = y1[0]
      const saturation1 = x1[1]
      const saturation2 = y1[1]
      const lightness1 = x1[2]
      const lightness2 = y1[2]

      if (type === 'hue') {
        if (hue1 === hue2) { // 色相
          if (saturation1 === saturation2) { // 饱和度
            return lightness2 - lightness1
          }
          return saturation2 - saturation1
        }
        return hue2 - hue1
      } else if (type === 'saturation') {
        if (saturation1 === saturation2) { // 饱和度
          if (lightness1 === lightness2) { // 亮度
            return hue2 - hue1
          }
          return lightness2 - lightness1
        }
        return saturation2 - saturation1
      } else {
        if (saturation1 === saturation2) { // 饱和度
          if (hue2 === hue1) { // 色相
            return hue2 - hue1
          }
          return lightness2 - lightness1
        }
        return saturation2 - saturation1 
      }
    })
    return colors
  }

  render() {
    // console.log(this.state.colors)
    return (<div className="colors-modal">
      {
        this.state.colors.map((item, index) => (
          <a key={index} style={{ backgroundColor: item }}>{item}</a>
        ))
      }
    </div>)
  }
}