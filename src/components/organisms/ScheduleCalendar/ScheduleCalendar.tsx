import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ScheduleDayColumn } from '../../molecules/ScheduleDayColumn';
import styles from './ScheduleCalendar.module.scss';

export const ScheduleCalendar = () => {
  const columns = useSelector((state: RootState) => state.schedule.times);

  return (
    <div className={styles.container}>
      {columns ? (
        <>
          {columns.map((_, index) => {
            return (
              <div className={styles.col} key={index}>
                <ScheduleDayColumn colIndex={index} />
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
