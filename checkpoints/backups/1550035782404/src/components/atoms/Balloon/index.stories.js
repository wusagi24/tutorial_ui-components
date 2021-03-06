import React from 'react';

import Balloon from './index';

export default stories => stories
  .add(
    '２文字ラベル',
    () => <Balloon>次へ</Balloon>,
  )
  .add(
    '４文字ラベル',
    () => <Balloon>削除する</Balloon>,
  )
  .add(
    '絶対座標配置',
    () => (
      <Balloon
        style={{ position: 'absolute', top: '200px', left: '200px' }}
      >
        左上から 200px に配置
      </Balloon>
    ),
  );
