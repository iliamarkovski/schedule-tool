export const validateArray = (array: string[]) => {
  const validator = {
    isValid: false,
    isEmpty: true,
  };

  if (array.length === 0) {
    return validator;
  }

  if (array.some((item) => item === '')) {
    return { ...validator, isEmpty: false };
  }

  return { ...validator, isEmpty: false, isValid: true };
};
