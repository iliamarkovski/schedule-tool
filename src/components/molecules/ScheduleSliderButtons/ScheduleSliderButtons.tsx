import { ArrowButton } from '../../atoms/ArrowButton/ArrowButton';
import styles from './ScheduleSliderButtons.module.scss';

export const ScheduleSliderButtons = () => {
  return (
    <div className={styles.container}>
      <ArrowButton onClick={() => console.log(1)} iconRotated />
      <ArrowButton onClick={() => console.log(1)} disabled />
    </div>
  );
};
