import { Input } from '../Input';
import styles from './Datepicker.module.scss';
import { InputProps } from '../Input/Input';

export const Datepicker = ({ ...props }: Omit<InputProps, 'type'>) => {
  return (
    <div className={styles.container}>
      {!props?.value ? <span className={styles.overlay} /> : null}

      <Input type='date' {...props} />
    </div>
  );
};
