import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';



export const UiSize = ({ children, height = 'md', width = 'full' }) => {
  const uiSizeClass = cn(styles.uiSize, {
    [styles[`uiSize--height-${height}`]]: height,
    [styles[`uiSize--width-${width}`]]: width,
  });

  return <div className={uiSizeClass}>{children}</div>;
};
