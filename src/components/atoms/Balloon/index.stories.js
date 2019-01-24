import React from 'react';
import Balloon from './index';

export default stories => stories
  .add('２文字ラベル', () => <Balloon>次へ</Balloon>)
  .add('４文字ラベル', () => <Balloon>削除する</Balloon>);
