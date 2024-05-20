import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { validateSchedule } from '../../../utils/validateSchedule';
import { resetTimes } from '../../../store/slices/schedule';
import { Button } from '../Button';

export const ResetButton = () => {
  const times = useSelector((state: RootState) => state.schedule.times);
  const dispatch: AppDispatch = useDispatch();

  const { started } = validateSchedule(times);
  const enable = started;

  const handleClick = () => {
    dispatch(resetTimes());
  };

  return (
    <Button variant='secondary' onClick={handleClick} disabled={!enable}>
      Reset
    </Button>
  );
};
