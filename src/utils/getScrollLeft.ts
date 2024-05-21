export const getScrollLeft = (
  containerWidth: number,
  scrollWidth: number,
  itemsToScroll: number
) => {
  if (scrollWidth <= containerWidth) {
    return scrollWidth;
  }

  return Math.round((scrollWidth - containerWidth) / itemsToScroll);
};
