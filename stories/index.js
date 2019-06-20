import React from 'react';
import { Row, Col, Card } from '../node_modules/antd/dist/antd'

import { storiesOf } from '@storybook/react';
import '../node_modules/antd/dist/antd.less'
import Index, { Carousel, BlendMode, Color, Svg, VideoFilter, ImageFilter, Image, Text, Button } from '../src'
import { carouselArray, blendModeArray, timeCountCss, timeCount, filterArray, filterMixArray, filterApplyArray } from './constant'
import { createRandomColors } from '../src/utils/index'
// https://www.invisionapp.com/inside-design/category/design/
// https://www.zhangxinxu.com/php/microCodeDetail?id=12
// 
import defaultImg from '../src/components/ImageFilter/mr.jpg'
const videoUrl = 'https://uskid.oss-cn-beijing.aliyuncs.com/video/%E5%8C%A0%E5%BF%83%E6%AF%94%E5%BF%83-%E7%BF%9F%E5%B0%91%E6%88%90%E8%80%81%E5%B8%88(5min).mp4'
const colors = createRandomColors(100)

const filters = [
  {
    title: '基本滤镜',
    data: filterArray,
  }, {
    title: '实际应用',
    data: filterApplyArray,
  }, {
    title: '混合滤镜',
    data: filterMixArray,
  }
]
storiesOf('Home', module)
  .add('Index', () => (<Index />))

storiesOf('Base', module)
  .add('Carousel', () => (<Row>
    {
      carouselArray.map((item) => (<Col sm={12}>
        <Card title={item.name}>
          <Carousel type={item.type} data={item.data} />
        </Card>
      </Col>))
    }
  </Row>))
  .add('Blend Mode', () => (<Row>
    <Col sm={24}>
      <Card title="原图">
        <BlendMode style={{
          backgroundColor: 'green',
          backgroundBlendMode: 'darken'
        }} />
      </Card>
    </Col>

    {
      blendModeArray.map((item) => (<Col sm={12}>
        <Card title={item.name}>
          <BlendMode
            type={item.type}
            img={item.img}
            style={item.style && item.style(defaultImg)}
          >
            {item.children && item.children(defaultImg)}
          </BlendMode>
          <p style={{ height: '60px', marginTop: '12px' }}>{item.description}</p>
        </Card>
      </Col>))
    }
  </Row>))
  .add('Color', () => (<Row>
    <Col sm={6}>
      <Card title="随机颜色组">
        <Color colors={colors} />
      </Card>
    </Col>

    <Col sm={6}>
      <Card title="色相排序-hsl">
        <Color colors={colors} type="sort" sortType="hue" />
      </Card>
    </Col>

    <Col sm={6}>
      <Card title="饱和度排序-slh">
        <Color colors={colors} type="sort" sortType="saturation" />
      </Card>
    </Col>

    <Col sm={6}>
      <Card title="亮度排序-shl">
        <Color colors={colors} type="divide" sortType="saturation" />
      </Card>
    </Col>
  </Row>))
  .add('Svg', () => (<Row>
    <Col sm={24}>
      <Card title="多彩圆环倒计时" onClick={timeCount}>
        <Svg className="time-count">
          <svg width="440" height="440" viewBox="0 0 440 440" className="center">
            <defs>
              <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient1">
                <stop offset="0%" stopColor="#e52c5c"></stop>
                <stop offset="100%" stopColor="#ab5aea"></stop>
              </linearGradient>
              <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient2">
                <stop offset="0%" stopColor="#4352f3"></stop>
                <stop offset="100%" stopColor="#ab5aea"></stop>
              </linearGradient>
            </defs>
            <g style={{ transform: "matrix(0, -1, 1, 0, 0, 440)" }}>
              <circle style={{ cx: 220, cy: 220, r: 170, stroke: '#f0f1f5', strokeWidth: 50, fill: 'none', strokeDasharray: '1069 1069' }}></circle>
              <circle style={{ cx: 220, cy: 220, r: 170, stroke: "url('#gradient1')", strokeWidth: 50, fill: 'none', strokeDasharray: '1069 1069' }}></circle>
              <circle style={{ cx: 220, cy: 220, r: 170, strokeWidth: 50, stroke: "url('#gradient2')", fill: 'none', strokeDasharray: '534.5 1069' }}></circle>
            </g>
          </svg>
          <span className="time-second">10</span>
        </Svg>
      </Card>
      <Card title="CSS3 conic-gradient锥形渐变" onClick={timeCountCss}>
        <Svg>
          <div id="circle" className="svg-modal svg-modal-gradient"></div>
          <div id="seconds" className="time-second">10</div>
        </Svg>
      </Card>
      <Card title="CSS clip裁剪实现12色渐变圆环">
        <Svg type="sector">
          {
            Array(12).fill(0).map((item, index) => (<div className="sector" />))
          }
        </Svg>
      </Card>
      <Card title="模糊扇形色块的边界">
        <Svg type="sector">
          <div className="sector-group">
            {
              Array(12).fill(0).map((item, index) => (<div className="sector" />))
            }
          </div>
        </Svg>
      </Card>
    </Col>
  </Row>))
  .add('Filter', () => (<Row>
    <Col sm={24}>
      <Card title="原图">
        <ImageFilter type="" />
      </Card>
    </Col>

    {
      filters.map((filter, index) => (<div key={index}>
        <h2 style={{ paddingTop: '40px', clear: 'both' }}>{filter.title}效果</h2>
        {
          filter.data.map((item) => (<Col sm={12}>
            <Card title={item.name}>
              <ImageFilter
                type={item.type}
                img={item.img}
                style={item.style && item.style(defaultImg)}
              >
                {item.children && item.children(defaultImg)}
              </ImageFilter>
              <p style={{ height: '60px', marginTop: '12px' }}>{item.description}</p>
            </Card>
          </Col>))
        }
      </div>))
    }
    
  </Row>))
  .add('Filter Video', () => (<Row>
    <Col sm={24}>
      <Card title="原视频">
        <VideoFilter type="" src={videoUrl} autoPlay />
      </Card>
    </Col>  
  </Row>))
  .add('Image', () => (<Row>
    <Col sm={12}>
      <Card title="图片1"><Image /></Card>
    </Col>
    <Col sm={12}>
      <Card title="图片1-active"><Image active /></Card> 
    </Col>
  </Row>))
  .add('Text', () => (<Row>
    <Col sm={12}>
      <Card title="文字1">
        <Text>美小技术部</Text>
        <Text active >美小技术部-active</Text>
      </Card>
    </Col>
    <Col sm={12}>
      <Card title="文字-waveMove">
        <Text type="waveMove">美小技术部</Text>
        <Text type="waveMove" active>美小技术部</Text>
      </Card> 
    </Col>
  </Row>))
  .add('Button', () => (<Row>
    <Col sm={24}>
      <Card title="按钮">
        <Button type="install">
          <span>美小技术部</span>
          <span>美小技术部</span>
        </Button>
        <Button type="install" active>
          <span>美小技术部</span>
          <span>美小技术部</span>
        </Button>
      </Card>
    </Col>
    <Col sm={24}>
      <Card title="色调旋转滤镜">
        <Button type="hueRotate">美小技术部</Button>
        <Button type="hueRotate" active>美小技术部</Button>

        {
          Array(35).fill(0).map((item, index) => (
            <Button type={`hueRotate hue-${(index + 1) * 10}`}>美小技术部</Button>
          ))
        }
      </Card> 
    </Col>
  </Row>))
