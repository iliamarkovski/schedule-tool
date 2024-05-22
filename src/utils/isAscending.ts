export const isAscending = (times: string[]) => {
  for (let i = 0; i < times.length - 1; i++) {
    if (times[i] >= times[i + 1]) {
      return false;
    }
  }
  return true;
};
