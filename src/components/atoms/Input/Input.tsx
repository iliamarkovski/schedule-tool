import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.scss';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>,
  ref
) {
  return <input className={styles.input} {...props} ref={ref} />;
});
