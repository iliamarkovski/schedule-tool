import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { Button } from '../../atoms/Button';
import styles from './ScheduleButtons.module.scss';
import { resetTimes } from '../../../store/slices/schedule';

export const ScheduleButtons = () => {
  const hasReset = useSelector((state: RootState) => state.schedule.hasReset);
  const dispatch: AppDispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(resetTimes());
  };

  return (
    <div className={styles.container}>
      <Button
        variant='secondary'
        onClick={handleResetClick}
        disabled={!hasReset}
      >
        Reset
      </Button>

      <Button>Autocomplete</Button>

      <Button variant='secondary' disabled>
        Upload
      </Button>
    </div>
  );
};
