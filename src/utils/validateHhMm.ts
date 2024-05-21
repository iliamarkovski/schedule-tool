export const validateHhMm = (value: string) => {
  var isValid = /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);

  return isValid;
};
