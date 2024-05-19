import styles from './Label.module.scss';

type Props = {
  title: string;
};

export const Label = ({ title }: Props) => {
  return <span className={styles.label}>{title}</span>;
};
