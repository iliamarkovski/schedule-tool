import { DateTitle } from '../../atoms/DateTitle';

import { getDayOfWeek } from '../../../utils/getDayOfWeek';
import { formatDate } from '../../../utils/formatDate';

import styles from './ScheduleDayColumn.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { getNextDays } from '../../../utils/nextDays';
import { AddTimeButton } from '../../atoms/AddTimeButton';
import { TimeInput } from '../TimeInput';

type Props = {
  colIndex: number;
};

export const ScheduleDayColumn = ({ colIndex }: Props) => {
  const startDate = useSelector((state: RootState) => state.schedule.startDate);
  const isAutocompleteUsed = useSelector(
    (state: RootState) => state.schedule.isAutocompleteUsed
  );
  const times = useSelector((state: RootState) => state.schedule.times);
  const autocompletedTimes = useSelector(
    (state: RootState) => state.schedule.autocompletedTimes
  );

  const colDate = getNextDays(new Date(startDate), colIndex);

  const day = getDayOfWeek(colDate);
  const formattedDate = formatDate(colDate, 'dd.mm.yyyy');

  const colTimes = times[colIndex];
  const autocompletedColTimes = autocompletedTimes[colIndex];

  const isButtonVisible = colIndex > 0 ? times[colIndex - 1].length > 0 : true;

  const showAutocompletedTimes = colTimes.length === 0 && !isAutocompleteUsed;

  return (
    <div className={styles.container}>
      <DateTitle day={day} date={formattedDate} />

      <div className={styles.column}>
        {colTimes?.map((value, index) => {
          const disableAutoFocus =
            colTimes[index] !== autocompletedColTimes?.[index];

          return (
            <TimeInput
              key={`${colIndex}-${index}`}
              colIndex={colIndex}
              timeIndex={index}
              variant={isAutocompleteUsed ? 'primary' : 'secondary'}
              autoFocus={disableAutoFocus}
              value={value}
            />
          );
        })}

        {showAutocompletedTimes &&
          autocompletedColTimes?.map((value, index) => {
            return (
              <TimeInput
                key={`${colIndex}-${index}`}
                colIndex={colIndex}
                timeIndex={index}
                variant='tertiary'
                value={value}
              />
            );
          })}

        {isButtonVisible && colTimes.length < 4 ? (
          <div className={styles.button}>
            <AddTimeButton colIndex={colIndex} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
