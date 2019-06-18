import React from 'react';

import { storiesOf } from '@storybook/react';
import Test, { Image, Text, Button } from '../src'

storiesOf('基础组件', module)
  .add('图片效果1', () => (<Image />))
  .add('图片效果1-active', () => (<Image active />))
  .add('文字效果1', () => (<Text>美小技术部</Text>))
  .add('文字效果1-active', () => (<Text active >美小技术部</Text>))
  .add('按钮效果1', () => (<Button>美小技术部</Button>))
  .add('按钮效果1-active', () => (<Button active>美小技术部</Button>))