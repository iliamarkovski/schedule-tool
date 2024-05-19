import styles from './DateTitle.module.scss';

type Props = {
  day: string;
  date: string;
};

export const DateTitle = ({ day, date }: Props) => {
  return (
    <div className={styles.container}>
      <strong>{day}</strong>
      <span>{date}</span>
    </div>
  );
};
