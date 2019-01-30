import React from 'react';
import styles from './styles.css';

export const TrashCanIcon = props => (
  <IconContainer
    presenter={ presenterProps => <TrashCanIconPresenter { ...presenterProps } /> }
    { ...props }
  />
);

export const IconContainer = ({
  presenter,
  onClick,
  className = '',
  ...props,
}) => {
  if (onClick) className += ` ${ styles.clickable }`;

  return presenter({ onClick, className, ...props });
};

export const TrashCanIconPresenter = ({
  height = 20,
  width = 20,
  ...props,
}) => (
    <img
      src="/icons/trash-can.svg"
      alt=""
      height={ height }
      width={ width }
      className={ className }
      onClick={ onClick }
      { ...props }
    />
  );
