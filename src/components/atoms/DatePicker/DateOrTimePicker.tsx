import { Input } from '../Input';
import styles from './DateOrTimePicker.module.scss';
import { InputHTMLAttributes, useRef } from 'react';

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className' | 'type'
> & {
  type: 'date' | 'time';
};

export const DateOrTimePicker = ({ type, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={styles.container}>
      {!inputRef?.current?.value ? <span className={styles.overlay} /> : null}

      <Input ref={inputRef} type={type} {...props} />
    </div>
  );
};
