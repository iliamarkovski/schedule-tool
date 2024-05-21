import { ChangeEvent, useState } from 'react';
import styles from './TimeInput.module.scss';
import {
  addTime,
  addTimeSlot,
  removeTime,
} from '../../../store/slices/schedule';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { Icon } from '../../atoms/Icon';
import { Input } from '../../atoms/Input';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { validateHhMm } from '../../../utils/validateHhMm';
import { validateSchedule } from '../../../utils/validateSchedule';
import { InputProps } from '../../atoms/Input/Input';

type Props = {
  colIndex: number;
  timeIndex: number;
  autoFocus?: boolean;
  variant?: InputProps['variant'];
  value: string;
};

export const TimeInput = ({
  colIndex,
  timeIndex,
  autoFocus,
  variant,
  value: timeValue,
}: Props) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  const times = useSelector((state: RootState) => state.schedule.times);
  const dispatch: AppDispatch = useDispatch();

  const colTimes = times[colIndex];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValid(true);

    dispatch(
      addTime({
        colIndex,
        timeIndex,
        value: event.target.value,
      })
    );
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValid(validateHhMm(event.target.value));
  };

  const handleRemove = () => {
    dispatch(
      removeTime({
        colIndex,
        timeIndex,
      })
    );
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsValid(validateHhMm(timeValue));

      if (colTimes.length < 4) {
        const { empty, invalid } = validateSchedule([colTimes]);

        if (!empty && invalid) {
          return;
        }

        dispatch(addTimeSlot(colIndex));
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <Input
          variant={variant}
          onChange={handleChange}
          onBlur={handleBlur}
          value={timeValue}
          onKeyUp={handleKeyUp}
          autoFocus={autoFocus}
          name={`time-${colIndex}-${timeIndex}`}
        />

        <button
          className={styles.button}
          type='button'
          title='remove selected time'
          onClick={handleRemove}
        >
          <Icon name='cross' className={styles.icon} />
        </button>
      </div>

      {!isValid ? <ErrorMessage text='Enter a valid time!' /> : null}
    </div>
  );
};
