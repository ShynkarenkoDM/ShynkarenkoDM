import cn from 'classnames';
import React from 'react';
import { UiSize } from "../UiSize";
import styles from './styles.module.scss';


export const Button = ({
  className,
  disabled,
  children,
  onClick,
  variant = 'contained',
  loading,
  height,
  width,
  style,
  color = 'primary',
  type = 'button',
  id,
}) => {
  const buttonClass = cn(
    styles.button,
    {
      [styles[`button--variant-${variant}`]]: variant,
      [styles[`button--padding-${height}`]]: height && width === 'content',
      [styles[`button--color-${color}`]]: color,
    },
    className,
  );

  return (
    <UiSize width={width} height={height}>
        <button
            className={buttonClass}
            onClick={loading || disabled ? undefined : onClick}
            style={style}
            type={type}
            id={id}
        >

            <div className={styles.button__content}>
                {children}
            </div>
            
        </button>
      </UiSize>
  );
};
