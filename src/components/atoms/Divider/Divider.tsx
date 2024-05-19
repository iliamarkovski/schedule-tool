import styles from './Divider.module.scss';

type Props = {
  size: 'm' | 'l' | 'xl';
};

export const Divider = ({ size }: Props) => {
  return <div className={styles[size]} />;
};
