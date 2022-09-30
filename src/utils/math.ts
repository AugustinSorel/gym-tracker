export const getOneRepMax = (numberOfReps: number, weight: number) => {
  return weight * (1 + numberOfReps / 30);
};
