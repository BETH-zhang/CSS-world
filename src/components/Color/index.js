import React, { Component } from 'react'
import './index.less'
import { rgbToHsl, hexToRGB } from '../../utils/index'
import { isObject } from 'us-common-utils'
export default class Color extends Component {
  constructor(props) {
    super(props)
    let colors = props.colors
    if (props.type === 'sort') {
      colors = this.sort(props.colors, props.sortType)
    } else if (props.type === 'divide') {
      colors = this.divide(props.colors)
    }
    this.state = {
      colors,
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

  divide = () => {
    const colorWheel = Array(12).fill([]) // 30度
    const colors = this.props.colors.slice(0)
    colors.forEach((color) => {
      const x = this.getHue(color).replace('hsl(', '').replace(')').replace(/%/g, '').split(',')
      const hue = x[0]
      const index = Math.floor(hue / 30)
      const currentColors = colorWheel[index].slice(0)
      currentColors.push(color)
      colorWheel[index] = currentColors
    })

    colorWheel.forEach((colors) => {
      return this.sort(colors).slice(0)
    })

    return colorWheel
  }

  sort = (value, type) => {
    const colors = value.slice(0)
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
      } else if (type === 'lightness') {
        if (lightness2 === lightness1) { // 饱和度
          if (hue2 === hue1) { // 色相
            return saturation2 - saturation1
          }
          return hue2 - hue1
        }
        return lightness2 - lightness1
      } else {
        if (hue2 === hue1) {
          return (saturation2 + lightness2) - (saturation1 + lightness1)
        }
        return hue2 - hue1
      }
    })
    return colors
  }

  render() {
    // console.log(this.state.colors)
    return (<div className="colors-modal">
      {
        this.state.colors.map((color, index) => {
          if (isObject(color)) {
            return (<div>
              <h2>{index * 30}~{(index + 1) * 30}度色相</h2>
              {
                color.map((item, subIndex) => (<a key={subIndex} style={{ backgroundColor: item }}>{item}</a>))
              }
            </div>)
          }
          return <a key={index} style={{ backgroundColor: color }}>{color}</a>
        })
      }
    </div>)
  }
}