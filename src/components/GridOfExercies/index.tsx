import Link from "next/link";
import { memo, useRef } from "react";
import { Legend, Line, LineChart, ResponsiveContainer } from "recharts";
import theme from "src/styles/theme";
import { InferProcedures, trpc } from "src/utils/trpc";
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

const Grid = memo(
  ({
    exercises,
  }: {
    exercises: InferProcedures["exercise"]["all"]["output"];
  }) => {
    const renderCounter = useRef(0);
    renderCounter.current += 1;

    return (
      <Styles.Grid>
        {exercises.map((exercise, i) => (
          <Link href={`/exercise/${exercise.name}`} passHref key={exercise.id}>
            <Styles.Anchor delay={i * 50 * (renderCounter.current > 1 ? 0 : 1)}>
              <Styles.Item>
                <Styles.Header>
                  <Styles.ExerciseName>{exercise.name}</Styles.ExerciseName>
                </Styles.Header>

                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={exercise.Data}
                    margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
                  >
                    <Line
                      type="monotone"
                      dataKey="oneRepMax"
                      stroke={theme.colors.action}
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="predictedOneRepMax"
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
  }
);
Grid.displayName = "GridComponent";

const GridOfExercises = () => {
  const exercisesQuery = trpc.exercise.all.useQuery();

  if (exercisesQuery.isLoading || !exercisesQuery.data) {
    return <GridSkeleton />;
  }

  // TODO: Something better ?
  if (exercisesQuery.data.length < 1) {
    return <p>No data</p>;
  }

  return <Grid exercises={exercisesQuery.data} />;
};

export default GridOfExercises;
