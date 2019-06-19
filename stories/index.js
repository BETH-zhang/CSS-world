import React from 'react';
import { Row, Col, Card } from '../node_modules/antd/dist/antd'

import { storiesOf } from '@storybook/react';
import '../node_modules/antd/dist/antd.less'
import Index, { VideoFilter, ImageFilter, Image, Text, Button } from '../src'
import { filterArray } from './constant'
// https://www.invisionapp.com/inside-design/category/design/
// https://www.zhangxinxu.com/php/microCodeDetail?id=12
// 
import defaultImg from '../src/components/ImageFilter/mr.jpg'
const videoUrl = 'https://uskid.oss-cn-beijing.aliyuncs.com/video/%E5%8C%A0%E5%BF%83%E6%AF%94%E5%BF%83-%E7%BF%9F%E5%B0%91%E6%88%90%E8%80%81%E5%B8%88(5min).mp4'

storiesOf('home', module)
  .add('index', () => (<Index />))

storiesOf('base', module)
  .add('filter', () => (<Row>
    <Col sm={24}>
      <Card title="原图">
        <ImageFilter type="" />
      </Card>
    </Col>
    {
      filterArray.map((item) => (<Col sm={12}>
        <Card title={item.name}>
          <ImageFilter type={item.type} img={item.img} style={item.style && item.style(defaultImg)} />
          <p style={{ height: '60px', marginTop: '12px' }}>{item.description}</p>
        </Card>
      </Col>))
    }
    
  </Row>))
  .add('filter-video', () => (<Row>
    <Col sm={24}>
      <Card title="原视频">
        <VideoFilter type="" src={videoUrl} autoPlay />
      </Card>
    </Col>  
  </Row>))
  .add('image', () => (<Row>
    <Col sm={12}>
      <Card title="图片1"><Image /></Card>
    </Col>
    <Col sm={12}>
      <Card title="图片1-active"><Image active /></Card> 
    </Col>
  </Row>))
  .add('text', () => (<Row>
    <Col sm={12}>
      <Card title="文字1">
        <Text>美小技术部</Text>
        <Text active >美小技术部-active</Text>
      </Card>
    </Col>
    <Col sm={12}>
      <Card title="文字-waveMove">
        <Text type="waveMove">美小技术部</Text>
      </Card> 
    </Col>
  </Row>))
  .add('button', () => (<Row>
    <Col sm={12}>
      <Card title="按钮">
        <Button>美小技术部</Button>
        <Button active>美小技术部</Button>
      </Card>
    </Col>
  </Row>))