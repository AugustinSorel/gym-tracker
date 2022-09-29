const getRandomValue = () => {
  return Math.random() * 100;
};

const data = () => [
  {
    name: "Page A",
    actual: getRandomValue(),
    predicted: getRandomValue(),
  },
  {
    name: "Page B",
    actual: getRandomValue(),
    predicted: getRandomValue(),
  },
  {
    name: "Page C",
    actual: getRandomValue(),
    predicted: getRandomValue(),
  },
  {
    name: "Page D",
    actual: getRandomValue(),
    predicted: getRandomValue(),
  },
  {
    name: "Page E",
    actual: getRandomValue(),
    predicted: getRandomValue(),
  },
  {
    name: "Page F",
    actual: getRandomValue(),
    predicted: getRandomValue(),
  },
  {
    name: "Page G",
    actual: getRandomValue(),
    predicted: getRandomValue(),
  },
];

export default data;
