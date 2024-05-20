import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.scss';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className'
> & {
  variant?: 'primary' | 'secondary';
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { variant = 'primary', ...props }: InputProps,
  ref
) {
  return (
    <input
      className={`${styles.input} ${styles[variant]}`}
      {...props}
      ref={ref}
    />
  );
});
