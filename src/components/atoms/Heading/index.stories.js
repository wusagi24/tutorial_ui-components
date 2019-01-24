import React from 'react';
import Heading from './index';

export default stories => stories
  .add(
    'デフォルト',
    () => <Heading>見出し</Heading>
  )
  .add(
    'レベル１',
    () => (
      <Heading
        level={ 1 }
      >
        見出しレベル１
      </Heading>
    )
  )
  .add(
    'レベル１、見た目２',
    () => (
      <Heading
        level={ 1 }
        visualLevel={ 2 }
      >
        見出しレベル１、見た目２
      </Heading>
    )
  )
