import { useSelector, useDispatch } from 'react-redux';
import { Label } from '../../atoms/Label';
import { AppDispatch, RootState } from '../../../store';
import { addStartDate, addEndDate } from '../../../store/slices/schedule';
import styles from './ScheduleRange.module.scss';
import { ChangeEvent } from 'react';
import { DateOrTimePicker } from '../../atoms/DateOrTimePicker';

export const ScheduleRange = () => {
  const startDate = useSelector((state: RootState) => state.schedule.startDate);
  const endDate = useSelector((state: RootState) => state.schedule.endDate);
  const datesDiff = useSelector((state: RootState) => state.schedule.datesDiff);

  const dispatch: AppDispatch = useDispatch();

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addStartDate(event.target.value));
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addEndDate(event.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <Label title='Start-Date' />

          <DateOrTimePicker
            type='date'
            onChange={handleStartDateChange}
            max={endDate}
            value={startDate}
          />
        </div>

        <div className={styles.input}>
          <Label title='End-Date' />

          <DateOrTimePicker
            type='date'
            onChange={handleEndDateChange}
            min={startDate}
            value={endDate}
          />
        </div>
      </div>

      {datesDiff > 0 ? (
        <div className={styles.label}>
          <Label title={`${datesDiff} day${datesDiff > 1 ? 's' : ''}`} />
        </div>
      ) : null}
    </div>
  );
};
