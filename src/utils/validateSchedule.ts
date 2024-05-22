import { isAscending } from './isAscending';
import { validateHhMm } from './validateHhMm';

export const validateSchedule = (arr: string[][]) => {
  const validation: {
    empty: boolean;
    started: boolean;
    completed: boolean;
    invalid: boolean;
    unsorted: boolean;
  } = {
    empty: false,
    started: false,
    completed: false,
    invalid: false,
    unsorted: false,
  };

  if (arr.length === 0) {
    return validation;
  }

  for (let nestedArr of arr) {
    // Check if the nested array is empty
    if (nestedArr.length === 0) {
      validation.empty = true;
    }

    if (nestedArr.length > 0) {
      validation.started = true;
    }

    for (let str of nestedArr) {
      // Check if the nested array contains a valid time format
      if (!validateHhMm(str)) {
        validation.invalid = true;
        break;
      }
    }

    if (!validation.invalid && !isAscending(nestedArr)) {
      validation.unsorted = true;
    }
  }

  const { empty, invalid } = validation;
  if (!empty && !invalid) {
    validation.completed = true;
  }

  return { ...validation };
};
