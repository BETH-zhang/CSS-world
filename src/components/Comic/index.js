import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Comic extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  renderDom = (data, parent, parentIndex) => data.map(({ className, key, style, ...rest }, index) => (<div
    className={className}
    key={`${className}-${index}`}
    style={{
      ...style,
      ...rest,
    }}
  >
    {parent[key || className] && this.renderDom(parent[key || className], parent, parentIndex + 1)}
  </div>))

  initRootNode = (data) => {
    const obj = {}
    if (data && data.length) {
      data.map((item) => {
        const parentNode = item.parentNode
        if (parentNode) {
          obj[parentNode] = obj[parentNode] ? obj[parentNode].concat(item) : [item]
        }
      })
      return this.renderDom([data[0]], obj, 0)
    }
    return null
  }

  initRoot = () => {
    if (this.props.rootNames) {
      console.log(this.props.rootNames.length, this.props.rootNames)
      let i = 0
      const root = []
      const names = []
      let startIndex = 0
      let gap = 1
      let blank = 0
      let name = ''
      while (i < this.props.rootNames.length) {
        const str = this.props.rootNames[i]
        const reg = /^[0-9a-zA-Z-]+$/
        if (str && reg.test(str)) {
          name += str
          if (!names.length && !startIndex) {
            startIndex = blank
          }
        } else {
          if (name) {
            // console.log('name:', name)
            if (names[0] && !names[1] && startIndex) {
              gap = (blank - startIndex)
            }
            const index = (blank - startIndex) / gap
            root.push({
              key: name,
              parentNode: names[index - 1],
              ...this.props.attributes[name],
              className: this.props.attributes[name] && `${name} ${this.props.attributes[name].className}` || name
            })
            names[index] = name
            name = ''
            blank = 0
          }
          blank++
        }
        i++
      }

      // console.log(root, names)
      return this.initRootNode(root)
    }
    return null
  }

  render() {
    return <div className="comic-container">
      {this.props.children}
      {this.initRootNode(this.props.root)}
      {this.initRoot()}
    </div>
  }
}

Comic.defaultProps = {
  attributes: {},
};
 
Comic.propTypes = {
//   /** Boolean indicating whether the button should render as disabled */
//   disabled: PropTypes.bool,
//   /** button label. */
//   label: PropTypes.string.isRequired,
//   /** onClick handler */
//   onClick: PropTypes.func,
//   /** component styles */
  attributes: PropTypes.shape,
};
 
export default Comic;