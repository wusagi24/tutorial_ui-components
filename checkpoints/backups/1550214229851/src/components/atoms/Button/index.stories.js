import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button, PrimaryButton } from './index';

export default stories => stories
  .add(
    'デフォルト',
    () => (
      <Button onClick={ action('ボタンがクリックされました') }>
        デフォルト
      </Button>
    ),
  )
  .add(
    'プライマリ',
    () => (
      <PrimaryButton onClick={ action('プライマリボタンがクリックされました') }>
        プライマリ
      </PrimaryButton>
    ),
  );
