import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
};

export const Button = ({ variant = 'primary', fullWidth, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[variant]} ${
        fullWidth ? styles.fullWidth : ''
      }`}
    />
  );
};
