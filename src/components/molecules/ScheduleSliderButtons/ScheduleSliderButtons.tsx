import { ArrowButton } from '../../atoms/ArrowButton/ArrowButton';
import styles from './ScheduleSliderButtons.module.scss';

export const ScheduleSliderButtons = () => {
  return (
    <div className={styles.container}>
      <ArrowButton
        onClick={() => console.log(1)}
        iconName='arrow-left'
        disabled
      />

      <ArrowButton onClick={() => console.log(1)} iconName='arrow-right' />
    </div>
  );
};
