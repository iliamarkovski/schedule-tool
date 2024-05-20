import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ScheduleDayColumn } from '../../molecules/ScheduleDayColumn';
import styles from './ScheduleCalendar.module.scss';
import { InvalidTimeModal } from '../../molecules/InvalidTimeModal';
import { ScheduleCreatedModal } from '../../molecules/ScheduleCreatedModal';
import { MODAL_NAMES } from '../../../constants/modalNames';

export const ScheduleCalendar = () => {
  const columns = useSelector((state: RootState) => state.schedule.times);
  const activeModal = useSelector(
    (state: RootState) => state.modal.activeModal
  );

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

      {activeModal === MODAL_NAMES.INVALID_TIME ? <InvalidTimeModal /> : null}
      {activeModal === MODAL_NAMES.SCHEDULE_CREATED ? (
        <ScheduleCreatedModal />
      ) : null}
    </div>
  );
};
