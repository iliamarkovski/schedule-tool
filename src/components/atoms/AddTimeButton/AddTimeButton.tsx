import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { validateSchedule } from '../../../utils/validateSchedule';
import { Button } from '../Button';
import { addTimeSlot } from '../../../store/slices/schedule';

type Props = {
  colIndex: number;
};

export const AddTimeButton = ({ colIndex }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const times = useSelector((state: RootState) => state.schedule.times);

  const colTimes = times[colIndex];

  const handleClick = () => {
    const { empty, invalid } = validateSchedule([colTimes]);

    if (!empty && invalid) {
      return;
    }

    dispatch(addTimeSlot(colIndex));
  };

  return (
    <Button variant='tertiary' fullWidth onClick={handleClick}>
      Add Time
    </Button>
  );
};
