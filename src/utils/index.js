export const range = (start, end) => {
  let length = end - start;

  return Array.from({ length }, (_, idx) => idx + start);
};
