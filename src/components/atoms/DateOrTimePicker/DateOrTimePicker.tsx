import { Input } from '../Input';
import styles from './DateOrTimePicker.module.scss';
import { InputProps } from '../Input/Input';

type Props = InputProps & {
  type: 'date' | 'time';
};

export const DateOrTimePicker = ({ type, ...props }: Props) => {
  return (
    <div className={styles.container}>
      {!props?.value && type === 'date' ? (
        <span className={styles.overlay} />
      ) : null}

      <Input type={type} {...props} />
    </div>
  );
};
