export const generateAutocomplete = (arr: string[][]) => {
  let template = arr.filter((item) => item.length > 0);

  let filledArray = arr.map((item, index) => {
    if (item.length === 0) {
      return template[index % template.length];
    }
    return item;
  });

  return filledArray;
};
