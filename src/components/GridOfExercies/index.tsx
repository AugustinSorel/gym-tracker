import { Exercise } from "@prisma/client";
import Link from "next/link";
import { memo, useRef } from "react";
import { Legend, Line, LineChart, ResponsiveContainer } from "recharts";
import theme from "src/styles/theme";
import data from "src/utils/toDelete";
import trpc from "src/utils/trpc";
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

  return (
    <Styles.Grid>
      {exercises.map((exercise, i) => (
        <Link href={`/exercise/${exercise.id}`} passHref key={exercise.id}>
          <Styles.Anchor delay={i * 50 * (renderCounter.current > 1 ? 0 : 1)}>
            <Styles.Item>
              <Styles.Header>
                <Styles.ExerciseName>{exercise.name}</Styles.ExerciseName>
              </Styles.Header>

              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data()}
                  margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
                >
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke={theme.colors.action}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke={theme.colors[400]}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </Styles.Item>
          </Styles.Anchor>
        </Link>
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
