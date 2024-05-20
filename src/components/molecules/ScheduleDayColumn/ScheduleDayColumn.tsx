import { DateTitle } from '../../atoms/DateTitle';

import { getDayOfWeek } from '../../../utils/getDayOfWeek';
import { formatDate } from '../../../utils/formatDate';

import styles from './ScheduleDayColumn.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { getNextDays } from '../../../utils/nextDays';
import { TimeButton } from '../TimeButton';
import { AddTimeButton } from '../../atoms/AddTimeButton';

type Props = {
  colIndex: number;
};

export const ScheduleDayColumn = ({ colIndex }: Props) => {
  const startDate = useSelector((state: RootState) => state.schedule.startDate);
  const times = useSelector((state: RootState) => state.schedule.times);

  const colDate = getNextDays(new Date(startDate), colIndex);

  const day = getDayOfWeek(colDate);
  const formattedDate = formatDate(colDate, 'dd.mm.yyyy');

  const colTimes = times[colIndex];

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
            <AddTimeButton colIndex={colIndex} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
