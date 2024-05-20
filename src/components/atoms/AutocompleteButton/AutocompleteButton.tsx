import { useSelector } from 'react-redux';
import { Button } from '../Button';
import { RootState } from '../../../store';
import { validateSchedule } from '../../../utils/validateSchedule';

export const AutocompleteButton = () => {
  const times = useSelector((state: RootState) => state.schedule.times);

  const { started, invalid } = validateSchedule(times);
  const enable = started && !invalid;

  return <Button disabled={!enable}>Autocomplete</Button>;
};
