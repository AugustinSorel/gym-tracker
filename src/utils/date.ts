// DATE FORMAT - MM-DD-YEAR
export const getCurrentDateFormated = () => {
  return `${
    new Date().getMonth() + 1
  }-${new Date().getDate()}-${new Date().getFullYear()}`;
};
