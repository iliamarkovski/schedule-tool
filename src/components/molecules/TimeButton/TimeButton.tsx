import { ChangeEvent } from 'react';
import { DateOrTimePicker } from '../../atoms/DatePicker';
import styles from './TimeButton.module.scss';
import { addTime } from '../../../store/slices/schedule';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';

type Props = {
  colIndex: number;
  timeIndex: number;
};

export const TimeButton = ({ colIndex, timeIndex }: Props) => {
  const times = useSelector((state: RootState) => state.schedule.times);
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

  return (
    <div className={styles.container}>
      <DateOrTimePicker type='time' onChange={handleChange} value={timeValue} />

      {/* <button className={styles.tile} type='button' onClick={onRemove}>
        {value}
      </button> */}
    </div>
  );
};
