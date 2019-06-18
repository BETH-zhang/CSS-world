import React from 'react';

import { storiesOf } from '@storybook/react';
import Index, { Image, Text, Button } from '../src'

// https://www.invisionapp.com/inside-design/category/design/
// https://www.zhangxinxu.com/php/microCodeDetail?id=12
// 

storiesOf('home', module)
  .add('index', () => (<Index />))

storiesOf('base', module)
  .add('image1', () => (<Image />))
  .add('image1-active', () => (<Image active />))
  .add('text1', () => (<Text>美小技术部</Text>))
  .add('text1-active', () => (<Text active >美小技术部</Text>))
  .add('button1', () => (<Button>美小技术部</Button>))
  .add('button1-active', () => (<Button active>美小技术部</Button>))