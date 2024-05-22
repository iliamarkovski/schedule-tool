import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { AppDispatch, RootState } from '../../../store';
import { validateSchedule } from '../../../utils/validateSchedule';
import { convertScheduleToJSON } from '../../../utils/convertScheduleToJSON';
import { openModal } from '../../../store/slices/modal';
import { MODAL_NAMES } from '../../../constants/modalNames';

export const UploadButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const times = useSelector((state: RootState) => state.schedule.times);
  const startDate = useSelector((state: RootState) => state.schedule.startDate);

  const { completed, unsorted } = validateSchedule(times);
  const enable = completed && !unsorted;

  const handleClick = () => {
    const scheduleJSON = convertScheduleToJSON(times, new Date(startDate));

    console.log('schedule JSON: ', scheduleJSON);

    dispatch(openModal(MODAL_NAMES.SCHEDULE_CREATED));
  };

  return (
    <Button variant='secondary' disabled={!enable} onClick={handleClick}>
      Upload
    </Button>
  );
};
