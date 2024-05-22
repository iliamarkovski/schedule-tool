import { useDispatch, useSelector } from 'react-redux';
import styles from './ScheduleDaysColumns.module.scss';
import { AppDispatch, RootState } from '../../../store';
import { ScheduleDayColumn } from '../ScheduleDayColumn';
import { useEffect, useRef } from 'react';
import { updateScrollStep } from '../../../store/slices/schedule';
import { getScrollLeft } from '../../../utils/getScrollLeft';

export const ScheduleDaysColumns = () => {
  const times = useSelector((state: RootState) => state.schedule.times);
  const timesLength = times.length;

  const scrollStep = useSelector(
    (state: RootState) => state.schedule.scrollStep
  );
  const dispatch: AppDispatch = useDispatch();

  const scrollContainer = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<number | null>(null);

  const visibleItems = 7;

  useEffect(() => {
    if (!scrollContainer.current) return;

    const { clientWidth, scrollWidth } = scrollContainer.current;
    const itemsToScroll = timesLength - visibleItems;

    if (itemsToScroll > 0) {
      const scrollLeft = getScrollLeft(clientWidth, scrollWidth, itemsToScroll);
      scrollContainer.current.scrollLeft = scrollStep * scrollLeft;
    }
  }, [timesLength, visibleItems, scrollStep]);

  const handleScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = window.setTimeout(() => {
      if (scrollContainer.current) {
        const { clientWidth, scrollWidth } = scrollContainer.current;
        const itemsToScroll = timesLength - visibleItems;
        const scrollItemWidth = (scrollWidth - clientWidth) / itemsToScroll;
        const step = Math.round(
          scrollContainer.current.scrollLeft / scrollItemWidth
        );

        dispatch(updateScrollStep(step));
      }
    }, 200);
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={scrollContainer}>
      {times.map((_, index) => {
        return (
          <div className={styles.col} key={index}>
            <ScheduleDayColumn colIndex={index} />
          </div>
        );
      })}
    </div>
  );
};
