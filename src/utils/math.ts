export const getOneRepMax = (numberOfReps: number, weight: number) => {
  return weight * (1 + numberOfReps / 30);
};

export const TwoDigitsNumber = (num: number) => {
  return Math.round(num * 100) / 100;
};
