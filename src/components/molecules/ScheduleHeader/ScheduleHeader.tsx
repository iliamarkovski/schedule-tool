import { useSelector } from 'react-redux';
import { ScheduleRange } from '../ScheduleRange';
import { ScheduleSliderButtons } from '../ScheduleSliderButtons';
import styles from './ScheduleHeader.module.scss';
import { RootState } from '../../../store';

export const ScheduleHeader = () => {
  const times = useSelector((state: RootState) => state.schedule.times);

  return (
    <header className={styles.header}>
      <ScheduleRange />

      {times.length > 7 ? <ScheduleSliderButtons /> : null}
    </header>
  );
};
