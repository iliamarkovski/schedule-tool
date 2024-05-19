import { useSelector, useDispatch } from 'react-redux';
import { Label } from '../../atoms/Label';
import { AppDispatch, RootState } from '../../../store';
import { addRangeStart, addRangeEnd } from '../../../store/slices/schedule';
import styles from './ScheduleRange.module.scss';
import { ChangeEvent } from 'react';
import { DateOrTimePicker } from '../../atoms/DatePicker';

export const ScheduleRange = () => {
  const rangeStart = useSelector(
    (state: RootState) => state.schedule.rangeStart
  );
  const rangeEnd = useSelector((state: RootState) => state.schedule.rangeEnd);
  const rangeDiff = useSelector((state: RootState) => state.schedule.rangeDiff);

  const dispatch: AppDispatch = useDispatch();

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addRangeStart(event.target.value));
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addRangeEnd(event.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <Label title='Start-Date' />

          <DateOrTimePicker
            type='date'
            onChange={handleStartDateChange}
            max={rangeEnd}
            value={rangeStart}
          />
        </div>

        <div className={styles.input}>
          <Label title='End-Date' />

          <DateOrTimePicker
            type='date'
            onChange={handleEndDateChange}
            min={rangeStart}
            value={rangeEnd}
          />
        </div>
      </div>

      {rangeDiff > 0 ? (
        <div className={styles.label}>
          <Label title={`${rangeDiff} day${rangeDiff > 1 ? 's' : ''}`} />
        </div>
      ) : null}
    </div>
  );
};
