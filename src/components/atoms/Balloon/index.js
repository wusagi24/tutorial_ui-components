import React from 'react';
import styles from './style.css';

const Balloon = ({ children }) => (
  <span className={ styles.balloon }>{ children }</span>
);

export default Balloon;
