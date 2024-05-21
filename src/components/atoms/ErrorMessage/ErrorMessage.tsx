import styles from './ErrorMessage.module.scss';

type Props = {
  type?: 'error' | 'warning';
  text: string;
};

export const ErrorMessage = ({ type = 'error', text }: Props) => {
  return <p className={`${styles.message} ${styles[type]}`}>{text}</p>;
};
