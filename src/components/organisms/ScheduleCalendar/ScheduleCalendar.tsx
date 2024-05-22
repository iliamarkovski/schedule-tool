import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ScheduleCreatedModal } from '../../molecules/ScheduleCreatedModal';
import { MODAL_NAMES } from '../../../constants/modalNames';
import { ScheduleDaysColumns } from '../../molecules/ScheduleDaysColumns';
import styles from './ScheduleCalendar.module.scss';

export const ScheduleCalendar = () => {
  const times = useSelector((state: RootState) => state.schedule.times);

  const activeModal = useSelector(
    (state: RootState) => state.modal.activeModal
  );

  return (
    <div className={styles.container}>
      {times.length > 0 ? <ScheduleDaysColumns key={times.length} /> : null}

      {activeModal === MODAL_NAMES.SCHEDULE_CREATED ? (
        <ScheduleCreatedModal />
      ) : null}
    </div>
  );
};
