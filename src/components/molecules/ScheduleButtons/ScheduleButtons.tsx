import styles from './ScheduleButtons.module.scss';
import { AutocompleteButton } from '../../atoms/AutocompleteButton';
import { ResetButton } from '../../atoms/ResetButton';
import { UploadButton } from '../../atoms/UploadButton';

export const ScheduleButtons = () => {
  return (
    <div className={styles.container}>
      <ResetButton />

      <AutocompleteButton />

      <UploadButton />
    </div>
  );
};
