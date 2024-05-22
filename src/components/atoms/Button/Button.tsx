import { forwardRef, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', fullWidth, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={`${styles.button} ${styles[variant]} ${
          fullWidth ? styles.fullWidth : ''
        }`}
      />
    );
  }
);
