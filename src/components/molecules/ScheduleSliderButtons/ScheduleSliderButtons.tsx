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

  const itemsToScroll = times.length - 7;

  const handleNextClick = () => {
    dispatch(updateScrollStep(scrollStep + 1));
  };

  const handlePrevClick = () => {
    dispatch(updateScrollStep(scrollStep - 1));
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
