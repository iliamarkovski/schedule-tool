import { ChangeEvent } from 'react';
import { DateOrTimePicker } from '../../atoms/DateOrTimePicker';
import styles from './TimeButton.module.scss';
import { addTime, removeTime } from '../../../store/slices/schedule';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { Icon } from '../../atoms/Icon';

type Props = {
  colIndex: number;
  timeIndex: number;
};

export const TimeButton = ({ colIndex, timeIndex }: Props) => {
  const times = useSelector((state: RootState) => state.schedule.times);
  const autocompleteUsed = useSelector(
    (state: RootState) => state.schedule.autocompleteUsed
  );
  const dispatch: AppDispatch = useDispatch();

  const timeValue = times[colIndex][timeIndex];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      addTime({
        colIndex,
        timeIndex,
        value: event.target.value,
      })
    );
  };

  const handleRemove = () => {
    dispatch(
      removeTime({
        colIndex,
        timeIndex,
      })
    );
  };

  return (
    <div className={styles.container}>
      <DateOrTimePicker
        type='time'
        variant={autocompleteUsed ? 'primary' : 'secondary'}
        onChange={handleChange}
        value={timeValue}
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
  );
};
