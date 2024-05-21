import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ScheduleDayColumn } from '../../molecules/ScheduleDayColumn';
import styles from './ScheduleCalendar.module.scss';
import { ScheduleCreatedModal } from '../../molecules/ScheduleCreatedModal';
import { MODAL_NAMES } from '../../../constants/modalNames';
import { useRef } from 'react';
import { getScrollLeft } from '../../../utils/getScrollLeft';

export const ScheduleCalendar = () => {
  const columns = useSelector((state: RootState) => state.schedule.times);
  const activeModal = useSelector(
    (state: RootState) => state.modal.activeModal
  );
  const scrollStep = useSelector(
    (state: RootState) => state.schedule.scrollStep
  );

  const scrollableContainer = useRef<HTMLDivElement>(null);

  if (scrollableContainer.current) {
    const { clientWidth, scrollWidth } = scrollableContainer.current;
    const itemsToScroll = columns.length - 7;

    const scrollLeft = getScrollLeft(clientWidth, scrollWidth, itemsToScroll);
    scrollableContainer.current.scrollLeft = scrollStep * scrollLeft;
    scrollableContainer.current.scrollLeft;
  }

  // const handleScroll = () => {
  //   if (scrollableContainer.current) {
  //     dispatch(
  //       updateScrollStep(
  //         Math.round(scrollableContainer.current?.scrollLeft / 172)
  //       )
  //     );
  //   }
  // };

  return (
    <div className={styles.container} ref={scrollableContainer}>
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

      {activeModal === MODAL_NAMES.SCHEDULE_CREATED ? (
        <ScheduleCreatedModal />
      ) : null}
    </div>
  );
};
