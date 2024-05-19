import styles from './ModalTitle.module.scss';

type Props = {
  title: string;
};

export const ModalTitle = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};
