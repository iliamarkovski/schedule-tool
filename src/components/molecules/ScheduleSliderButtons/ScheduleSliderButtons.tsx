import { useDispatch, useSelector } from 'react-redux';
import { ArrowButton } from '../../atoms/ArrowButton/ArrowButton';
import styles from './ScheduleSliderButtons.module.scss';
import { AppDispatch, RootState } from '../../../store';
import { updateScrollStep } from '../../../store/slices/schedule';

export const ScheduleSliderButtons = () => {
  const times = useSelector((state: RootState) => state.schedule.times);
  const scrollStep = useSelector(
    (state: RootState) => state.schedule.scrollStep
  );
  const dispatch: AppDispatch = useDispatch();

  const visibleItems = 7;

  const itemsToScroll = times.length - visibleItems;

  const handleNextClick = () => {
    let stepsToScroll = visibleItems;
    if (scrollStep + stepsToScroll > itemsToScroll) {
      stepsToScroll = itemsToScroll - scrollStep;
    }

    dispatch(updateScrollStep(scrollStep + stepsToScroll));
  };

  const handlePrevClick = () => {
    let stepsToScroll = visibleItems;

    if (scrollStep - stepsToScroll < 0) {
      stepsToScroll = scrollStep;
    }

    dispatch(updateScrollStep(scrollStep - stepsToScroll));
  };

  return (
    <div className={styles.container}>
      <ArrowButton
        onClick={handlePrevClick}
        iconName='arrow-left'
        disabled={scrollStep === 0}
      />

      <ArrowButton
        onClick={handleNextClick}
        iconName='arrow-right'
        disabled={scrollStep === itemsToScroll}
      />
    </div>
  );
};
