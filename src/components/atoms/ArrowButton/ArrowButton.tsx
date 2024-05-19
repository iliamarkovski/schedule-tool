import styles from './ArrowButton.module.scss';

type Props = {
  onClick: () => void;
  iconRotated?: boolean;
  disabled?: boolean;
  title?: string;
};

export const ArrowButton = ({
  onClick,
  iconRotated,
  disabled,
  title = 'Arrow button',
}: Props) => {
  return (
    <button
      className={`${styles.button} ${iconRotated ? styles.rotated : ''}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    />
  );
};
