import React from 'react';

import { storiesOf } from '@storybook/react';
import Test, { Image } from '../src'

storiesOf('基础组件', module)
  .add('图片效果1', () => (<Image />))