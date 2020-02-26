import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import Comic from './index'
// import { Button } from 'antd'

storiesOf('Comic|Demo', module)
  .add('默认状态', () => <Comic />)
