import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import { AppDispatch, RootState } from '../../../store';
import { validateSchedule } from '../../../utils/validateSchedule';
import {
  setAutocompleteTimes,
  setTimes,
  updateIsAutocompleteUsed,
} from '../../../store/slices/schedule';
import { generateAutocomplete } from '../../../utils/generateAutocomplete';
import { useRef } from 'react';

export const AutocompleteButton = () => {
  const times = useSelector((state: RootState) => state.schedule.times);
  const isAutocompleteUsed = useSelector(
    (state: RootState) => state.schedule.isAutocompleteUsed
  );
  const dispatch: AppDispatch = useDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { started, invalid, completed, unsorted } = validateSchedule(times);
  const enable =
    started && !invalid && !completed && !isAutocompleteUsed && !unsorted;

  const handleMouseEnter = () => {
    dispatch(setAutocompleteTimes(generateAutocomplete(times)));

    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const handleMouseLeave = () => {
    if (enable) {
      dispatch(setAutocompleteTimes([]));
    }
  };

  const handleClick = () => {
    dispatch(updateIsAutocompleteUsed());
    dispatch(setTimes(generateAutocomplete(times)));
  };

  return (
    <Button
      disabled={!enable}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handleClick}
      ref={buttonRef}
    >
      Autocomplete
    </Button>
  );
};
