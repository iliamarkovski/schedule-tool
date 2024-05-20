import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { validateSchedule } from '../../../utils/validateSchedule';
import { Button } from '../Button';
import { openModal } from '../../../store/slices/modal';
import { addTimeSlot } from '../../../store/slices/schedule';
import { MODAL_NAMES } from '../../../constants/modalNames';

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
      dispatch(openModal(MODAL_NAMES.INVALID_TIME));

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
