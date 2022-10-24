import React from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';


export const ContentLimiterTemplate = ({
  className,
  children,
  middleMaxWidth,
}) => {
  const contentLimiterTemplateClass = cn(
    styles.contentLimiter,
    {
      [styles['contentLimiter--middle']]: middleMaxWidth,
    },
    className
  );

  return <div className={contentLimiterTemplateClass}>{children}</div>;
};
