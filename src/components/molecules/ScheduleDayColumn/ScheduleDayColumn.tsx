import { DateTitle } from '../../atoms/DateTitle';
import { Button } from '../../atoms/Button';

import { getDayOfWeek } from '../../../utils/getDayOfWeek';
import { formatDate } from '../../../utils/formatDate';

import styles from './ScheduleDayColumn.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { getNextDays } from '../../../utils/nextDays';
import { addTimeSlot } from '../../../store/slices/schedule';
import { TimeButton } from '../TimeButton';
import { validateArray } from '../../../utils/validateArray';
import { updateModal } from '../../../store/slices/modal';

type Props = {
  colIndex: number;
};

export const ScheduleDayColumn = ({ colIndex }: Props) => {
  const rangeStart = useSelector(
    (state: RootState) => state.schedule.rangeStart
  );

  const times = useSelector((state: RootState) => state.schedule.times);

  const dispatch: AppDispatch = useDispatch();

  const colDate = getNextDays(new Date(rangeStart), colIndex);

  const day = getDayOfWeek(colDate);
  const formattedDate = formatDate(colDate, 'dd.mm.yyyy');

  const colTimes = times[colIndex];
  const timesValidator = validateArray(colTimes);

  const handleAddClick = () => {
    if (!timesValidator.isEmpty && !timesValidator.isValid) {
      dispatch(
        updateModal({
          buttonTitle: 'OK',
          isOpen: true,
          title: 'Please select a time!',
        })
      );

      return;
    }

    dispatch(addTimeSlot(colIndex));
  };

  return (
    <div className={styles.container}>
      <DateTitle day={day} date={formattedDate} />

      <div className={styles.column}>
        {colTimes.length > 0 ? (
          <>
            {colTimes.map((_, index) => {
              return (
                <TimeButton
                  key={`${colIndex}-${index}`}
                  colIndex={colIndex}
                  timeIndex={index}
                />
              );
            })}
          </>
        ) : null}

        {colTimes.length < 4 ? (
          <div className={styles.button}>
            <Button variant='tertiary' fullWidth onClick={handleAddClick}>
              Add Time
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
