export const formatDate = (date: Date, format: 'dd.mm.yyyy' | 'yyyy-mm-dd') => {
  const day = String(date.getDate()).padStart(2, '0'); // Get day and ensure two digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month, adding 1 since getMonth() is zero-based
  const year = date.getFullYear(); // Get full year

  let formattedDate = '';
  switch (format) {
    case 'dd.mm.yyyy':
      formattedDate = `${day}.${month}.${year}`;
      break;
    default:
      formattedDate = `${year}-${month}-${day}`;
  }

  return formattedDate;
};
