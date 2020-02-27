import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Comic from './index'
import {
  santaData,
  santaData1,
  santaData2,
  shapeData,
  xiaouData,
} from './data'
// import { Button } from 'antd'

storiesOf('Comic|Demo', module)
  .add('默认状态', () => <Comic {...santaData} />)
  .add('测试', () => <Comic children={santaData.children} {...santaData1} />)
  .add('测试1', () => <Comic children={santaData.children} {...santaData2} />)
  .add('形状', () => <Comic {...shapeData} />)
  .add('小U', () => <Comic {...xiaouData} />)
