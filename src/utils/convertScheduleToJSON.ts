import { formatDate } from './formatDate';
import { getNextDays } from './nextDays';

export const convertScheduleToJSON = (arr: string[][], startingDate: Date) => {
  let result: {
    date: string;
    times: string[];
  }[] = [];

  arr.forEach((times, index) => {
    const currDay = getNextDays(new Date(startingDate), index);
    const formattedDate = formatDate(currDay, 'dd.mm.yyyy');

    result.push({
      date: formattedDate,
      times: times,
    });
  });

  return JSON.stringify(result, null, 2);
};
