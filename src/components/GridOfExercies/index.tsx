import { Exercise } from "@prisma/client";
import { memo, useRef } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import theme from "src/styles/theme";
import trpc from "src/utils/trpc";
import SvgIcon from "../SvgIcon";
import * as Styles from "./index.styled";

const GridSkeleton = () => {
  return (
    <Styles.GridSkeleton>
      {[...Array(10)].map((_, i) => (
        <Styles.ItemSkeleton key={i}>
          <Styles.HeaderSkeleton />
        </Styles.ItemSkeleton>
      ))}
    </Styles.GridSkeleton>
  );
};

const Grid = memo(({ exercises }: { exercises: Exercise[] }) => {
  const renderCounter = useRef(0);
  renderCounter.current += 1;

  const getRandomValue = () => {
    return Math.random() * 100;
  };

  const data = () => [
    {
      name: "Page A",
      pv: getRandomValue(),
    },
    {
      name: "Page B",
      pv: getRandomValue(),
    },
    {
      name: "Page C",
      pv: getRandomValue(),
    },
    {
      name: "Page D",
      pv: getRandomValue(),
    },
    {
      name: "Page E",
      pv: getRandomValue(),
    },
    {
      name: "Page F",
      pv: getRandomValue(),
    },
    {
      name: "Page G",
      pv: getRandomValue(),
    },
  ];

  return (
    <Styles.Grid>
      {exercises.map((exercise, i) => (
        <Styles.Item
          tabIndex={0}
          key={exercise.id}
          delay={i * 50 * (renderCounter.current > 1 ? 0 : 1)}
        >
          <Styles.Header>
            <Styles.ExerciseName>{exercise.name}</Styles.ExerciseName>
            <SvgIcon svgName="menu" />
          </Styles.Header>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data()}
              margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
            >
              <Line
                type="monotone"
                dataKey="pv"
                stroke={theme.colors.action}
                strokeWidth={1}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Styles.Item>
      ))}
    </Styles.Grid>
  );
});
Grid.displayName = "GridComponent";

const GridOfExercises = () => {
  const exercisesQuery = trpc.exercise.all.useQuery();

  if (exercisesQuery.isLoading || !exercisesQuery.data) {
    return <GridSkeleton />;
  }

  if (exercisesQuery.data.length < 1) {
    return <p>No data</p>;
  }

  return <Grid exercises={exercisesQuery.data} />;
};

export default GridOfExercises;
