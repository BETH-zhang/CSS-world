import React from 'react';
import { Row, Col, Card } from '../node_modules/antd/dist/antd'

import { storiesOf } from '@storybook/react';
import '../node_modules/antd/dist/antd.less'
import Index, { ImageFilter, Image, Text, Button } from '../src'
import { filterArray } from './constant'
// https://www.invisionapp.com/inside-design/category/design/
// https://www.zhangxinxu.com/php/microCodeDetail?id=12
// 

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
        <Card title={item.name} description={item.description}>
          <ImageFilter type={item.type} />
        </Card>
      </Col>))
    }
    
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