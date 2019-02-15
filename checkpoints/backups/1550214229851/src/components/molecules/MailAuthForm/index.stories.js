import React from 'react';
import { action } from '@storybook/addon-actions';

import MailAuthForm from './index';

export default stories => stories
  .add(
    'デフォルト',
    () => (
      <MailAuthForm onSubmit={ action('送信ボタンがクリックされました') } />
    ),
  );
