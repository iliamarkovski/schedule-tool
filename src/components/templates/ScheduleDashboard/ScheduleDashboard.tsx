import styles from './ScheduleDashboard.module.scss';
import { ScheduleButtons } from '../../molecules/ScheduleButtons';
import { ScheduleHeader } from '../../molecules/ScheduleHeader/ScheduleHeader';
import { ScheduleCalendar } from '../../organisms/ScheduleCalendar';
import { Divider } from '../../atoms/Divider';
import { Title } from '../../atoms/Title';

export const ScheduleDashboard = () => {
  return (
    <div className={styles.container}>
      <Title title='Create new Schedule' />
      <Divider size='xl' />
      <ScheduleHeader />
      <Divider size='m' />
      <ScheduleCalendar />
      <Divider size='l' />
      <ScheduleButtons />
    </div>
  );
};
