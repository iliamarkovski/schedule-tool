export const getDiffDays = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Calculate the difference in milliseconds and convert it to days
  const diffInMilliseconds = endDate.getTime() - startDate.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  return +Math.ceil(diffInDays);
};
