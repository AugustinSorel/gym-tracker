// DATE FORMAT - YEAR-MM-DD
export const getCurrentDate = () => {
  return new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
};

export const getDateInFrenchFormat = (date: string) => {
  return new Date(date).toLocaleDateString("Fr-fr", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};
