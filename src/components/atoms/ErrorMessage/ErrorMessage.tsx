import styles from './ErrorMessage.module.scss';

type Props = {
  variant?: 'error' | 'note';
  text: string;
};

export const ErrorMessage = ({ variant = 'error', text }: Props) => {
  return <p className={`${styles.message} ${styles[variant]}`}>{text}</p>;
};
