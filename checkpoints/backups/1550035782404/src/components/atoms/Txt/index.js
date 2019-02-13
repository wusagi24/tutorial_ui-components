import React from 'react';

import styles from './styles.css';

const txtFactory = role => ({
  tag: Tag = 'p',
  size = 'm',
  className,
  ...props,
}) => (
  <Tag
    className={ [ styles[role], styles[size], className ].join(' ') }
    { ...props }
  />
);

export const Txt = txtFactory('default');
export const InfoTxt = txtFactory('info');
export const WarningTxt = txtFactory('warning');

export default Txt;
