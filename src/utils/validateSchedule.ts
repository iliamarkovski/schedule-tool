export const validateSchedule = (arr: string[][]) => {
  const validation: {
    empty: boolean;
    started: boolean;
    completed: boolean;
    invalid: boolean;
  } = {
    empty: false,
    started: false,
    completed: false,
    invalid: false,
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

    // Check if the nested array contains an empty string
    for (let str of nestedArr) {
      if (str === '') {
        validation.invalid = true;
        break;
      }
    }
  }

  const { empty, invalid } = validation;
  if (!empty && !invalid) {
    validation.completed = true;
  }

  return { ...validation };
};
