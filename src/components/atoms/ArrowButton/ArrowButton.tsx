import styles from './ArrowButton.module.scss';
import { Icon } from '../Icon';

type Props = {
  onClick: () => void;
  iconName?: 'arrow-left' | 'arrow-right';
  disabled?: boolean;
  title?: string;
};

export const ArrowButton = ({
  onClick,
  iconName = 'arrow-left',
  disabled,
  title = 'Arrow button',
}: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      <Icon name={iconName} className={styles.icon} />
    </button>
  );
};
